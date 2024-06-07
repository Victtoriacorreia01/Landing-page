

const Footer = () => {
    return (
        <footer className="px-28 py-2 bg-gray-200 mx-auto w-full text-black cursor-pointer ">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="footer-brand">
          <a href="#" className="logo">
          <img src="/images/logooo.png" alt="Logo"  width={150} className="mt-6"/>
          </a>
          <p className="footer-text mt-6">Todos os direitos reservados.</p>
        </div>
        <ul className="footer-list">
          <li>
            <address className=" mt-6 footer-text text-0xl ">Brasil</address>
          </li>
          <li className="mt-1 text-1xl">
            <a href="mailto:info@email.com" className=" footer-link">
              info@email.com
            </a>
          </li>
          <li className="mt-1">
            <a href="tel:001234567890" className=" footer-link">
              +555 (085) 98760-2345
            </a>
          </li>
        </ul>
        <ul className="mt-4 footer-list">
          <li>
            <p className="footer-list-title hover:text-gray-500">Saiba Mais</p>
          </li>
          <li>
            <a href="#" className="footer-link hover:text-gray-500">
              Nossa História
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:text-gray-500">
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:text-gray-500">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="footer-link hover:text-gray-500">
              Política de Privacidade
            </a>
          </li>
        </ul>

        <div className="footer-list">
          <p className="h4 footer-list-title hover:text-gray-500"></p>
          <p className="footer-text mt-2">Escreva para nós!</p>
          <form action="" className="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              className="input-field bg-white text-gray-700 px-3 py-2 rounded-md shadow-md outline-none mb-5 mt-5"
            />
            <button
              type="submit"
              className="submit-btn bg-gray-300 text-black px-3 py-1 font-semibold rounded-md shadow-md hover:text-white hover:bg-green-500"
            >
              Aproveite
            </button>
          </form>
        </div>
      </div>
</footer>
    );
};
export default Footer;