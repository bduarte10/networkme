import { AxiosInstance } from "axios";
import { useCallback, useEffect, useRef } from "react"

export enum InterceptorType {
  Request = "request",
  Response = "response"
}

interface RegisteredInterceptorsInterface {
  request: number[],
  response: number[],
}

interface InterceptorFunction {
  (value: any): any | Promise<any> | null;
}

export function useAxiosInterceptors(instance: AxiosInstance) {
  const registeredInterceptors = useRef<RegisteredInterceptorsInterface>({
    [InterceptorType.Request]: [],
    [InterceptorType.Response]: [],
  });

  const removeInterceptors = useCallback((type: InterceptorType) => {
    registeredInterceptors
      .current[type]
      .forEach(
        i => instance
          .interceptors[type]
          .eject(i)
      );
  }, [instance.interceptors]);

  const registerInterceptor = useCallback((type: InterceptorType, onSuccess: InterceptorFunction, onError: ((error: any) => any) | null) => {
    removeInterceptors(type);

    const index = instance
      .interceptors[type]
      .use(
        onSuccess,
        onError
      );

    registeredInterceptors.current[type].push(index);
  }, [instance.interceptors, removeInterceptors]);

  const cleanUp = useCallback(() => {
    removeInterceptors(InterceptorType.Request);
    removeInterceptors(InterceptorType.Response);
  }, [removeInterceptors])

  useEffect(() => {
    return cleanUp;
  }, [cleanUp])

  return {
    registerInterceptor,
  }
}
