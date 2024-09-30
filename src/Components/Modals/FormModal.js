import { Modal } from "react-modal";

const FormModal = ({ openModal,closeModal, children, styling }) => {
  return (
    <>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={`${styling}`}
        contentLabel="Modal"
      >
        {children}
      </Modal>
    </>
  );
};

export default FormModal;
