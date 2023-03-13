import { useContextSelector } from 'use-context-selector';
import { RootContext, RootContextModel } from './root.provider';

export const useRoot: () => RootContextModel = () => {
  return {
    teste: useContextSelector(RootContext, (c) => c?.teste as any)
  };
}