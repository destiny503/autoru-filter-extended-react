import React, { useState } from "react";
import Header from "../widgets/Header/Header";
import InputArea from "../widgets/InputArea/InputArea";
import FilterBrands from "../widgets/FilterBrands/FilterBrands";
import Popup from "../shared/ui/Popup";
import Sort from "../widgets/Sort/Sort";
import useFilters from "../shared/hooks/useFilters";

import s from "./MainPage.module.css";

const MainPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("https://auto.ru/cars/used/?");
  const [showPopup, setShowPopup] = useState(false);

  const { filters, addFilter, removeFilter, resetFilters } = useFilters();
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const handleInputClick = () => {
    navigator.clipboard.writeText(inputValue);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  const handleOpenPage = () => {
    if (inputValue.trim()) {
      window.open(inputValue, "_blank");
    }
  };

  const resetState = () => {
    setInputValue("https://auto.ru/cars/used/?");
    resetFilters();
    setActiveSort(null);
  };

  const handleSortChange = (sort: string) => {
    if (sort) {
      setActiveSort(sort);
      setInputValue((prev) => {
        const url = new URL(prev);
        const sortValue = sort.split("=")[1];
        url.searchParams.set("sort", sortValue);
        return url.toString();
      });
    } else {
      setActiveSort(null);
      setInputValue((prev) => {
        const url = new URL(prev);
        url.searchParams.delete("sort");
        return url.toString();
      });
    }
  };

  return (
    <div className={s.wrapper}>
      <Header onReset={resetState} onOpenPage={handleOpenPage} />
      <InputArea value={inputValue} onClick={handleInputClick} />
      {showPopup && <Popup message="Скопировано!" />}
      <FilterBrands
        onAdd={(filter, color, brand, brandName) => {
          addFilter({ filter, color, brand, brandName });
          setInputValue((prev) => `${prev}${filter}`);
        }}
        onExclude={(filter) => {
          removeFilter(filter);
          setInputValue((prev) => prev.replace(filter, ""));
        }}
        filters={filters}
      />
      <div className={s.separator}></div>
      <Sort onSortSelect={handleSortChange} activeSort={activeSort} />
    </div>
  );
};

export default MainPage;
