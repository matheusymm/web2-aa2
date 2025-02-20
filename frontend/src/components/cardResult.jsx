import { useNavigate } from "react-router-dom";

const CardResult = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/reserve/${id}`);
  };

  return (
    <>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.id)}
            className="w-5/6 mx-auto max-w-xl p-5 mb-5 rounded-lg bg-gray-200 flex flex-col md:flex-row md:w-3/4 gap-x-2 border-2 border-slate-800 cursor-pointer hover:bg-gray-300"
          >
            <div className="md:w-1/2 flex flex-col">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-full h-full rounded-p2"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col w-full">
                <div className="flex-1 text-left text-slate-800">
                  <p className="text-xl font-bold">{item.name}</p>
                </div>
                <div className="flex-1 text-left flex items-center gap-1 text-slate-800">
                  <i className="material-icons mr-2">location_on</i>
                  {item.address}, {item.city}, {item.country}
                </div>
                <div className="flex-1 text-left flex items-center gap-1 text-slate-800">
                  <i className="material-icons mr-2">schedule</i>
                  {item.schedule_start} - {item.schedule_end}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row gap-x-2 justify-items-start md:mb-0">
                    {item.modality &&
                      item.modality.map((cat, catIndex) => (
                        <p
                          key={catIndex}
                          className="select-none text-xl mt-2 md:mt-8 rounded p-2 sm:w-1/3 text-center bg-slate-800 text-white active:bg-blue-500 md:text-base"
                        >
                          {cat}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-800">
          Nenhum resultado encontrado.
        </p>
      )}
    </>
  );
};

export default CardResult;
