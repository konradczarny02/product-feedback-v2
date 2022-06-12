import { useEffect, useState } from 'react';
import { Filter, ISuggestionResponse, SortBy } from '../types/types';

const sortData = (sort: SortBy, data: any[], fn: (val: any[]) => void) => {
  switch (sort) {
    case 'Most Upvotes':
      fn([...data].sort((a, b) => b.upvotes.length - a.upvotes.length));
      break;
    case 'Least Upvotes':
      fn([...data].sort((a, b) => a.upvotes.length - b.upvotes.length));
      break;
    case 'Most Comments':
      fn([...data].sort((a, b) => b.comments.length - a.comments.length));
      break;
    case 'Least Comments':
      fn([...data].sort((a, b) => a.comments.length - b.comments.length));
  }
};

export const useSort = (data: ISuggestionResponse[], filter: Filter, sort: SortBy) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filter === 'All') {
      sortData(sort, data, setFilteredData);
    } else {
      const filteredData = data.filter((item) => item.category === filter);
      sortData(sort, filteredData, setFilteredData);
    }
  }, [data, filter, sort]);

  return [filteredData];
};
