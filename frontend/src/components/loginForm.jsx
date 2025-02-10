import logo from "../assets/logo.png";
import Input from "./input";

const LoginForm = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col items-center justify-center md:mt-20 lg:mt-36 lg:grid-cols-2 lg:grid lg:w-3/4 lg:rounded-xl lg:justify-center lg:mx-auto xl:w-1/2 lg:bg-gray-200 lg:border-2 border-slate-800">
      <div className="flex flex-col items-center text-center lg:mb-4">
        <img
          src={logo}
          alt="logo"
          className="size-48 m-0 md:size-72 lg:size-80 xl:size-96 2xl:size-96"
        />
        <h1 className="text-xl font-bold mb-4 md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
          Faça seu Login!
        </h1>
      </div>
      <div className="bg-gray-200 w-9/12 shadow-3xl rounded-xl h-fit md:w-2/3 md:h-96 md:p-8 lg:w-full border-2 lg:border-0 border-slate-800">
        <div className="p-4">
          <div className="relative justify-end flex items-center text-lg mb-4">
            <Input type="text" id="email" placeholder="Digite seu e-mail" />
            <i className="material-icons absolute mr-2">mail</i>
          </div>
          <div className="relative justify-end flex items-center text-lg mb-4">
            <Input type="password" id="senha" placeholder="Digite sua senha" />
            <i
              id="visibility-icon"
              className="material-icons absolute mr-2 cursor-pointer"
              onclick="togglePasswordVisibility('senha', 'visibility-icon')"
            >
              visibility
            </i>
          </div>
        </div>
        <div className="p-2 lg:flex lg:justify-center text-center mb-4 md:mb-0">
          <button
            className="font-medium rounded-full select-none text-xl
            p-2 w-2/3 bg-slate-800 text-white 
           hover:bg-slate-700 active:bg-slate-800 md:p-4
             lg:p-4 justify-center md:mt-6 lg:mt-0 md:w-1/2 cursor-pointer"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
