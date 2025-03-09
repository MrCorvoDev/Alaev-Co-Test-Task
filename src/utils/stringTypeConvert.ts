import {Types} from '../types/global';

const stringTypeConvert = <T,>(type: Types, value: string): T => {
   switch (type) {
      case 'string':
         return value as T;
      case 'number':
         return Number(value) as T;
      case 'NaN':
         return NaN as T;
      case 'object':
         return JSON.parse(value) as T;
      case 'array':
         return value.split(',') as T;
      case 'boolean':
         return (value === 'true') as T;
      case 'null':
         return null as T;
      default:
         return undefined as T;
   }
};

export default stringTypeConvert;
