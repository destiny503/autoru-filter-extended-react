import { useState } from "react";
import Header from './components/Header/Header'
import InputArea from './components/InputArea/InputArea'
import FilterBrands from './components/FilterBrands/FilterBrands'
import Popup from "./components/Popup/Popup";

import s from './App.module.css'

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("https://auto.ru/cars/used/?");
  const [filters, setFilters] = useState<Array<{ filter: string, color: string, brand: string, brandName: string }>>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddFilter = (filter: string, color: string, brand: string, brandName: string) => {
    setInputValue((prev) => `${prev}${filter}`);
    setFilters((prev) => [...prev, { filter, color, brand, brandName }]);
  };

  const handleExcludeFilter = (filter: string) => {
    setInputValue((prev) => prev.replace(filter, ''));
    setFilters((prev) => prev.filter(f => f.filter !== filter));
  };

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
    setFilters([]);
  };

  return (
    <div className={s.wrapper}>
      <Header onReset={resetState} onOpenPage={handleOpenPage}/>
      <InputArea value={inputValue} onClick={handleInputClick}/>
      {showPopup && <Popup message="Скопировано!" />}
      <FilterBrands 
        onAdd={handleAddFilter} 
        onExclude={handleExcludeFilter} 
        filters={filters} 
      />
    </div>
  )
}

export default App