import React, { useState } from "react";

const FilterIcon = ({ onFilter, selectedSport }) => {
  const [isOpen, setIsOpen] = useState(false);
  const availableSports = ["todos", "Futsal", "Basquete", "Vôlei"];

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (sport) => {
    onFilter(sport);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleIconClick}
        className="flex items-center bg-slate-200 text-slate-800 dark:text-gray-600 px-3 py-1 rounded-md text-sm hover:bg-slate-500 hover:text-white transition-colors duration-300 border-2 border-slate-800 dark:border-gray-300"
      >
        <i className="material-icons mr-1">filter_list</i>
        Filtros
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
          {availableSports.map((sport, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(sport)}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                selectedSport === sport ? "font-bold" : ""
              }`}
            >
              {sport}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterIcon;
