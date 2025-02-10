import logo from "../assets/logo.png";

const LoginForm = () => {
  return (
    <div>
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
      <div
        className="bg-gray-200 w-9/12 shadow-3xl rounded-xl h-fit md:w-2/3 md:h-96 md:p-8 lg:w-full
         border-2 border-slate-800"
      >
        <div className="p-4">
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="email"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2
               border-slate-800 md:mt-6"
              placeholder="Digite seu e-mail"
            />
            <i className="material-icons absolute mr-2 md:mt-6">mail</i>
          </div>
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="password"
              id="senha"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2
               border-slate-800 md:mt-6"
              placeholder="Digite sua senha"
            />
            <i
              id="visibility-icon"
              className="material-icons absolute mr-2 cursor-pointer md:mt-6"
              onclick="togglePasswordVisibility('senha', 'visibility-icon')"
            >
              visibility
            </i>
          </div>
        </div>
        <div className="p-2 lg:flex lg:justify-center text-center mb-4 md:mb-0">
          <button
            className="font-medium uppercase rounded-full select-none text-xl
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
