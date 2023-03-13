import { InteractionStatus } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './loading-page.page';

const AadCallback = () => {
  const navigate = useNavigate();
  const { inProgress } = useMsal();

  useEffect(() => {
    if (![InteractionStatus.HandleRedirect,InteractionStatus.Startup,].includes(inProgress)) {

      const pathname = window.localStorage.getItem('redirectUri');
      const search = window.localStorage.getItem('redirectSearch');
      if ([
        '/aad-callback',
        '/register',
        '/null',
        '/undefined',
        null,
        undefined
      ].includes(pathname)) {
        navigate('/' + (search || ""));
        return
      }
      navigate((pathname || '/') + (search || ""));
    }
  }, [navigate, inProgress]);

  return <LoadingPage />;
};

export default AadCallback;