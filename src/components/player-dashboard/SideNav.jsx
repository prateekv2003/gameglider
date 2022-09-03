import styles from "./Navbar.module.scss";
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai'
import { IoGameControllerOutline } from 'react-icons/io5'
import { BsTrophy } from 'react-icons/bs'
import { RiTeamLine } from 'react-icons/ri'
import { BiMenu } from 'react-icons/bi'

//ICONS FROM REACT-ICONS PACKAGE
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
  MdOutlineFlag,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideNav = () => {
  const [nav, setnav] = useState(false);

  const NavUrl = ({ url, icon, description }) => {
    const checkWindowSize = () => {
      if (window.innerWidth < 1024) setnav(!nav);
    };
    return (
      <li className={styles.li_navlink}>
        <NavLink
          to={`${url}`}
          onClick={() => checkWindowSize()}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {icon}
          <span className={styles.description}>{description}</span>
        </NavLink>
      </li>
    );
  };

  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      {/* TEST     */}
      <div className={styles.test}>
        <button
          onClick={() => {
            setnav(!nav);
          }}
        >
          PRESS ME
        </button>
      </div>

      <nav className={nav ? undefined : styles.nav_small}>
        {/* LOGO */}
        <div className={styles.logo}>
          <VscDashboard className={styles.logo_icon} onClick={() => setnav(!nav)}/>
          <FaTimes
            className={styles.mobile_cancel_icon}
            onClick={() => setnav(!nav)}
          />
        </div>

        {/* SUBMENU */}
        <ul className={styles.menu_container}>
          {/* FIRST CATEGORY */}
          <span className={styles.categories}>
            {nav ? "Pages" : <BsThreeDots />}
          </span>

          <NavUrl
            url="/"
            icon={<BiMenu />}
            description="Dashboard"
          />

          <NavUrl
            url="/analytics"
            icon={<AiOutlineHome />}
            description="Home"
          />

          <NavUrl
            url="/campaings"
            icon={<AiOutlineTeam />}
            description="Friend"
          />

          <NavUrl
            url="/messages"
            icon={<IoGameControllerOutline />}
            description="Games"
          />
          <NavUrl
            url="/tournaments"
            icon={<BsTrophy />}
            description="Tournaments"
          />
          <NavUrl
            url="/Team"
            icon={<RiTeamLine />}
            description="Team"
          />

          {/* SECOND CATEGORY */}
          
          {/* <span
            className={`${styles.categories} 
          ${styles.second_category}`}
          >
            {nav ? "More" : <BsThreeDots />}
          </span>

          <NavUrl url="/other1" icon={<IoMdLogIn />} description="Auth" />

          <NavUrl url="/other1" icon={<FaReact />} description="ReactJs" /> */}
        </ul>

        {/* LOGOUT BUTTON */}
        <div
          className={styles.btn_logout}
          onClick={() => {
            setnav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div>
        {/* ADD BACKGROUND FOR MOBILE */}
      </nav>
    </div>
  );
};

export default SideNav;
