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
        console.log(response);
        const data = await response.json();
        const locationFound = data.find(loc => loc.id === 2);

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
      const horaInicio = parseInt(locations.horarioInicio.split(":")[0]);
      const horaFim = parseInt(locations.horarioFim.split(":")[0]);
      for (let hora = horaInicio; hora <= horaFim - 1; hora++) {
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
      const horaFim = parseInt(locations.horarioFim.split(":")[0]);
      const times = [];
      for (let hora = horaInicio + 1; hora <= horaFim; hora++) {
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
      const priceLocation = parseInt(locations.price);
      console.log(locations.price);
      setPrice(`R$${priceLocation* (horaFim - horaInicio)},00`);
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
      <div className="mx-auto w-full max-w-7xl p-5 rounded-lg bg-slate-300 lg:bg-slate-300  dark:bg-slate-800 flex flex-col h-screen 
    md:w-3/4 md:h-3/4 md:rounded-2xl md:p-10 md:mt-20 lg:mt-12 lg:p-8 md:border-2 lg:border-2 border-slate-800 dark:border-gray-300 mb-2">
      <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row h-1/2">
            <div className="w-full lg:w-1/2 mt-2 md:mt-0 flex items-center justify-center">
              <img src={locations.imagem} className="w-full h-full rounded-lg object-cover border-2 border-slate-800 dark:border-gray-300" alt="Quadra" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:p-5 lg:text-2xl">
              <div className="text-left text-slate-800 dark:text-gray-300">
                <p className="text-xl lg:text-3xl font-bold lg:mb-4 lg:mt-0">{locations.name}</p>
              </div>
              <div className="text-left flex items-center gap-1 text-slate-800 dark:text-gray-300">
                <i className="material-icons mr-2 text-base lg:mt-2">location_on</i> {locations.address}, {locations.city}, {locations.country}
              </div>
              <div className="text-left flex items-center gap-1 text-slate-800">
                <i className="material-icons mr-2 text-base lg:mt-2">schedule</i> {locations.horarioInicio} - {locations.horarioFim}
              </div>
              <div className="text-left flex items-center gap-1 lg:mt-2 text-slate-800 dark:text-gray-300">
                    <i className="material-icons mr-2 text-base">account_circle</i> Telefone: {locations.phone}<br/>
                    Email: {locations.email}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:mt-0 lg:mb-0 lg:flex-row">
            <div className="w-full lg:w-1/2 items-center justify-center lg:mb-0">
              <div className="text-xl w-full text-center font-bold text-slate-800
                 dark:text-gray-300 md:mt-6 lg:text-left lg:text-2xl lg:mt-1">
                Escolha quando será a reserva!</div>
              <input 
                type="date" 
                className="w-full text-xl p-2 outline-1 outline-slate-800 border-2
                 border-slate-800 bg-white dark:bg-gray-700 text-slate-800 dark:text-gray-300 placeholder:text-slate-800
                  dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none rounded-lg text-center
                   lg:text-2xl mt-4 lg:mb-1 lg:mt-2 dark:border-gray-300" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)} 
              />
              <div id="texto-horario-inicio" className="text-xl w-full text-slate-800 dark:text-gray-400 mt-4 md:mt-6 lg:mt-0 lg:text-2xl font-bold">Horário de início</div>
              <select className={`w-full text-xl bg-white rounded p-2 border-2 border-slate-800 mt-2 disabled:border-gray-400 disabled:bg-gray-300 ${isStartTimeDisabled ? "cursor-not-allowed text-gray-600" : ""}`}
                value={startTime} onChange={(e) => setStartTime(e.target.value)}
                disabled={isStartTimeDisabled}>
                <option value="">Selecione um horário</option>
                {startTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <div id="texto-horario-termino" className="text-xl w-full text-slate-800 disabled:text-slate-500 dark:text-gray-400 lg:text-2xl mt-4 lg:mt-0 font-bold">Horário de Término
              </div>
              <select className={`w-full text-xl bg-white rounded p-2 border-2 border-slate-800 mt-2 disabled:border-gray-400 disabled:bg-gray-300 ${isEndTimeDisabled ? "cursor-not-allowed text-gray-600" : ""}`}
                value={endTime} onChange={(e) => setEndTime(e.target.value)} disabled={isEndTimeDisabled}>
                <option value="">Selecione um horário</option>
                {endTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:p-5 lg:mt-4 mt-6">
             <div class="flex flex-row justify-center space-x-4 items-center lg:block text-xl w-full text-slate-800 dark:text-gray-300 mr-2 text-center md:mt-6
               lg:text-2xl lg:text-center lg:mt-4 font-bold "><p>Preço:</p>
              <input type="text" className="text-xl p-2 outline-1 outline-slate-800 border-2 border-slate-800 bg-white dark:bg-gray-700 text-slate-800
                     dark:text-gray-300 placeholder:text-slate-800 dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none
                      rounded-lg text-center lg:text-2xl lg:w-full lg:h-14 lg:mt-2 dark:border-gray-300" value={price} disabled />
              </div>
              <button className="font-medium uppercase rounded-full  select-none text-xl
                 p-2 w-full bg-slate-800 dark:bg-gray-600 text-white dark:text-gray-200 
                hover:bg-slate-700 dark:hover:bg-gray-500 active:bg-slate-800 md:mt-8 md:mb-0 md:p-4
                lg:p-4 lg:text-2xl lg:mt-10 lg:h-16 lg:mb-8 mt-6" disabled={isButtonDisabled}>
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
