import s from './RemovalPad.module.css';

interface RemovalPadProps {
  filters: Array<{ filter: string, color: string, brand: string, brandName: string }>;
  onExclude: (filter: string) => void;
}

const RemovalPad: React.FC<RemovalPadProps> = ({ filters, onExclude }) => {
  return (
    <div className={s.removalPad}>
      {filters.map(({ filter, color, brand, brandName }, index) => (
        <button
          key={index}
          style={{ backgroundColor: color, color: 'white' }}
          onClick={() => onExclude(filter)}
        >
          {brandName}
        </button>
      ))}
    </div>
  );
};

export default RemovalPad;
