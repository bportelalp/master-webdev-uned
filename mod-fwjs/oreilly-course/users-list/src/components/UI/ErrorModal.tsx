import ReactDOM from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import css from "./ErrorModal.module.css";

interface ErrorModalProps {
  title: string,
  message: string,
  show?: boolean,
  onModalRequestHide?(): void
}

const defaultProps: ErrorModalProps = {
  title: 'Error',
  message: '',
}

/**
 * En este componente usamos portales con React. en el index.html hay unos nodos fuera de la raiz del documento donde los componentes
 * que renderizamos aquí se van a situar sobre esas etiquetas y no donde realmente se llama este componente en el código JSX. Esto
 * permite una mejor organizacion del HTML para un modal que no debiera estar en el medio de la página sino fuera de ellas.
 * @param props 
 * @returns 
 */
const ErrorModal: React.FC<ErrorModalProps> = (props = defaultProps) => {

  if (props.show) {
    return (
      <>
        {ReactDOM.createPortal(
          <div className={css.backdrop} onClick={props.onModalRequestHide} />,
          document.getElementById('backdrop-root')!)
        }
        {ReactDOM.createPortal(
          <Card className={css.modal}>
            <header className={css.header}>
              <h2>Error</h2>
            </header>
            <div className={css.content}>
              <p>{props.message}</p>
            </div>
            <footer className={css.actions}>
              <Button onClick={props.onModalRequestHide}>Close</Button>
            </footer>
          </Card>,
          document.getElementById('overlay-root')!)
        }

      </>
    )
  }
  else {
    return (<></>)
  }

}

export default ErrorModal;