import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ChatIcon from '@mui/icons-material/Chat';
import UsersIcon from 'assets/icons/users.icon';

export const menu: Menu[] = [
  {
    title: '1',
    itens: [
      {
        title: 'Home',
        path: '/home',
        icon: <HomeIcon style={{ width: 21, marginLeft: '-1px' }} />,
      },
      {
        title: 'Users',
        path: '/users',
        icon: <UsersIcon />,
      },
      {
        title: 'example 1',
        path: '/exemple1',
        icon: <ManageAccountsIcon style={{ width: 21, marginLeft: '-1px' }} />,
      },
      {
        title: 'example 2',
        path: '/exemple2',
        icon: <InsertChartIcon />,
      },
    ],
  },
  {
    title: '2',
    itens: [
      {
        title: 'example 3',
        path: '/exemple3',
        icon: <PermContactCalendarIcon />,
      },
    ],
  },
];

export const contactMenu: Menu = {
  title: 'partner:sidebar.menu.reports3',
  itens: [
    {
      title: 'Contato',
      path: '/test5',
      icon: <ChatIcon style={{ width: 21, marginLeft: '-1px' }} />,
    },
  ],
};

export const dashboardTypesEnum: any = {
  default: 'default',
};

export const menus = {
  [dashboardTypesEnum.default]: menu,
};

export interface MenuItem {
  title: string;
  path: string;
  icon: any;
}
export interface Menu {
  title: string;
  itens: MenuItem[];
}
