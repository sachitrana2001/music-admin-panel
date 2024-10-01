import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onClose, title, content, footer }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      ariaHideApp={false}
      className="bg-white p-6 rounded-lg shadow-lg  w-[300px] sm:w-[400px] relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="flex justify-end  items-center">
        <button
          onClick={onClose}
          className="text-[20px] w-[30px] h-[30px] rounded-md hover:bg-[#F5F5F5]"
        >
          &times;
        </button>
      </div>

      <div className="modal-body">{content}</div>

      {footer && <div className="modal-footer">{footer}</div>}
    </Modal>
  );
};

export default CustomModal;
