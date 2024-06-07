"use client"; 
import './features.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="features container mx-auto px-6 py-12 flex justify-between">
      <div className="w-full sm:w-2/3 mb-8 sm:mb-0">
        <h1 className="text-1xl font-bold text-red-600 cursor-pointer hover:text-green-400">Soluções modulares</h1>
        <h1 className="h1 text-7xl font-semibold text-left mb-10 mt-8"  data-aos="fade-left">
          Um pacote totalmente integrado de produtos para gestão financeira <br /> e pagamentos
        </h1>
        <div className=''>
          <p className="pa text-1xl text-gray-700 leading-relaxed mb-12" data-aos="zoom-left">
            Reduza custos, aumente a receita e administre sua empresa <br /> com mais eficiência em uma plataforma totalmente integrada. <br /> 
            Use a Milk para gerenciar todas as suas necessidades de <br /> pagamento e operações de receita e ainda lançar ou criar <br />
            novos modelos de negócios.
          </p>
          <span className="block h-1 w-80 bg-gray-300 rounded-full" data-aos="zoom-in"></span>
        </div>
      </div>

      <div className="w-full sm:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left" data-aos="zoom-in">
            <div className="box bg-blue-50 rounded-lg p-3 mb-14 border border-gray-300">
              <img src="conexão.png" alt="" width={80} height={100}/>
              <h2 className="text-xl font-bold mb-4 mt-5 text-green-600 hover:text-red-800">Conectividade</h2>
              <p className="text-0xl text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus inventore ad cumque labore ex maxime consectetur molestias.</p>
            </div>

            <div className="box bg-blue-50 rounded-lg p-3 mb-1 border border-gray-300">
              <img src="pagamentos.png" alt="" width={100} height={100}/>
              <h2 className="text-xl font-bold mb-4 text-green-600 hover:text-red-800">Pagamentos</h2>
              <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus inventore ad cumque labore ex maxime consectetur molestias.</p>
            </div>
          </div>
          <div className="text-left" data-aos="zoom-in">
            <div className="box bg-blue-50 rounded-lg p-3 mb-14 border border-gray-300">
              <img src="identidade.png" alt="" width={100} height={100} />
              <h2 className="text-xl font-bold mb-4 text-green-600 hover:text-red-800">Identidade</h2>
              <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus inventore ad cumque labore ex maxime consectetur molestias.</p>
            </div>

            <div className="box bg-blue-50 rounded-lg p-3 mb-14 border border-gray-300">
              <img src="conectividade.png" alt="" width={100} height={100} />
              <h2 className="text-xl font-bold mb-4 text-green-600 hover:text-red-800">Estratégia</h2>
              <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus inventore ad cumque labore ex maxime consectetur molestias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
