import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CardResult from "../components/cardResult";
import FilterIcon from "../components/filterIcon";
import NovaBuscaIcon from "../components/novaBuscaIcon";

const Results = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/results') // Substitua pela URL real
      .then(response => response.json())
      .then(data => {
        setCardsData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="flex items-center justify-center space-x-4 px-4 mb-5">
        <FilterIcon />
        <NovaBuscaIcon />
      </div>
      <CardResult data={cardsData} />
      <Footer />
    </div>
  );
};

export default Results;
