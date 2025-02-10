import logo from "../assets/logo.png";
import Input from "./input";

const CourtsForm = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center lg:mt-16 xl:mt-20 2xl:mt-20">
      <div className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt="logo"
          className="size-48 m-0 lg:size-64 xl:size-72 2xl:size-72"
        />
        <h1 className="text-xl font-bold mb-4 lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Conheça as quadras da sua cidade!
        </h1>
      </div>
      <div className="bg-gray-200 w-9/12 shadow-3xl rounded-xl h-fit md:w-1/2 lg:w-1/3 xl:w-1/4 xl:h-72 border-2 border-slate-800 ">
        <div className="p-4">
          <div className="flex items-center text-lg mb-4">
            <Input type="text" id="cidade" placeholder="Digite sua cidade" />
          </div>
          <div className="flex items-center text-lg">
            <Input
              type="text"
              id="modalidade"
              placeholder="Digite a modalidade"
            />
          </div>
          <div className="p-4 lg:flex lg:justify-center text-center">
            <button className="font-medium rounded-full select-none text-xl p-2 w-2/3 bg-slate-800 text-white  hover:bg-slate-700 active:bg-slate-800 md:p-4 justify-center md:w-1/2 cursor-pointer">
              Procurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtsForm;
