import { FilterWrapper } from '../Filter/Filter.styles';
import { Category as CategoryType } from '../../../types/types';

const Category = ({ name }: { name: CategoryType }) => {
  return <FilterWrapper>{name}</FilterWrapper>;
};

export default Category;
