const Header = () => {
  const toggleMenu = () => {
    var x = document.getElementById("menu");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <header className="top-0 left-0 w-full h-14 p-4 flex flex-row justify-between items-center border-b-2 border-slate-800 lg:h-15 bg-gray-200">
      <div
        onClick={toggleMenu}
        className="flex flex-row gap-x-4 select-none cursor-pointer lg:hidden"
      >
        <i className="material-icons">menu</i>
      </div>
      <div className="font-bold text-2xl cursor-pointer select-none hover:text-orange-800 lg:text-3xl">
        <a href="/">Sportify</a>
      </div>
      <div
        id="menu"
        className="fixed top-14 left-0 w-full z-10 hidden flex-col p-2 gap-y-2 text-sm font-semibold bg-gray-200 lg:bg-transparent lg:border-b-0 border-b border-slate-800 lg:static lg:flex lg:flex-row lg:justify-end lg:border-t-0"
      >
        <div className="p-2 cursor-pointer select-none hover:text-orange-800 lg:text-xl mt-2">
          <a href="login">Entre</a>
        </div>
        <div className="p-2 cursor-pointer select-none hover:text-orange-800 lg:text-xl mt-2">
          <a href="signup">Cadastre-se</a>
        </div>
      </div>
      <div
        onclick="toggleDarkMode()"
        className="select-none cursor-pointer hover:text-yellow-500 mt-2"
      >
        <div>
          <i className="material-icons">dark_mode</i>
        </div>
      </div>
    </header>
  );
};

export default Header;
