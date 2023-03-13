import * as React from 'react';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { MenuItem } from './menu.component';

type Props = {
  menu: any;
  large?: boolean;
  sx?: any;
};

const MenuList: React.FC<Props> = ({ menu, large, sx }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <List
      sx={[
        sx,
        {
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          direction: 'ltr',
        },
      ]}
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      {menu.itens.map((item: MenuItem, i: number) => (
        <ListItemButton
          onClick={() => navigate(`${item.path}`)}
          key={menu.title + item.path + i}
          sx={{
            py: large ? 2 : 1.5,
            px: 2,
            my: 1,
            justifyContent: 'center',
            borderRadius: '10px',
            backgroundColor: window.location.pathname.includes(item.path)
              ? 'rgba(62, 131, 255, 0.08)'
              : '',
            '&:hover': {
              background: 'rgba(62, 131, 255, 0.08)',
            },
            '& .MuiTypography-root': {
              color: window.location.pathname.includes(item.path)
                ? '#3E83FF'
                : '',
            },
            '& .MuiSvgIcon-root': {
              color: window.location.pathname.includes(item.path)
                ? '#3E83FF'
                : '',
            },
            '& span span': {
              backgroundColor: window.location.pathname.includes(item.path)
                ? 'rgba(62, 131, 255, 0.08)'
                : '',
            },
          }}
        >
          {large ? (
            <>
              <ListItemIcon
                sx={{
                  mr: large ? '10px' : '0',
                  alignSelf: 'flex-start',
                  '& .MuiSvgIcon-root': {
                    width: '20px',
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                // primary={t(`recruiter:menus.${item.title}`)}
                primary={t(`${item.title}`)}
                sx={{
                  m: 0,
                  '& span': {
                    fontSize: '14px !important',
                    fontWeight: window.location.pathname.includes(item.path)
                      ? '700'
                      : '500',
                    color: 'rgba(66, 82, 110, 0.86)',
                  },
                }}
              />
            </>
          ) : (
            <>
              {/* <Tooltip title={t(`recruiter:menus.${item.title}`)} placement="right"> */}
              <Tooltip title={t(`${item.title}`)} placement='right'>
                <ListItemIcon
                  sx={{
                    mr: large ? '10px' : '0',
                    alignSelf: 'flex-start',
                    '& .MuiSvgIcon-root': {
                      width: '20px',
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
            </>
          )}
        </ListItemButton>
      ))}
    </List>
  );
};

export default MenuList;
