import { NavigationContext } from '../../../providers/NavigationProvider';
import { useContext } from 'react';
import { StyledOverlay } from './Overlay.styles';

const Overlay = () => {
  const { isOpen } = useContext(NavigationContext);
  return <StyledOverlay isOpen={isOpen}></StyledOverlay>;
};

export default Overlay;
