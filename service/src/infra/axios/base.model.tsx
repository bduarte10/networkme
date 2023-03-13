export interface Base<T> {
  content: T;
  success: boolean;
  errors: Error[];
}

interface Error {
  code: string;
  description: string;
}

export interface KeyValue { key: string, value: string | boolean }