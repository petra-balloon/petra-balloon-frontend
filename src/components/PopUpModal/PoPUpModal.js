import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FirstModal from "./FirstModal";

const MainPopUpModal = ({ openModal,closeModal,secondmodal,setSecondModal,setOpenModal,selectedpass,setSelectedPass }) => {
  /* const [open, setOpen] = useState(false);  */

  /* const onOpenModal = () => setOpen(true); */
  /* const onCloseModal = () => setOpen(false); */

  return (
    <div>
      <Modal
        classNames={{
          modal: "modal-body"
        }}
        open={openModal}
        onClose={closeModal}
        center
      >
        {openModal && <FirstModal secondmodal={secondmodal} setSecondModal={setSecondModal} closeModal={closeModal} setOpenModal={setOpenModal} setSelectedPass={setSelectedPass} selectedpass={selectedpass} />}
        
      </Modal>
    </div>
  );
};

export default MainPopUpModal;
