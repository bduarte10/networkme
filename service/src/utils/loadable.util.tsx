import { Suspense } from 'react';

const Loadable = (Component: React.LazyExoticComponent<React.FC>) => (props: any) => (
  <Suspense fallback='Loading...'>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
