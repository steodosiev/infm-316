import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "2rem",
        textAlign: "center"
    },
};
const EndGameModal = ({isOpen, onClose, text}) => {
    return <Modal isOpen={isOpen} style={customStyles}>
        <div className="winner-title">{text}</div>
        <button className="game-button" onClick={onClose}>Restart Game</button>
    </Modal>
}

export default EndGameModal