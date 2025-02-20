import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CardResult from "../components/cardResult";
import FilterIcon from "../components/filterIcon";
import NovaBuscaIcon from "../components/novaBuscaIcon";

const Results = () => {
  const { city, modality } = useParams();
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSport, setSelectedSport] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/locations") // Substitua pela URL real
      .then((response) => response.json())
      .then((data) => {
        setCardsData(
          data
            .filter((card) => card.city === city)
            .filter((card) => modality ?? card.modality.includes(modality)),
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Função para filtrar os dados conforme o esporte selecionado
  const handleFilter = (sport) => {
    setSelectedSport(sport);
    if (sport === "" || sport === "todos" || !sport) return;
    const filtered = cardsData.filter((card) => card.modality.includes(sport));
    setCardsData(filtered);
  };

  return (
    <div className="justify-center items-center min-h-screen bg-slate-300">
      <Header />

      <div className="flex items-center justify-center space-x-4 px-4 mb-5 mt-10">
        {/* O FilterIcon recebe a função de filtro e o esporte selecionado */}
        <FilterIcon onFilter={handleFilter} selectedSport={selectedSport} />
        <NovaBuscaIcon />
      </div>
      <CardResult data={cardsData} />
      <Footer />
    </div>
  );
};

export default Results;
