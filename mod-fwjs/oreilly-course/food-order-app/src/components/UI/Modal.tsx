import React from 'react';
import ReactDOM from 'react-dom'
import css from './Modal.module.css'

interface ModalProps extends React.PropsWithChildren {
  onClickBackdrop?(): void
}

/**
 * Componente de fondo, con accion de click sobre él.
 * @param props 
 * @returns 
 */
const Backdrop: React.FC<ModalProps> = props => {
  return <div className={css.backdrop} onClick={props.onClickBackdrop} />
}

/**
 * Modal en si mismo que se muestra sobre el fondo.
 * @param props 
 * @returns 
 */
const ModalOverlay: React.FC<ModalProps> = props => {
  return (
    <div className={css.modal}>
      <div className={css.content}>{props.children}</div>
    </div>
  )
}

/**
 * Muestra una ventana emergente con contenido que admite el cierre con click sobre el fondo.
 * @param props 
 * @returns 
 */
const Modal: React.FC<ModalProps> = (props) => {
  const overlayElement: HTMLElement = document.getElementById('overlays')!;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop {...props} />
          <ModalOverlay>{props.children}</ModalOverlay>
        </>,
        overlayElement
      )}
    </>
  );
}

export default Modal;