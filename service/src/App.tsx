import { BrowserRouter } from 'react-router-dom';
import { RootProvider } from 'security/routes/root.provider';
import Root from './security/routes/root.route';
import 'assets/i18n/i18n.config';

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
