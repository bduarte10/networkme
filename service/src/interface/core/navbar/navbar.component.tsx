import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { NetworkmeLogo, NetworkmeLogoSmall } from 'assets/logos/networkme-white.logo';
import LanguagePopover from './components/language-popover.component';
import SettingsButton from './components/settings-button.component';

const Navbar: React.FC = () => {

  const mediaQuerylogoName = useMediaQuery('(max-width: 950px)');
  const mediaQuerylogoCompany = useMediaQuery('(max-width: 755px)');

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar variant="dense" sx={{ minHeight: '64px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', cursor: 'pointer' }} onClick={() => navigate('/1')}>
            <Box>
              {mediaQuerylogoCompany ? <NetworkmeLogoSmall /> : <NetworkmeLogo />}
            </Box>
            <Typography
              sx={{
                alignSelf: 'center',
                marginTop: '4px',
                fontWeight: '300',
                display: mediaQuerylogoName ? 'none' : 'initial'
              }}
            >
              &nbsp;| SAMPLE
            </Typography>
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Box sx={{ ml: 1 }}>
              <LanguagePopover />
            </Box>
            <Box sx={{ ml: 2 }}>
              <SettingsButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;