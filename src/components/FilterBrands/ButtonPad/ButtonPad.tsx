import { useState } from 'react';
import { brandData } from '../../../assets/brands';
import ActionPad from '../ActionPad/ActionPad';

import s from './ButtonPad.module.css';

interface ButtonPadProps {
  onAdd: (filter: string, color: string, brand: string, brandName: string) => void;
  selectedBrands: string[];
}

const ButtonPad: React.FC<ButtonPadProps> = ({ onAdd, selectedBrands }) => {
  const [actionPadPosition, setActionPadPosition] = useState<{
    top: number;
    left: number;
    brand: string | null;
    brandName: string;
  } | null>(null);

  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  const handleBrandClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    brand: string,
    brandName: string
  ) => {
    const { bottom, left, width } = e.currentTarget.getBoundingClientRect();
    const actionPadWidth = 50

    setActionPadPosition({
      top: bottom + window.scrollY,
      left: left + window.scrollX + width / 2 - actionPadWidth / 2,
      brand,
      brandName,
    });

    setActiveBrand(brand); 
  };

  const closeActionPad = () => {
    setActionPadPosition(null);
    setActiveBrand(null);
  };

  return (
    <div className={s.buttonPad}>
      {brandData.map((brand) => (
        <button
          key={brand.brand}
          onClick={(e) => handleBrandClick(e, brand.brand, brand.name)}
          disabled={selectedBrands.includes(brand.brand)}
          className={
            `${brand.special ? s.secretVendor : ""} 
            ${activeBrand === brand.brand ? s.activeButton : ""}`
          }
        >
          {brand.name}
        </button>
      ))}
      {actionPadPosition && actionPadPosition.brand && (
        <ActionPad
          top={actionPadPosition.top}
          left={actionPadPosition.left}
          brand={actionPadPosition.brand}
          brandName={actionPadPosition.brandName}
          onAdd={onAdd}
          closeActionPad={closeActionPad}
        />
      )}
    </div>
  );
};

export default ButtonPad;
