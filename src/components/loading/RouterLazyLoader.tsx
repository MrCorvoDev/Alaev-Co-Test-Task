import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Outlet, useLocation} from 'react-router-dom';

import ErrorBoundaryFallback from '../core/ErrorBoundaryFallback';
import SpinnerBox from './SpinnerBox';

const RouterLazyLoader = () => {
   const location = useLocation();

   return (
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
         <Suspense key={location.key} fallback={<SpinnerBox />}>
            <Outlet />
         </Suspense>
      </ErrorBoundary>
   );
};
export default RouterLazyLoader;
