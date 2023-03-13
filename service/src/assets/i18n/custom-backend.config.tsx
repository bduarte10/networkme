import axios from "axios";
import { merge } from 'lodash';

const CustomBackend = {
  type: 'backend',
  init: function (services: any, _: any, { lng, ns }: any) {
    if (process.env.NODE_ENV !== "production") {
      const handle = () => {
        if(!services?.resourceStore?.data[lng]?.translation){
          setTimeout(handle,1000)
          return
        }
        ns.map(async (n: any) => {
          const data = await axios.get(`/locales/${lng}/${n}.json`).then(e => e.data).catch(() => {
            return {}
          });
          if (Object.keys(data).length) {
            const newResource = merge({}, data, services.resourceStore.data[lng][n])
            services.resourceStore.addResourceBundle(lng, n, newResource, true, true)
          }
        })
      }
      setTimeout(handle, 1000)
    }
  }
}

export default CustomBackend