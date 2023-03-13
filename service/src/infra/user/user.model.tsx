export interface User {
  id?: number;
  nome?: string;
  email: string;
  nivel_acesso:
    | 'administrador'
    | 'analista'
    | 'colaborador'
    | 'superadministrador';
  data_entrada: string;
}

export interface UserCreateProps {
  openModal: boolean;
  handleCloseModal: () => void;
}

export interface UserEditProps {
  openEditModal: boolean;
  handleCloseEditModal: () => void;
  user: User;
}

export interface DeleteUserModalProps {
  openDeleteModal: boolean;
  handleCloseDeleteModal: () => void;
  handleDeleteUser: () => void;
}

export interface UserContextModel {
  getUsers: () => Promise<User[] | undefined>;
  getUserById: (id: string) => Promise<User | undefined>;
  postUser: (user: User) => Promise<User | undefined>;
  putUser: (user: User) => Promise<User | undefined>;
  deleteUser: (id: number) => Promise<User | undefined>;
}
