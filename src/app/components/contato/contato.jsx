'use client';
import Loading from '../loading/loading';
import axios from 'axios';
import Button from '../button/button';
import './contato.css';
import icone from '../../../../public/images/iconecontato.jpg';
import { useState, useEffect } from 'react';
import { ModalSuccess } from '../modalSuccess/success';
import { ModalFail } from '../modalFail/fail';

const Contato = () => {
  const [isLoading, setLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [orcamento, setOrcamento] = useState("");

  const [nomeError, setNomeError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [siteError, setSiteError] = useState("");
  const [orcamentoError, setOrcamentoError] = useState("");

  let timeoutId;

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleBlur = (value, setter, setError, fieldName) => {
    if (value.trim() === "") {
      setError(`O campo ${fieldName} é obrigatório`);
    } else {
      setError("");
    }
    setter(value);
  };

  const resetForm = () => {
    setNome("");
    setTelefone("");
    setEmail("");
    setSite("");
    setOrcamento("");
    setNomeError("");
    setTelefoneError("");
    setEmailError("");
    setSiteError("");
    setOrcamentoError("");
  };

  const SendEmail = (event) => {
    event.preventDefault();
    if (nome && telefone && email && site && orcamento) {
      setLoading(true);
      axios.post("/api/sendEmail", {
        messageBody: `
        Obrigado por entrar em contato conosco!
        
        Olá ${nome},
        
        Obrigado por entrar em contato conosco e pelo seu interesse em nossos serviços! Recebemos os seguintes dados:
        
        Nome completo: ${nome}
        Email: ${email}
        Whatsapp: ${telefone}
        Site: ${site}
        Orçamento: ${orcamento}
        
        Nós da Milk estamos entusiasmados com a possibilidade de ajudar você a aumentar suas vendas e melhorar seus resultados. Nossa equipe de especialistas analisará suas informações e entrará em contato o mais breve possível para discutir como podemos colaborar para alcançar seus objetivos.
        
        Enquanto isso, sinta-se à vontade para visitar nosso site e conhecer mais sobre nossos serviços e como temos ajudado outras empresas a crescerem.
        
        Se tiver alguma dúvida urgente, não hesite em nos contactar diretamente pelo telefone (00) 00000-0000 ou pelo email milk65061@gmail.com.
        
        Agradecemos pela confiança e estamos ansiosos para trabalhar com você!
        
        Atenciosamente,
        
        Milk.
        `
      })
      .then(() => {
        console.log("Requisição enviada com sucesso!");
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, 1000); 
        resetForm();
        setModalSuccess(true);
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
        setLoading(false);
        setModalFail(true);
      });

    } else {
      if (!nome) setNomeError("O campo Nome completo é obrigatório");
      if (!telefone) setTelefoneError("O campo Whatsapp é obrigatório");
      if (!email) setEmailError("O campo Email é obrigatório");
      if (!site) setSiteError("O campo Site é obrigatório");
      if (!orcamento) setOrcamentoError("O campo Orçamento é obrigatório");
    }
  };

  const closeModal = () => {
    setModalSuccess(false);
    setModalFail(false);
  };

  return (
    <>
      {modalSuccess && <ModalSuccess closeModal={closeModal} />}
      {modalFail && <ModalFail closeModal={closeModal} />}
      {isLoading && <Loading />}
      <div className="ml-1 md:ml-36 mb-16 mt-16 container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="text">
          <span className="text-green-600 text-xl font-semibold">Entre em contato conosco</span>
          <h1 className="text-3xl font-bold mt-3" data-aos="fade-up">
            Aumente suas vendas e resultados
          </h1>
          <p className="text-lg font-light mt-4" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illum minus reiciendis aperiam unde commodi expedita provident atque non, amet architecto quae culpa eum! Dignissimos aperiam atque ad inventore sapiente.
          </p>
          <img src="/images/cell.jpg" alt="" width={380} className="mt-10 image-move" />
        </div>
        <div className="form mt-1 mb-14 p-6 md:p-14 border pt-7 border-gray-200 rounded-lg">
          <img src={icone} alt="" data-aos="fade-up" />
          <h1 className="text-blue-700 font-bold text-3xl flex items-center mb-6">
            <span className="mr-3" data-aos="fade-up">➜</span>Fale com um especialista
          </h1>
          <form className="flex flex-col gap-4" data-aos="fade-down">
            <div>
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={(e) => handleBlur(e.target.value, setNome, setNomeError, "Nome completo")}
                required
                className="input-field border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none w-full"
              />
              {nomeError && <p className="text-red-500 text-sm mt-1">{nomeError}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => handleBlur(e.target.value, setEmail, setEmailError, "Email")}
                required
                className="input-field border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none w-full"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Whatsapp"
                value={telefone}
                pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                onChange={(e) => setTelefone(e.target.value)}
                onBlur={(e) => handleBlur(e.target.value, setTelefone, setTelefoneError, "Whatsapp")}
                required
                className="input-field border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none w-full"
              />
              {telefoneError && <p className="text-red-500 text-sm mt-1">{telefoneError}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Site"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                onBlur={(e) => handleBlur(e.target.value, setSite, setSiteError, "Site")}
                required
                className="input-field border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none w-full"
              />
              {siteError && <p className="text-red-500 text-sm mt-1">{siteError}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Mensagem"
                value={orcamento}
                onChange={(e) => setOrcamento(e.target.value)}
                onBlur={(e) => handleBlur(e.target.value, setOrcamento, setOrcamentoError, "Orçamento")}
                required
                className="input-field border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none w-full"
              />
              {orcamentoError && <p className="text-red-500 text-sm mt-1">{orcamentoError}</p>}
            </div>
            <Button title="Enviar" kind="full" onClick={SendEmail} />
          </form>
          <div>
            <h1 className="text-center mt-10">
              Enviando esse formulário você reconhece que leu sobre a nossa <br /> 
              <strong>Política de Privacidade</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;