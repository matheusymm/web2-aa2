import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CardResult from "../components/cardResult";
import FilterIcon from "../components/filterIcon";
import NovaBuscaIcon from "../components/novaBuscaIcon";

const Results = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSport, setSelectedSport] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/locations') // Substitua pela URL real
      .then(response => response.json())
      .then(data => {
        setCardsData(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Função para filtrar os dados conforme o esporte selecionado
  const handleFilter = (sport) => {
    setSelectedSport(sport);
    if (sport === "" || sport === "todos") {
      setFilteredData(cardsData);
    } else {
      const filtered = cardsData.filter((card) =>
        card.modality.includes(sport)
      );
      setFilteredData(filtered);
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      
      <div className="flex items-center justify-center space-x-4 px-4 mb-5">
        {/* O FilterIcon recebe a função de filtro e o esporte selecionado */}
        <FilterIcon onFilter={handleFilter} selectedSport={selectedSport} />
        <NovaBuscaIcon />
      </div>
      <CardResult data={filteredData} />
      <Footer />
    </div>
  );
};

export default Results;
