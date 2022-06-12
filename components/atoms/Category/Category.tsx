import { FilterWrapper } from '../Filter/Filter.styles';
import { Category as CategoryType } from '../../../types/types';

type Props = {
  name: CategoryType;
};

const Category = ({ name }: Props) => {
  return <FilterWrapper>{name}</FilterWrapper>;
};

export default Category;
