import styles from "./Card.module.scss";
import CardTitle from "./CardTitle";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

function Card({ color, title, children, className }) {
  const {themeMode} = useContext(ThemeContext);
  const theme = themeMode=== 'dark' ? '-dark' : '-light';

  const customClass = `${styles.main } ${ color ? 'bg-' + color + theme : ""} ${className}`
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
