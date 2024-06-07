
import Button from '../button/button';

export const ModalFail = ({ closeModal }) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-200 bg-opacity-80 z-10" onClick={closeModal}>
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-xl text-center">
        <p className="text-lg text-gray-700 mt-6">Não foi possível enviar no momento, tente novamente mais tarde.</p>
        <div className="mt-14 max-w-xs">
          <Button title="Fechar" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};