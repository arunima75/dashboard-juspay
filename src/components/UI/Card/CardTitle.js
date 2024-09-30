import styles from "./Card.module.scss";

function CardTitle({ children }) {
  return (
    <p className={styles.title}>{ children }</p>
  );
}

export default CardTitle;
