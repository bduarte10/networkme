import { useRoutes } from 'react-router-dom';
import UsersList from './user-list/user-list.page';

const UserModule: React.FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <UsersList />,
    },
    {
      path: '*',
      element: <div>Page not found</div>,
    },
  ]);

  return routes;
};

export default UserModule;
