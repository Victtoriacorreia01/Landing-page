import './welcome.css';
import fotoprincipal from '../../../../public/images/Online world-amico.png';
import Image from 'next/image';

const Welcome = () => {
    return (
        <div className="firstdiv bg-gradient-animation w-screen h-screen flex items-center">
            <div className="secdiv lg:ml-20 ">
            <h1 className="h1 lg:mt-8 lg:ml-16 lg:text-7xl font-bold sm:text-5xl sm:ml-4 sm:mt-0 text-black tracking-normal sm:tracking-wide" data-aos="fade-left">
            Infraestrutura de pagamentos <br /> para a internet
            </h1>
            <hr className='line'/>
                <p className='p lg:mt-10 lg:ml-16 text-base ' data-aos="fade-left">Milhões de empresas de todos os tamanhos usam a Milk <br />e presencialmente para receber pagamentos, enviar repasses,<br /> automatizar processos financeiros e ampliar suas receitas.</p>
                <button className='b1 lg:mt-10 bg-black hover:bg-green-500 text-white font-bold py-2 px-4 lg:ml-16 rounded-full lg:mx-5 sm:text-sm sm:mx-2 sm:mr-0 sm:mb-4' data-aos="fade-up"> Aumente vendas</button>
                <button className='b2 bg-gray-500 hover:bg-red-600 hover:text-white bg-opacity-20 text-white font-bold py-2 px-4 rounded-full mx-4 sm:text-sm' data-aos="fade-up"> Fale com nossa equipe</button>

            </div>
            <div className='img hidden sm:block'>
                <div className="image-container">
                    < Image src={fotoprincipal} className="w-3/4 ml-40" alt="Foto principal" data-aos="fade-right" quality={true} />
                </div>
            </div>
        </div>
    );
}

export default Welcome;