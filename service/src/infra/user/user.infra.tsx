import axios from 'axios';
import { User } from './user.model';

const baseUrl = 'http://localhost:8000';

export const getUsersHttp = () => {
  return axios.get<User[]>(`${baseUrl}/users`);
};

export const getUserByIdHttp = (id: string) => {
  return axios.get<User>(`${baseUrl}/users/${id}`);
};

export const postUserHttp = (user: User) => {
  return axios.post<User>(`${baseUrl}/users`, user);
};

export const putUserHttp = (user: User) => {
  return axios.put<User>(`${baseUrl}/users/${user.id}`, user);
};
export const deleteUserHttp = (id: number) => {
  return axios.delete<User>(`${baseUrl}/users/${id}`);
};

export const UserAPI = {
  getUsersHttp,
  getUserByIdHttp,
  postUserHttp,
  putUserHttp,
  deleteUserHttp,
};
