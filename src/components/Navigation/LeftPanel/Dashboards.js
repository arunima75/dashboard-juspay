import { useState } from "react";
import styles from "./LeftPanel.module.scss";

function Dashboards({ title,data}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

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
              <img height={20} src={item.icon} alt={item.name} />
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