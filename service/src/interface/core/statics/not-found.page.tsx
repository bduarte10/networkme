import { Link as RouterLink } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <Helmet>
        <title>Networkme - 404 </title>
      </Helmet> */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          minHeight: '100%',
          px: 3,
          py: '80px'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            color="textPrimary"
            variant='h4'
          >
            {t("admin:pages.not_found.title")}
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            sx={{ mt: 0.5 }}
            variant="subtitle2"
          >
            {t("admin:pages.not_found.subTitle")}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6
            }}
          >
            <Box
              alt="Under development"
              component="img"
              src={`/static/error/error404_light.svg`}
              sx={{
                height: 'auto',
                maxWidth: '100%',
                width: 400
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6
            }}
          >
            <Button
              color="primary"
              component={RouterLink}
              to="/"
              variant="outlined"
            >
              {t("admin:pages.not_found.button")}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
