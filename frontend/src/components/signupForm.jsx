import { useState } from "react";
import logo from "../assets/logo.png";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const togglePasswordVisibility = (id, iconId) => {
    const input = document.getElementById(id);
    const icon = document.getElementById(iconId);
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "visibility_off";
    } else {
      input.type = "password";
      icon.textContent = "visibility";
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirmation,
        cpf,
        phone,
      }),
    }).then((response) => {
      return response.status;
    });

    if (res === 201) {
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Erro ao cadastrar, tente novamente!");
    }
  };

  return (
    <div className="mt-10 mb-20 flex flex-col items-center justify-center md:mt-20 lg:mt-36 lg:grid-cols-2 lg:grid lg:w-3/4 lg:rounded-xl lg:justify-center lg:mx-auto xl:w-1/2 lg:bg-gray-200 lg:border-2 border-slate-800">
      <div className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt="logo"
          className="size-48 m-0 lg:size-64 xl:size-96 2xl:size-96"
        />
        <h1 className="text-xl font-bold mb-4 lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Faça seu cadastro!
        </h1>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-gray-200 w-9/12 shadow-3xl rounded-xl h-fit md:w-1/2 lg:w-full border-2 lg:border-0 border-slate-800"
      >
        <div className="p-4">
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="nome"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <i className="material-icons absolute mr-2">person</i>
          </div>
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="email"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <i className="material-icons absolute mr-2">mail</i>
          </div>
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="password"
              id="senha"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <i
              id="visibility-icon"
              className="material-icons absolute mr-2 cursor-pointer"
              onClick={() =>
                togglePasswordVisibility("senha", "visibility-icon")
              }
            >
              visibility
            </i>
          </div>
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="password"
              id="senha-confirmacao"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Confirme sua senha"
              value={passwordConfirmation}
              onChange={(e) => handlePasswordConfirmationChange(e)}
            />
            <i
              id="visibility-icon-confirm"
              className="material-icons absolute mr-2 cursor-pointer"
              onClick={() =>
                togglePasswordVisibility("senha-confirmacao", "visibility-icon")
              }
            >
              visibility
            </i>
          </div>
          <div className="relative justify-end flex items-center text-lg mb-4">
            <input
              type="text"
              id="cpf"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => handleCpfChange(e)}
            />
            <i className="material-icons absolute mr-2">badge</i>
          </div>
          <div className="relative justify-end flex items-center text-lg">
            <input
              type="text"
              id="celular"
              className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
              placeholder="Digite seu celular"
              value={phone}
              onChange={(e) => handlePhoneChange(e)}
            />
            <i className="material-icons absolute mr-2">call</i>
          </div>
        </div>
        <div className="p-4 lg:flex lg:justify-center text-center">
          <button
            type="submit"
            className="font-medium rounded-full select-none text-xl p-2 w-2/3 bg-slate-800 text-white hover:bg-slate-700 active:bg-slate-800 md:p-4 lg:p-4 justify-center md:w-1/2 cursor-pointer"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
