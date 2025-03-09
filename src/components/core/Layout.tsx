import useScrollService from '../../hooks/useScrollService';
import Header from '../Header';
import RouterLazyLoader from '../loading/RouterLazyLoader';

const Layout = () => {
   useScrollService();

   return (
      <div id='app'>
         <Header />
         <main id='content'>
            <RouterLazyLoader />
         </main>
      </div>
   );
};
export default Layout;
