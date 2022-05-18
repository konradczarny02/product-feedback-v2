import { FiltersWrapper } from './Filters.styles';
import Filter from '../../atoms/Filter/Filter';

export const filters = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

const Filters = () => {
  return (
    <FiltersWrapper>
      {filters.map((filter) => (
        <Filter key={filter} filter={filter} />
      ))}
    </FiltersWrapper>
  );
};

export default Filters;
