import { useState } from "react";
import styles from "./LeftPanel.module.scss";
import { IS_FAVORITE } from "../../../constants/config";
// import Button from "../../UI/Button/Button";

function Favorites() {
  const favoritesData = [
    {
      key: "Favorites",
      value: ["Overview", "Projects"],
    },
    {
      key: "Recently",
      value: ["Notifications", "Projects"],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(IS_FAVORITE);
  const handleButtonClick = (button) => {
    setSelectedTab(button); 
  }   
  return (
    <div className="mx-3">
      <div className={styles.favorites}>
        {favoritesData.map((item, index) => (
          // <Button
          //   className={styles.bgSecondary}
          //   key={index}
            
          //   onClick={() => handleButtonClick(item.key)}
          // >
          //   {item.key}
          // </Button>
          <button className={`${styles.menuButton} ${selectedTab === item.key ? styles.clicked : ''} `} 
            onClick={() => handleButtonClick(item.key)}>{item.key}</button>
        ))}
      </div>
      {favoritesData.map(
        (item, index) =>
          item.key === selectedTab && (
            <ul className={styles.list} key={index}>
              {item.value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )
      )}
    </div>
  );
}

export default Favorites;
