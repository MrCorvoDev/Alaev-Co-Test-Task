import {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './components/core/Layout';
import RequireAuth from './components/RequireAuth';

const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));

const App = () => (
   <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route element={<RequireAuth />}>
               <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='*' element={<About />} />
         </Route>
      </Routes>
   </BrowserRouter>
);
export default App;
