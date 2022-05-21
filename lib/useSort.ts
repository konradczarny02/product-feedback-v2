import { useEffect, useState } from 'react';

const sortData = (sort, data, fn) => {
  switch (sort) {
    case 'Most Upvotes':
      fn([...data].sort((a, b) => b.upvotes - a.upvotes));
      break;
    case 'Least Upvotes':
      fn([...data].sort((a, b) => a.upvotes - b.upvotes));
      break;
    case 'Most Comments':
      fn([...data].sort((a, b) => b.comments - a.comments));
      break;
    case 'Least Comments':
      fn([...data].sort((a, b) => a.comments - b.comments));
  }
};

export const useSort = (data, filter, sort) => {
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
