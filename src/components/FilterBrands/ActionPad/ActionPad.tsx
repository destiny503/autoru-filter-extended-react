import s from './ActionPad.module.css'

interface ActionPadProps {
  top: number;
  left: number;
  brand: string;
  brandName: string;
  onAdd: (filter: string, color: string, brand: string, brandName: string) => void;
  closeActionPad: () => void;
}

const ActionPad: React.FC<ActionPadProps> = ({
  top,
  left,
  brand,
  brandName,
  onAdd,
  closeActionPad
}) => {
  const addFilter = `catalog_filter=vendor%3D${brand.toUpperCase()}&`;
  const excludeFilter = `exclude_catalog_filter=vendor%3D${brand.toUpperCase()}&`;

  return (
    <div className={s.actionPad} style={{
      top:`${top}px`,
      left: `${left}px`,
    }}>
      <button className={s.add} onClick={() => { onAdd(addFilter, 'rgb(60, 130, 60)', brand, brandName); closeActionPad(); }}>+</button>
      <button className={s.exc} onClick={() => { onAdd(excludeFilter, 'rgb(180, 60, 60)', brand, brandName); closeActionPad(); }}>-</button>
    </div>
  );
};

export default ActionPad