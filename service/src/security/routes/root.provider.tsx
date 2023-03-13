import { useState } from 'react';
import { createContext } from 'use-context-selector';
import { ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { theme } from 'assets/styles/theme.config';
import { UserProvider } from 'context/user/user.context';

type Props = {
  children: any;
};

export interface RootContextModel {
  teste: any;
}

export const RootContext = createContext<RootContextModel | null>(null);

export const RootProvider: React.FC<Props> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [teste, setTeste] = useState(null);

  return (
    <RootContext.Provider
      value={{
        teste,
      }}
    >
      <ThemeProvider theme={theme}>
        <UserProvider>{children}</UserProvider>
        <Toaster
          toastOptions={{
            style: {
              maxWidth: 'none',
              fontFamily: "'Poppins', sans-serif",
            },
          }}
        />
      </ThemeProvider>
    </RootContext.Provider>
  );
};
