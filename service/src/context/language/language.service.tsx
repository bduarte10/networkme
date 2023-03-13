import moment from "moment";
import { useCallback } from "react"
// import mixpanel from "mixpanel-browser";
// eslint-disable-next-line import/no-named-as-default
// import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
// import { useUser } from "./useUser";
// import { api } from "core/services/api";

export function useLanguage() {

  const { i18n } = useTranslation();
  // const { user: { id: userProfileId } } = useUser();

  const setLanguage = useCallback(async (language: any, _useToast: any) => {
    const localUpdate = () => {
      moment.locale(language)
      i18n.changeLanguage(language);
      // api.defaults.headers.Lang = language.toUpperCase();
      // mixpanel.register({lng:language})

    }

    // const profileUpdate = async () => {
    //   await api.put(`user-profile/update`, { id: userProfileId, preferredLanguage: language });
    // }
    
    // if (useToast) {
    //   localUpdate()
    //   toast.promise(
    //     profileUpdate().then(() => localUpdate()),
    //     {
    //       loading: t(`actions.promise.change`, { item: `$t(common.language)`, context: "loading" }),
    //       success: t(`actions.promise.change`, { item: `$t(common.language)`, context: "success" }),
    //       error: t("errors.try_again")
    //     }
    //   )
    // } else {
    //   localUpdate();
    // }

    localUpdate()

  }, [i18n])

  return {
    setLanguage,
    language: i18n.language
  }
}