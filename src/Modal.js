import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>¡Felicidades!</h2>
        <p>
        Usted respondió {((correct / questions.length) * 100).toFixed(0)}% de las
          preguntas correctamente
        </p>
        <button className='close-btn' onClick={closeModal}>
        volver a jugar
        </button>
      </div>
    </div>
  )
}

export default Modal
