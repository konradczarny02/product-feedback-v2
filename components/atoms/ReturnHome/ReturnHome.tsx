import { StyledReturn } from './ReturnHome.styles';
import ReturnIcon from '../../../styles/images/icons/returnIcon.svg';
import Link from 'next/link';

const ReturnHome = () => {
  return (
    <Link href="/">
      <StyledReturn href="/">
        <ReturnIcon />
        <p>Go back</p>
      </StyledReturn>
    </Link>
  );
};

export default ReturnHome;
