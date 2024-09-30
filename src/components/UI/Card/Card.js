import styles from "./Card.module.scss";
import CardTitle from "./CardTitle";

function Card({ color, title, children, className }) {
  const customClass = `${styles.main } ${ color ? 'bg-' + color : ""} w-100 ${className}`
  return (
    <div className={customClass}>
      <CardTitle className="mb-2">{ title }</CardTitle>
      <div id="card-content" className={styles.content}>
        { children }
      </div>
    </div>
  );
}

export default Card;
