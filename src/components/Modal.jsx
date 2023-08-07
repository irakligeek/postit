import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

export default function Modal({children}) {
  const nav = useNavigate();
  const closeModalHandler = () => {
    nav("/");
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <dialog open={true} className={styles.modal}>{children}</dialog>
    </>
  );
}
