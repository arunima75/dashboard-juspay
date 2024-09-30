import { useContext } from 'react';
import styles from './LeftPanel.module.scss';
import { PanelContext } from '../../../context/PanelContext';
import Profile from './Profile';
import Favorites from './Favorites';
import Dashboards from './Dashboards';

function LeftPanel() {
  const { isLeftPanelOpen } = useContext(PanelContext);

  if (isLeftPanelOpen) return null;

  const links = [
    {
      link: "/default",
      name: "Default",
      icon: '/images/default.png',
    },
    {
      link: "/eCommerce",
      name: "eCommerce",
      icon: '/images/eCommerce.png',
    },
    {
      link: "/projects",
      name: "Projects",
      icon: '/images/Project.png',
    },
    {
      link: "/online-courses",
      name: "Online Courses",
      icon: '/images/onlineCrz.png',
    },
  ];
  const pageLinks = [
    {
      link: "/user-profile",
      name: "User Profile",
      icon: '/images/user-profile.png',
      children: [
        {
          link: "/overview",
          name: "Overview",
        },
        {
          link: "/projects",
          name: "Projects",
        },
        {
          link: "/campaigns",
          name: "Campaigns",
        },
        {
          link: "/documents",
          name: "Documents",
        },
        {
          link: "/followers",
          name: "Followers",
        }
      ],
    },
    { 
      link: "/account",
      name: "Account",
      icon: '/images/account.png',
    },
    {
      link: "/corporate",
      name: "Corporate",
      icon: '/images/corporate.png',
    },
    {
      link: "/blog",
      name: "Blog",
      icon: '/images/blog.png',
    },
    {
      link: "/social",
      name: "Social",
      icon: '/images/social.png',
    },
  ];
  return (
    <div className={styles.panel}>
        <Profile />
        <Favorites />
        <Dashboards data={links} title ='Dashboards'/>
        <Dashboards data={pageLinks} title = 'Pages'/>
    </div>
  );
}

export default LeftPanel;
