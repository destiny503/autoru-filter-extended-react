import ButtonPad from '../../features/ButtonPad/ButtonPad'
import RemovalPad from '../../features/RemovalPad/RemovalPad'
import { Filter } from '../../shared/hooks/useFilters';

import s from './FilterBrands.module.css'

interface FilterBrandsProps {
  onAdd: (filter: string, color: string, brand: string, brandName: string) => void;
  onExclude: (filter: string) => void;
  filters: Filter[];
}

const FilterBrands: React.FC<FilterBrandsProps> = ({ onAdd, onExclude, filters }) => {
  const selectedBrands = filters.map(filter => filter.brand);

  return (
    <div className={s.brands}>
      <RemovalPad filters={filters} onExclude={onExclude} />
      <ButtonPad onAdd={onAdd} selectedBrands={selectedBrands} />
    </div>
  )
}

export default FilterBrands