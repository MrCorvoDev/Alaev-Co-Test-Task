import {useSearchParams} from 'react-router-dom';

import {Types} from '../types/global';
import getType from '../utils/getType';
import stringTypeConvert from '../utils/stringTypeConvert';

const stringifyValue = <T,>(type: Types, value: T) =>
   type === 'object' ? JSON.stringify(value) : String(value);

const useURLState = <T,>(
   key: string,
   value: T,
   replace = true,
): [T, (value: T) => void] => {
   const type = getType(value);

   const [params, setParams] = useSearchParams({
      [key]: stringifyValue(type, value),
   });

   const URLValue = stringTypeConvert<T>(type, params.get(key)!);
   const setValue = (value: T) =>
      setParams(
         prev => {
            prev.set(key, stringifyValue(type, value));
            return prev;
         },
         {replace},
      );

   return [URLValue, setValue];
};
export default useURLState;
