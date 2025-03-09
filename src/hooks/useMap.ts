import {useMap as useMapHook} from '@uidotdev/usehooks';

const useMap = <K, V>(initialState?: Iterable<readonly [K, V]>) =>
   useMapHook(initialState) as Map<K, V>;

export default useMap;
