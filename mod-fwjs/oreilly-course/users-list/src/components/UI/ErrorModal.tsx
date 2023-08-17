import Button from "./Button";
import Card from "./Card"
import css from "./ErrorModal.module.css"

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

const ErrorModal: React.FC<ErrorModalProps> = (props = defaultProps) => {

  if (props.show) {
    return (
      <>
        <div className={css.backdrop} onClick={() => props.onModalRequestHide?.()} />
        <Card className={css.modal}>
          <header className={css.header}>
            <h2>Error</h2>
          </header>
          <div className={css.content}>
            <p>{props.message}</p>
          </div>
          <footer className={css.actions}>
            <Button onClick={() => props.onModalRequestHide?.()}>Close</Button>
          </footer>
        </Card>
      </>
    )
  }
  else {
    return (<></>)
  }

}

export default ErrorModal;