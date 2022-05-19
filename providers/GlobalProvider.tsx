import { createContext, useReducer } from 'react';
import { Filter, PropsChildren, SortBy } from '../types/types';

type State = {
  filter: Filter;
  sortBy: SortBy;
};

type Action = { type: 'CHANGE_FILTER'; payload: Filter } | { type: 'CHANGE_SORT'; payload: SortBy };

const initialState: State = {
  filter: 'All',
  sortBy: 'Most Upvotes',
};

type GlobalContext = {
  state: State;
  handleFilterChange: (value: Filter) => void;
  handleSortChange: (value: SortBy) => void;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext<GlobalContext | null>(null);

const GlobalProvider = ({ children }: PropsChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFilterChange = (value: Filter) => {
    dispatch({ type: 'CHANGE_FILTER', payload: value });
  };
  const handleSortChange = (value: SortBy) => {
    dispatch({ type: 'CHANGE_SORT', payload: value });
  };

  const value = { state, handleFilterChange, handleSortChange };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
