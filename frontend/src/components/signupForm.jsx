import logo from "../assets/logo.png";

const SignupForm = () => {
  return (
    <div class="mt-10 mb-20 flex flex-col items-center justify-center md:mt-20 lg:mt-36 lg:grid-cols-2 lg:grid lg:w-3/4 lg:rounded-xl lg:justify-center lg:mx-auto xl:w-1/2 lg:bg-gray-200 lg:border-2 border-slate-800">
      <div class="flex flex-col items-center text-center">
        <img
          src={logo}
          alt="logo"
          class="size-48 m-0 lg:size-64 xl:size-96 2xl:size-96"
        />
        <h1 class="text-xl font-bold mb-4 lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Faça seu cadastro!
        </h1>
      </div>
      <div class="bg-gray-200 w-9/12 shadow-3xl rounded-xl h-fit md:w-1/2 lg:w-full border-2 lg:border-0 border-slate-800">
        <div class="p-4">
          <div class="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="nome"
              class="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu nome"
            />
            <i class="material-icons absolute mr-2">person</i>
          </div>
          <div class="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="email"
              class="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu e-mail"
            />
            <i class="material-icons absolute mr-2">mail</i>
          </div>
          <div class="relative justify-end flex items-center text-lg mb-4">
            <input
              type="password"
              id="senha"
              class="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite sua senha"
            />
            <i
              id="visibility-icon"
              class="material-icons absolute mr-2 cursor-pointer"
              onclick="togglePasswordVisibility('senha', 'visibility-icon')"
            >
              visibility
            </i>
          </div>
          <div class="relative justify-end flex items-center text-lg mb-4">
            <input
              type="password"
              id="senha-confirmacao"
              class="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Confirme sua senha"
            />
            <i
              id="visibility-icon-confirm"
              class="material-icons absolute mr-2 cursor-pointer"
              onclick="togglePasswordVisibility('senha-confirmacao', 'visibility-icon-confirm')"
            >
              visibility
            </i>
          </div>
          <div class="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="cpf"
              class="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu CPF"
            />
            <i class="material-icons absolute mr-2">badge</i>
          </div>
          <div class="relative justify-end flex items-center text-lg">
            <input
              type="text"
              id="celular"
              class="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu celular"
            />
            <i class="material-icons absolute mr-2">call</i>
          </div>
        </div>
        <div class="p-4 lg:flex lg:justify-center text-center">
          <button class="font-medium uppercase rounded-full select-none text-xl p-2 w-2/3 bg-slate-800 text-white hover:bg-slate-700 active:bg-slate-800 md:p-4 lg:p-4 justify-center md:w-1/2 cursor-pointer">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
