import {ComponentProps} from 'react';

interface ContainerProps extends ComponentProps<'div'> {
   className?: string | undefined;
}
const Container = ({className, children, ...props}: ContainerProps) => (
   <div className={`container ${className ?? ''}`} {...props}>
      {children}
   </div>
);
export default Container;
