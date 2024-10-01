import { useContext } from "react";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";
import styles from "./TopPanel.module.scss";
import { PanelContext } from "../../../context/PanelContext";
import { ThemeContext } from "../../../context/ThemeContext";

function TopPanel({ children }) {
  const breadcrumbsData = [
    { link: "/", title: "Dashboards", disabled: true },
    { link: "/", title: "Default" },
  ];
  const {
    isLeftPanelOpen,
    isRightPanelOpen,
    toggleLeftPanel,
    toggleRightPanel,
  } = useContext(PanelContext);

  const {themeMode} = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  let panelClass = styles.collapsed;
  if (!isLeftPanelOpen && isRightPanelOpen) {
    panelClass = `${styles.expanded} ${styles.leftPanelClosed}`;
  } else if (!isRightPanelOpen && isLeftPanelOpen) {
    panelClass = `${styles.expanded} ${styles.rightPanelClosed}`;
  } else if (isLeftPanelOpen && isRightPanelOpen) {
    panelClass = `${styles.expanded} ${styles.leftPanelClosed} ${styles.rightPanelClosed}`;
  }
 
  const iconStyle = themeMode === 'dark' ? styles['icon-dark'] : {};
  return (
    <div className={panelClass}>
      <div className={styles.panel}>
        <div className="d-flex align-center column-gap-10">
          <img
            className={`cursor-pointer ${iconStyle}`}
            onClick={toggleLeftPanel}
            height={18}
            src="/images/toggle-panel.png"
            alt="Toggle Right panel"
          />
          <img  className={iconStyle} height={18} src="/images/bookmark.png" alt="Bookmarks" />
          <Breadcrumbs data={breadcrumbsData} />
        </div>
        <div className="d-flex align-center column-gap-10">
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}><img height={18} src="/images/search.png" alt="Search" /></span>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchIcon}
            />
            <span className={styles.shortcut}>⌘ /</span>
          </div>
          <img onClick={toggleTheme} className={`cursor-pointer ${iconStyle}`} height={18} src="/images/toggle-theme.png" alt="Toggle theme" />
          <img  className={iconStyle} height={18} src="/images/history.png" alt="history" />
          <img  className={iconStyle} height={18} src="/images/bell.png" alt="favorites" />
          <img
            className={`cursor-pointer ${iconStyle}`}
            onClick={toggleRightPanel}
            height={18}
            src="/images/toggle-panel.png"
            alt="Toggle Right panel"
          />
        </div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}


export default TopPanel;
