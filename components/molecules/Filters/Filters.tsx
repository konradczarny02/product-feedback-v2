import { FiltersWrapper } from './Filters.styles';
import { Filter as FilterType } from '../../../types/types';
import Filter from '../../atoms/Filter/Filter';

export const filters: FilterType[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

const Filters = () => {
  return (
    <FiltersWrapper>
      {filters.map((filter: FilterType) => (
        <Filter key={filter} filter={filter} />
      ))}
    </FiltersWrapper>
  );
};

export default Filters;
