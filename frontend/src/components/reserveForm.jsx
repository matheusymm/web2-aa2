import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReserveForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [locations, setLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [price, setPrice] = useState("R$0,00");
  const [startTimes, setStartTimes] = useState([]);
  const [endTimes, setEndTimes] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isStartTimeDisabled, setIsStartTimeDisabled] = useState(true);
  const [isEndTimeDisabled, setIsEndTimeDisabled] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(`http://localhost:3000/locations`);
        if (!response.ok) throw new Error("Erro ao buscar locations");

        const data = await response.json();
        const locationFound = data.find(loc => loc.id === parseInt(id));

        if (!locationFound) {
          throw new Error("Local não encontrado");
        }

        setLocation(locationFound);
      } catch (error) {
        console.error("Erro ao carregar a location:", error);
      }
    };
    fetchLocation();
  }, [id]);

  useEffect(() => {
    if (selectedDate) {
      setIsStartTimeDisabled(false);
      const times = [];
      for (let hora = 7; hora <= 22; hora++) {
        times.push(`${hora}:00`);
      }
      setStartTimes(times);
    } else {
      setIsStartTimeDisabled(true);
      setStartTime("");
      setEndTime("");
      setIsEndTimeDisabled(true);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (startTime) {
      setIsEndTimeDisabled(false);
      const horaInicio = parseInt(startTime.split(":")[0]);
      const times = [];
      for (let hora = horaInicio + 1; hora <= 22; hora++) {
        times.push(`${hora}:00`);
      }
      setEndTimes(times);
    } else {
      setIsEndTimeDisabled(true);
      setEndTime("");
    }
  }, [startTime]);

  useEffect(() => {
    if (startTime && endTime) {
      const horaInicio = parseInt(startTime.split(":")[0]);
      const horaFim = parseInt(endTime.split(":")[0]);
      setPrice(`R$${20 * (horaFim - horaInicio)},00`);
      setIsButtonDisabled(false);
    } else {
      setPrice("R$0,00");
      setIsButtonDisabled(true);
    }
  }, [startTime, endTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedDate,
          startTime,
          endTime,
          price: parseInt(price.replace("R$", "").replace(",00", ""), 10)
        }),
      });
  
      if (response.status === 201) {
        alert("Reserva realizada com sucesso!");
        navigate("/"); 
      } else {
        alert("Erro na reserva, revise os dados e tente novamente!");
      }
    } catch (error) {
      console.error("Erro ao enviar a reserva:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  if (!locations) {
    return <div className="text-center mt-10 text-xl font-bold">Carregando...</div>;
  }

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="mx-auto w-full max-w-7xl p-5 rounded-lg bg-slate-300 flex flex-col h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row h-1/2">
            <div className="w-full lg:w-1/2 mt-2 flex items-center justify-center">
              <img src={locations.imagem} className="w-full h-full rounded-lg object-cover border-2 border-slate-800" alt="Quadra" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:p-5 lg:text-2xl">
              <div className="text-left text-slate-800">
                <p className="text-xl lg:text-3xl font-bold lg:mb-4">{locations.name}</p>
              </div>
              <div className="text-left flex items-center gap-1 text-slate-800">
                <i className="material-icons mr-2 text-base lg:mt-2">location_on</i> {locations.address}, {locations.city}, {locations.country}
              </div>
              <div className="text-left flex items-center gap-1 text-slate-800">
                <i className="material-icons mr-2 text-base lg:mt-2">schedule</i> {locations.horario}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
            <div className="w-full lg:w-1/2 items-center justify-center">
              <input 
                type="date" 
                className="w-full text-xl p-2 border-2 border-slate-800 rounded-lg text-center lg:text-2xl mt-4" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)} 
              />
              <select className={`w-full text-xl rounded p-2 border-2 border-slate-800 mt-2 ${isStartTimeDisabled ? "cursor-not-allowed bg-slate-100 text-slate-500" : ""}`}
                value={startTime} onChange={(e) => setStartTime(e.target.value)}
                disabled={isStartTimeDisabled}>
                <option value="">Selecione um horário</option>
                {startTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <select className={`w-full text-xl rounded p-2 border-2 border-slate-800 mt-2 ${isEndTimeDisabled ? "cursor-not-allowed bg-slate-100 text-slate-500" : ""}`}
                value={endTime} onChange={(e) => setEndTime(e.target.value)} disabled={isEndTimeDisabled}>
                <option value="">Selecione um horário</option>
                {endTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:p-5 lg:mt-4">
              <input type="text" className="text-xl p-2 border-2 border-slate-800 rounded-lg text-center lg:text-2xl" value={price} disabled />
              <button className="font-medium uppercase rounded-full text-xl p-2 w-full bg-slate-800 text-white hover:bg-slate-700 mt-6 disabled:bg-gray-400" disabled={isButtonDisabled}>
                Reservar
              </button>
            </div> 
          </div>
        </form>
      </div>  
    </div>
  );
};

export default ReserveForm;
