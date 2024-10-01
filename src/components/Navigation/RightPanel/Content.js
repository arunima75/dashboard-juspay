import Card from "../../UI/Card/Card";
import styles from "./RightPanel.module.scss";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

function Content(props) {
  const { data, title } = props;
  const {themeMode} = useContext(ThemeContext);
  const iconStyle = (title === 'Notifications' && themeMode === 'dark') ? styles['icon-dark']:'';
  return (
    <Card title={title} className={styles.card}>
      {data.map((element, index) => (
        <div
          key={index}
          className={`d-flex column-gap-10 align-center mb-3 ${
            element.time ? "align-start" : " align-center"
          }`}
        >
          <img className={iconStyle} height={24} src={`/images/${element.img}`} alt={element.text} />
          <div className="d-flex flex-column row-gap-8">
            <p className="text-ellipsis">{element.text}</p>
            {element.time && (
              <small className="text-secondary">{element.time}</small>
            )}
          </div>
        </div>
      ))}
    </Card>
  );
}

export default Content;
