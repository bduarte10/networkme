import { Box, Button, Divider, Tooltip } from '@mui/material';
import ChevronDoubleIcon from 'assets/icons/chevron-double.icon';
import CompanyDefaultLogo from 'assets/logos/company-default.logo';
import { dashboardTypesEnum, Menu, menus } from './menu.component';
import MenuList from './menu-list.component';

type Props = {
  openSidebar: any;
  open: boolean;
};

const MenuSmall: React.FC<Props> = (props) => {
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
          pt: 3,
        }}
      >
        <Tooltip title='Maximizar menu' placement='right'>
          <Button
            onClick={openSidebar}
            sx={{
              minWidth: '14px',
              position: 'absolute',
              right: 12,
              top: 10,
              p: '8px 16px 8px 10px',
              transform: open ? 'rotate(-180)' : 'rotate(540deg)',
              transformOrigin: 'center',
              transition: 'transform .7s ease-in-out',
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
        <CompanyDefaultLogo sx={{ mt: 3, mb: 1 }} />
      </Box>
      <Box sx={{ p: '7px', pt: 0 }}>
        {(menus[dashboardTypesEnum.default] || []).map(
          (menu: Menu, i: number) => (
            <>
              <Divider sx={{ margin: '0px -8px' }} />
              <MenuList key={i + 'Small'} menu={menu} />
            </>
          )
        )}
      </Box>
      {/* <Box
        sx={{
          width: '100%',
          marginBlockStart: 'auto',
          alignSelf: 'center',
          '& svg': {
            color: 'primary.main'
          }
        }}
      >
        <MenuList
          menu={contactMenu}
        />
      </Box> */}
    </Box>
  );
};

export default MenuSmall;
