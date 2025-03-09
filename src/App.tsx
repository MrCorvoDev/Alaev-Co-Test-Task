import {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './components/core/Layout';

const About = lazy(() => import('./pages/About'));

const App = () => (
   <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<About />} />
            <Route path='*' element={<About />} />
         </Route>
      </Routes>
   </BrowserRouter>
);
export default App;
