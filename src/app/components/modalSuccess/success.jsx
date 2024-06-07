import Button from '../button/button';

export function ModalSuccess({ closeModal }) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-200 bg-opacity-80 z-10">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow-xl text-center">
        <p>Email enviado com sucesso! Aguarde nosso contato :)</p>
        <div className="mt-8">
          <Button title="Fechar" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}