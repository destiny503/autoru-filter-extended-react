import { sorts } from '../../entities/sorts';

import s from './Sort.module.css'

interface SortProps {
  onSortSelect: (sort: string) => void;
  activeSort: string | null;
}

const Sort: React.FC<SortProps> = ({ onSortSelect, activeSort }) => {
  const handleButtonClick = (value: string) => {
    if (activeSort === value) {
      onSortSelect("");
    } else {
      onSortSelect(value);
    }
  };

  return (
    <div>
      {sorts.map((sort) => (
        <button
          key={sort.value}
          onClick={() => handleButtonClick(sort.value)}
          className={`${sort.special ? s.secretSort : ''} ${activeSort === sort.value ? s.active : ''}`}
        >
          {sort.title}
        </button>
      ))}
    </div>
  );
  
};

export default Sort;
