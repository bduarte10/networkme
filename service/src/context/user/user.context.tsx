import React, { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import { UserAPI } from '../../infra/user/user.infra';
import { User, UserContextModel } from '../../infra/user/user.model';

export const UserContext = createContext<UserContextModel | null>(null);

export const UserProvider: React.FC<{ children: any }> = ({ children }) => {
  const [_isWaiting, setIsWaiting] = useState<boolean>(false);

  const getUsers = useCallback(async () => {
    setIsWaiting(true);
    try {
      const result = await UserAPI.getUsersHttp();
      if (result) {
        setIsWaiting(false);
        return result.data;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getUserById = useCallback(async (id: string) => {
    try {
      const result = await UserAPI.getUserByIdHttp(id);
      if (result) {
        setIsWaiting(false);
        return result.data;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const postUser = useCallback(async (user: User) => {
    setIsWaiting(true);
    try {
      const result = await UserAPI.postUserHttp(user);
      if (result) {
        setIsWaiting(false);
        return result.data;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const putUser = useCallback(async (user: User) => {
    setIsWaiting(true);
    try {
      const result = await UserAPI.putUserHttp(user);
      if (result) {
        setIsWaiting(false);
        return result.data;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteUser = useCallback(async (id: number) => {
    setIsWaiting(true);
    try {
      const result = await UserAPI.deleteUserHttp(id);
      if (result) {
        setIsWaiting(false);
        return result.data;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        getUsers,
        getUserById,
        postUser,
        putUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
