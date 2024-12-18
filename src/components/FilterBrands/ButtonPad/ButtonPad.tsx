import { useState } from "react";
import { brandData } from "../../../assets/brands";
import ActionPad from "../ActionPad/ActionPad";

import s from "./ButtonPad.module.css";

interface ButtonPadProps {
  onAdd: (filter: string, color: string, brand: string, brandName: string) => void;
  selectedBrands: string[];
}

const ButtonPad: React.FC<ButtonPadProps> = ({ onAdd, selectedBrands }) => {
  const [actionPad, setActionPad] = useState<{
    position: { top: number; left: number } | null;
    activeBrand: string | null;
    brandName: string;
  }>({
    position: null,
    activeBrand: null,
    brandName: "",
  });

  const handleBrandClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    brand: string,
    brandName: string
  ) => {
    const { bottom, left, width } = e.currentTarget.getBoundingClientRect();
    setActionPad({
      position: {
        top: bottom + window.scrollY,
        left: left + window.scrollX + width / 2 - 50 / 2,
      },
      activeBrand: brand,
      brandName,
    });
  };

  const closeActionPad = () => {
    setActionPad({ position: null, activeBrand: null, brandName: "" });
  };

  const getButtonClass = (brand: string, special: boolean | undefined) => {
    return [
      special && s.secretVendor,
      actionPad.activeBrand === brand && s.activeButton,
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <div className={s.buttonPad}>
      {brandData.map(({ brand, name, special }) => (
        <button
          key={brand}
          onClick={(e) => handleBrandClick(e, brand, name)}
          disabled={selectedBrands.includes(brand)}
          className={getButtonClass(brand, special)}
        >
          {name}
        </button>
      ))}
      {actionPad.position && actionPad.activeBrand && (
        <ActionPad
          top={actionPad.position.top}
          left={actionPad.position.left}
          brand={actionPad.activeBrand}
          brandName={actionPad.brandName}
          onAdd={onAdd}
          closeActionPad={closeActionPad}
        />
      )}
    </div>
  );
};

export default ButtonPad;
