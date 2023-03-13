import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';
import NotFound from 'interface/core/statics/not-found.page';
import Loadable from 'utils/loadable.util';
import Navbar from 'interface/core/navbar/navbar.component';
import Sidebar from 'interface/core/sidebar/sidebar.component';

const UserModule = Loadable(
  lazy(() => import('interface/usuarios/user.module'))
);

const Root: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  const routes = useRoutes([
    {
      path: '/home',
      element: (
        <div>Hello Index isAuthenticated:{isAuthenticated.toString()}</div>
      ),
    },
    {
      path: '/users/*',
      element: <UserModule />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Navbar />
      <Sidebar>{routes}</Sidebar>
    </>
  );
};

export default Root;
