import styles from './LeftPanel.module.scss';

function Profile() {
  return (
    <div className={styles.profile}>
        <img height={25} width={25} src="/images/ByeWind.png" alt="Bye Wind" />
        <p>ByeWind</p>
    </div>
  );
}

export default Profile;
