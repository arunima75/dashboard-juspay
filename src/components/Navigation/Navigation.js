import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import TopPanel from "./TopPanel/TopPanel";
import styles from "./Navigation.module.scss";

function Navigation({ children }) {
  return (
    <div className={styles.main}>
      <LeftPanel />
      <TopPanel>{children}</TopPanel>
      <RightPanel />
    </div>
  );
}

export default Navigation;
