import { useEffect, useState } from "react";
import DataEncryption from "./data-encryption.util";

export function usePersistentState(defaultValue: any, key: string, encrypt = false, session = false) {
  const storage = session
    ? window.sessionStorage
    : window.localStorage

  const [value, setValue] = useState(() => {
    if (!key) return defaultValue

    const stickyValue = storage.getItem(key);
    try {
      if ([null, undefined, 'undefined'].includes(stickyValue)) {
        return defaultValue
      }

      if (encrypt &&
        [null, undefined, 'undefined'].includes(DataEncryption.decrypt(stickyValue))) {
        return defaultValue
      }

      return JSON.parse(
        encrypt
          ? DataEncryption.decrypt(stickyValue)
          : (stickyValue || "")
      );
    } catch (err) {
      console.error(err)
      return defaultValue
    }
  });

  useEffect(() => {
    if (!key) return

    const strData = JSON.stringify(value);

    if (![null, undefined, 'undefined'].includes(value)) {
      storage.setItem(
        key,
        encrypt
          ? DataEncryption.encrypt(strData)
          : strData
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [encrypt, key, value]);
  return [value, setValue];
}