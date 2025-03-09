import {Types} from '../types/global';

const getType = (value: unknown): Types => {
   switch (typeof value) {
      case 'string':
         return 'string';
      case 'number':
         return isNaN(value) ? 'NaN' : 'number';
      case 'object':
         return value === null
            ? 'null'
            : Array.isArray(value)
              ? 'array'
              : 'object';
      case 'boolean':
         return 'boolean';
      default:
         return 'undefined';
   }
};
export default getType;
