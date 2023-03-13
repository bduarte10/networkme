import { Box } from '@mui/material';
import loadingLogo from 'assets/gifs/loading-logo.gif';

const LoadingPage = () => (
  <Box
    position="fixed" // DEIXAR FIXED
    left={0}
    top={0}
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
    sx={{
      zIndex: 999999999,
      backgroundColor: 'white',
    }}
  >
    <Box
      component="img"
      src={loadingLogo}
      height="13rem"
      width="13rem"
      display="block"
      margin="auto"
    />
  </Box>
);

export default LoadingPage;
