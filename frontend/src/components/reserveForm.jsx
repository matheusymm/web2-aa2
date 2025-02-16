import { useState, useEffect } from "react";

const ReserveForm = () => {
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

  return (
    <body class="w-full flex flex-col bg-white">
    <div className="mx-auto w-full max-w-7xl p-5 rounded-lg bg-slate-300 md:bg-gray-200 lg:bg-slate-300 flex flex-col h-screen 
      md:w-3/4 md:h-3/4 md:rounded-2xl md:p-10 md:mt-20 lg:mt-12 lg:p-8 md:border-2 lg:border-2 border-slate-800 mb-2">
      <div className="flex flex-col lg:flex-row h-1/2">
        <div className="w-full lg:w-1/2 mt-2 md:mt-0 flex items-center justify-center">
          <img src="images/quadra1.jpg" className="w-full h-full rounded-lg object-cover border-2 border-slate-800" alt="Quadra" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:p-5 lg:text-2xl">
          <div className="text-left text-slate-800">
            <p className="text-xl lg:text-3xl font-bold lg:mb-4 lg:mt-0">Ginásio Poliesportivo UFSCAR</p>
          </div>
          <div className="text-left flex items-center gap-1 text-slate-800">
            <i className="material-icons mr-2 text-base lg:mt-2">location_on</i> R. do Lago - São Carlos, SP
          </div>
          <div className="text-left flex items-center gap-1 text-slate-800">
            <i className="material-icons mr-2 text-base lg:mt-2">schedule</i> 7:00 - 22:00
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start lg:mt-0 lg:mb-0 
      lg:flex-row">
        <div className="w-full lg:w-1/2 items-center justify-center lg:mb-0">
          <input 
            type="date" 
            className="w-full text-xl p-2 border-2 border-slate-800 rounded-lg text-center lg:text-2xl mt-4" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
          <select className={`w-full text-xl rounded p-2 border-2 border-slate-800 mt-2 ${isStartTimeDisabled ? "cursor-not-allowed bg-slate-100 placeholder:text-slate-500 border-slate-800 text-slate-500" : ""}`}
            value={startTime} onChange={(e) => setStartTime(e.target.value)}
            disabled={isStartTimeDisabled}>
            <option value="">Selecione um horário</option>
            {startTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <select className={`w-full text-xl rounded p-2 border-2 border-slate-800 mt-2 ${isEndTimeDisabled ? "cursor-not-allowed bg-slate-100 placeholder:text-slate-500 border-slate-800 text-slate-500" : ""}`}
            value={endTime} onChange={(e) => setEndTime(e.target.value)} disabled={isEndTimeDisabled}>
            <option value="">Selecione um horário</option>
            {endTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:p-5 lg:mt-4 mt-6 ">
          <input 
            type="text" 
            className="text-xl p-2 border-2 border-slate-800 rounded-lg text-center lg:text-2xl 
            lg:w-full lg:h-14 lg:mt-2" 
            value={price} 
            disabled 
          />
          <button 
            className="font-medium uppercase rounded-full text-xl p-2 w-full bg-slate-800 text-white hover:bg-slate-700 mt-6 disabled:bg-gray-400" 
            disabled={isButtonDisabled}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
    </body>
  );
};

export default ReserveForm;
