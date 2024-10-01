import { useState, useContext} from "react";
import styles from "./LeftPanel.module.scss";
import { ThemeContext } from "../../../context/ThemeContext";

function Dashboards({ title,data}) {
  const { themeMode } = useContext(ThemeContext);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

 const iconStyle = themeMode === 'dark' ? styles['icon-dark'] : '';

  return (
    <div className={styles.dashboards}>
      <p className="mx-3 mb-3 section-title">{title}</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className={styles.link}
              onClick={(e) => {
                if (item.children) {
                  e.preventDefault();
                  toggleDropdown(index);
                }
              }}
            >
              <span className={styles.linkPoint}>{openDropdown === index ? 'v' : '>'}</span>
              <img className={iconStyle} height={20} src={item.icon} alt={item.name} />
              <span className={styles.linkStyle}>{item.name}</span>
            </a>
            {item.children && (
              <ul
                className={`${styles.dropdown} ${
                  openDropdown === index ? styles.show : ""
                }`}
              >
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <a href={child.link} className={styles.link}>
                      <span className={styles.linkPoint}></span>
                      <span className={styles.linkStyle}>{child.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboards;