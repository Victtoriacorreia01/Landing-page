import Image from "next/image";
import Logo from "/public/images/logo.png";
import Link from "next/link";
import "../../../../styles/mixins/responsive.css"






const Header =()=>{
    return( 
        <div className="bg-white border-b border-white py-2 px-4 sm:px-8 md:px-12 lg:px-32 flex flex-col sm:flex-row justify-between items-center">
            <div className="mx-0">
                <Image src={Logo} alt="Logo" width={200} height={150}  data-aos="fade-right"   />
            </div>
    
            <div className="mt-4 sm:mt-2 flex sm:flex-row sm:items-center sm:mr-8 justify-between items-center" data-aos="fade-up">
                <Link className="ml-4 sm:ml-10 text-lg text-black hover:text-green-700 font-semibold" href="/">Home</Link>
                <Link className="ml-4 sm:ml-10 text-lg text-black hover:text-green-700 font-semibold" href="/">Recursos</Link>
                <Link className="ml-4 sm:ml-10 text-lg text-black hover:text-green-700 font-semibold" href="/">Soluções</Link>
            </div>
            <div className="ml-0 sm:ml-10 mt-4 sm:mt-1 flex items-center space-x-4 sm:space-x-10" data-aos="fade-right">
                <button className="bg-gray-200 text-black hover:bg-red-700 hover:text-white font-bold py-2 px-6 rounded mb-4 sm:mb-0">Fale Conosco</button>
                <button className="bg-gray-500 hover:bg-gray-400 bg-opacity-20 text-gray-700 font-bold py-2 px-4 rounded-full mb-4 sm:mb-0">Entrar</button>
            </div>
        </div>
        );
};
export default Header;