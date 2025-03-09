import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

const useScrollService = () => {
   const location = useLocation();
   const prevPathname = useRef(location.pathname);

   useEffect(() => {
      if (location.hash) {
         // Scroll to the element (if page the same - smooth scroll, if different - instant)
         const id = location.hash.slice(1);
         const element = document.getElementById(id);
         const isDifferentPage = prevPathname.current !== location.pathname;

         if (!element) return;

         element.scrollIntoView({
            behavior: isDifferentPage ? 'instant' : 'smooth',
         });
      } else {
         // Reset scroll position on page change
         window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }

      prevPathname.current = location.pathname;
   }, [location.pathname, location.key, location.hash]);
};
export default useScrollService;
