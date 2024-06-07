import './global.css';

const Global = () => {
    return (
        <div className="relative h-screen">
            <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop>
                <source src='/video/video.mp4' type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="relative z-10 features container mx-auto px-6 py-12 flex justify-between">
                <div className="w-full sm:w-2/3 mb-8 sm:mb-0">
                    <h1 className="text-1xl font-bold text-green-400 cursor-pointer hover:text-green-200">Escala global</h1>
                    <h1 className="h1 text-7xl font-semibold text-left mb-10 mt-8 text-white" data-aos="fade-right">
                        Uma estrutura preparada para o comércio internacional
                    </h1>
                    <div>
                    <p className="text-gray-300 leading-relaxed mb-12 text-lg sm:text-white sm:text-xl md:text-1xl">
  Com a Milk, transferir fundos é tão fácil e programável quanto transferir dados. Nossas equipes estão presentes em escritórios ao redor do mundo e processamos anualmente centenas de bilhões de dólares para empresas de todos os portes que visam crescimento.
</p>


                        
                        <div className="container mx-auto px-4 mt-16">
                            <ul className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <li className="bg-white bg-opacity-70 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                                    <p className="card-text p-6 text-center" data-aos="fade-up">
                                        <span className="text-3xl font-bold block">7518</span>
                                        <span className="text-lg text-gray-600 block">Lorem, ipsum.</span>
                                    </p>
                                </li>
                                <li className="bg-white bg-opacity-70 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                                    <p className="card-text p-6 text-center" data-aos="fade-up">
                                        <span className="text-3xl font-bold block">3472</span>
                                        <span className="text-lg text-gray-600 block">Lorem, ipsum dolor.</span>
                                    </p>
                                </li>
                                <li className="bg-white bg-opacity-70 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                                    <p className="card-text p-6 text-center" data-aos="fade-up">
                                        <span className="text-3xl font-bold block">2184</span>
                                        <span className="text-lg text-gray-600 block">Lorem, ipsum.</span>
                                    </p>
                                </li>
                                <li className="bg-white bg-opacity-70 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                                    <p className="card-text p-6 text-center" data-aos="fade-up">
                                        <span className="text-3xl font-bold block">4523</span>
                                        <span className="text-lg text-gray-600 block">Lorem.</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Global;
