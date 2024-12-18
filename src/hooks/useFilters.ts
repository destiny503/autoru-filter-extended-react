import { useState } from 'react';

export interface Filter {
  filter: string;
  color: string;
  brand: string;
  brandName: string;
}

const useFilters = () => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = (filter: Filter) => {
    setFilters((prev) => [...prev, filter]);
  };

  const removeFilter = (filter: string) => {
    setFilters((prev) => prev.filter((f) => f.filter !== filter));
  };

  const resetFilters = () => {
    setFilters([]);
  };

  return { filters, addFilter, removeFilter, resetFilters };
};

export default useFilters;
