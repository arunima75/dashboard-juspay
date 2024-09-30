import { useContext } from 'react';
import Content from './Content';
import styles from './RightPanel.module.scss'
import { PanelContext } from '../../../context/PanelContext';

function RightPanel() {
  const { isRightPanelOpen } = useContext(PanelContext);

  if (isRightPanelOpen) return null;
  const contactsData = [
    {
      img: "/Natali.png",
      text: "Natali Craig",
    },
    {
      img: "/Drew.png",
      text: "Drew Cano",
    },
    {
      img: "/Orlando.png",
      text: "Orlando Diggs",
    },
    {
      img: "/Andi.png",
      text: "Andi Lane",
    },
    {
      img: "/Kate.png",
      text: "Kate Morrison",
    },
    {
      img: "/Koray.png",
      text: "Koray Okumus",
    },
  ];
  const activityData = [
    {
      img: "/Notify1.png",
      text: "You have a bug that needs your attention",
      time: "Just now",
    },
    {
      img: "/Notify2.png",
      text: "Release a new version",
      time: "59 minutes ago",
    },
    {
      img: "/Notify3.png",
      text: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      img: "/Notify4.png",
      text: "Modified a data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      img: "/Notify5.png",
      text: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];
  const notificationsData = [
    {
      img: "/Bug.png",
      text: "You have a bug that needs your attention",
      time: "Just now",
    },
    {
      img: "/User.png",
      text: "New user registered",
      time: "59 minutes ago",
    },
    {
      img: "/Bug.png",
      text: "You have a bug that needs your attention",
      time: "12 hours ago",
    },
    {
      img: "/Broadcast.png",
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];
  return (
    <div className={styles.panel}>
        <Content title={'Notifications'} data={notificationsData} />
        <Content title={'Activities'} data={activityData} />
        <Content title={'Contacts'} data={contactsData} />
    </div>
  );
}

export default RightPanel;
