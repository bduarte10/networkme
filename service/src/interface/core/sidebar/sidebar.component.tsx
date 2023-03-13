import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Box } from '@mui/material';

import { usePersistentState } from 'utils/persistent-state.util';
import MenuLarge from './components/menu-large.compoent';
import MenuSmall from './components/menu-small.compoent';

type Props = {
  children: any;
};

const Sidebar: React.FC<Props> = (props) => {
  const { children } = props;

  const [openStart, setOpenStart] = usePersistentState(
    true,
    'setOpenStart',
    false,
    true
  );
  const [openSmall, setOpenSmall] = usePersistentState(
    false,
    'setOpenSmall',
    false,
    true
  );
  const [openLarge, setOpenLarge] = usePersistentState(
    true,
    'setOpenLarge',
    false,
    true
  );

  const openSidebar = () => {
    setOpenStart(!openStart);
    if (!openStart) {
      setOpenSmall(openStart);
      setTimeout(() => {
        setOpenLarge(!openStart);
      }, 250);
    } else {
      setOpenLarge(!openStart);
      setTimeout(() => {
        setOpenSmall(openStart);
      }, 250);
    }
  };

  return (
    <>
      <SwipeableDrawer
        anchor='left'
        onOpen={openSidebar}
        onClose={openSidebar}
        hideBackdrop
        disableEnforceFocus
        open={openLarge}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 256,
          },
        }}
        ModalProps={{
          keepMounted: false,
        }}
        sx={{
          top: '64px',
          right: openStart ? 'calc(100% - 256px)' : 'initial',
        }}
      >
        <MenuLarge openSidebar={openSidebar} open={openStart} />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor='left'
        onOpen={openSidebar}
        onClose={openSidebar}
        open={openSmall}
        hideBackdrop
        PaperProps={{
          sx: {
            overflow: 'hidden',
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 60,
          },
        }}
        ModalProps={{
          keepMounted: false,
        }}
        sx={{
          top: '64px',
          right: openStart ? 'calc(100% - 60px)' : 'initial',
        }}
      >
        <MenuSmall openSidebar={openSidebar} open={openStart} />
      </SwipeableDrawer>
      <Box
        sx={{
          position: 'relative',
          top: '64px',
          height: 'calc(100vh - 64px) !important',
          marginLeft: openStart ? 33 : 8,
          transition: 'margin 0.5s',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Sidebar;
