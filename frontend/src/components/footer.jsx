const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-700 p-2 lg:p-4  flex items-center ng-s">
      <div className="flex flex-row justify-between space-x-4 text-left text-sm text-gray-200 cursor-pointer">
        <a href="">Sobre Nós</a>
        <a href="">Termo de Uso</a>
        <a href="">Política de Privacidade</a>
      </div>
      <ul className="flex space-x-1 ml-auto text-gray-200 cursor-pointer">
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
