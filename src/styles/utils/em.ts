import getPercent from '../../utils/getPercent';
import typography from '../theme/typography';

const em = (
   size: number,
   defaultSize = typography.sizes.pc,
   hasExtension = true,
) => {
   const result = getPercent(size, defaultSize, 'part');

   if (!hasExtension) return result;
   return `${result}em`;
};

export default em;
