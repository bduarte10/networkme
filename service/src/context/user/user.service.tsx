import { useContextSelector } from 'use-context-selector';
import { User } from '../../infra/user/user.model';
import { UserContext } from './user.context';

export function useUser() {
  return {
    getUsers: useContextSelector(
      UserContext,
      (c) => c?.getUsers as () => Promise<User[] | undefined>
    ),
    getUserById: useContextSelector(
      UserContext,
      (c) => c?.getUserById as (id?: string) => Promise<User | undefined>
    ),
    postUser: useContextSelector(
      UserContext,
      (c) => c?.postUser as (user: User) => Promise<User | undefined>
    ),
    putUser: useContextSelector(
      UserContext,
      (c) => c?.putUser as (user: User) => Promise<User | undefined>
    ),
    deleteUser: useContextSelector(
      UserContext,
      (c) => c?.deleteUser as (id: number) => Promise<User | undefined>
    ),
  };
}
