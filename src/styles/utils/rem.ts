import getPercent from '../../utils/getPercent';
import typography from '../theme/typography';

const rem = (size: number, hasExtension = true) => {
   const result = getPercent(size, typography.sizes.default, 'part');

   if (!hasExtension) return result;
   return `${result}rem`;
};

export default rem;
