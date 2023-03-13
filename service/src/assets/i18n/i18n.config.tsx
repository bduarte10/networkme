import { initReactI18next } from 'react-i18next';
import i18n, { i18n as i18nInterface } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocizeBackend from 'i18next-locize-backend';
import Backend from 'i18next-chained-backend';
import { locizePlugin } from 'locize';
import LastUsed from 'locize-lastused';
import moment from 'moment';
import { api } from 'infra/axios/axios.config';
import CustomBackend from './custom-backend.config';
// import mixpanel from 'mixpanel-browser';
import 'moment/locale/pt';

const isProduction = process.env.NODE_ENV === 'production';

const locizeOptions: any = {
  projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
  apiKey: process.env.REACT_APP_LOCIZE_APIKEY,
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
  version: process.env.REACT_APP_LOCIZE_VERSION
};

if (!isProduction) {
  i18n.use(LastUsed);
}

type GetLng = () => string;
const getLng: GetLng = () => {
  try {
    return window?.localStorage?.getItem("i18nextLng") || 'pt'
  } catch (e) {
    return 'pt'
  }
}

i18n
  .use(locizePlugin)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<any>({
    // saveMissing: !isProduction,
    saveMissing: false,
    lng: getLng(),
    load: "all",
    ns: ['translation', 'main', 'survey', 'SEO', 'recruiter'],
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
      skipOnVariables: false,
      format: (value, format) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        if (value instanceof Date) return moment(value).format(format);
        if (moment.isMoment(value)) return value.format(format);
        return value;
      }
    },
    backend: {
      backends: [
        LocizeBackend,
        CustomBackend
      ],
      backendOptions: [
        locizeOptions
      ],
    },
    locizeLastUsed: locizeOptions
  });

// eslint-disable-next-line import/prefer-default-export
const languageChanged = (lng: string | undefined) => {
  // mixpanel.register({ lng })
  moment.locale(lng, {
    week: {
      dow: 1,
      doy: 4
    }
  })
  api.defaults.headers.Lang = lng?.toUpperCase() || "PT";
}

declare global {
  interface Window { i18n: i18nInterface; }
}
window.i18n = i18n;

i18n.on("initialized", ({ lng }) => languageChanged(lng))
i18n.on("languageChanged", languageChanged)

