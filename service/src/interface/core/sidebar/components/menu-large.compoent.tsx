import { Box, Button, Divider, Tooltip, Typography } from '@mui/material';
import ChevronDoubleIcon from 'assets/icons/chevron-double.icon';
import { dashboardTypesEnum, Menu, menus } from './menu.component';
import MenuList from './menu-list.component';

type Props = {
  openSidebar: any;
  open: boolean;
};

const MenuLarge: React.FC<Props> = (props) => {
  const { openSidebar, open } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          px: 5,
          py: 4,
        }}
      >
        <Tooltip title='Minimizar menu' placement='right'>
          <Button
            onClick={openSidebar}
            sx={{
              minWidth: '14px',
              position: 'absolute',
              p: '8px 16px 8px 10px',
              transform: open ? 'rotate(-720deg)' : 'rotate(-180deg)',
              transformOrigin: 'center',
              transition: 'transform .9s ease-in-out',
              right: 12,
              top: 10,
              textAlign: 'center',
              '& span': {
                ml: 0,
              },
            }}
            variant='text'
            endIcon={
              <ChevronDoubleIcon
                viewBox='0 0 14 12'
                sx={{ fontSize: '14px !important' }}
              />
            }
          />
        </Tooltip>
        <Box
          component='img'
          src='/static/logos/logo-example.logo.png'
          alt='/static/logos/logo-example.logo.png'
          sx={{
            cursor: 'pointer',
            maxHeight: 100,
            maxWidth: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          p: '0 16px',
          overflowY: 'scroll',
          // direction: 'rtl',
          '::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '::-webkit-scrollbar-button': {
            width: '0px',
            height: '0px',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#3e83ff',
            border: '0px none #ffffff',
            borderRadius: '50px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#3e83ff',
          },
          '::-webkit-scrollbar-thumb:active': {
            background: '#3e83ff',
          },
          '::-webkit-scrollbar-track': {
            background: '#ffffff',
            border: '0px none #ffffff',
            borderRadius: '50px',
          },
          '::-webkit-scrollbar-track:hover': {
            background: '#ffffff',
          },
          '::-webkit-scrollbar-track:active': {
            background: '#ffffff',
          },
          '::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        }}
      >
        {(menus[dashboardTypesEnum.default] || []).map(
          (menu: Menu, i: number) => (
            <Box key={i}>
              <Divider sx={{ margin: '0px -16px' }} />
              <MenuList key={i + 'Large'} menu={menu} large />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default MenuLarge;
