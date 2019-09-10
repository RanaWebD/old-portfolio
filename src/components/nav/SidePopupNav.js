import React from "react";
import { Link } from "react-router-dom";
import "./sidePopupNav.css";

const navListItem = obj => {
  return (
    <Link to={obj.title.toLowerCase()} className="nav-list__ul__li">
        <span className="nav-list__ul__li-text">{obj.title}</span>
        <img
          className="nav-list__ul__li-icon"
          src={obj.url}
          alt="home"
          height="28"
          width="28"
        />
    </Link>
  );
};

const data1 = [
  {
    title: "Home",
    url: "./assets/home.svg"
  },

  {
    title: "Work",
    url: "./assets/suitcase.svg"
  }
];

const data2 = [
  {
    title: "Skills",
    url: "./assets/skills.svg"
  },

  {
    title: "About",
    url: "./assets/user.svg"
  }
];

const SidePopupNav = props => {
  console.log(props);
  return (
    <section className="nav">
      <input type="checkbox" className="nav__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="nav-btn">
        <div className="nav-btn__icon-1" />
        <div className="nav-btn__icon-2" />
        <div className="nav-btn__icon-3" />
      </label>
      <section className="nav-list">
        <ul className="nav-list__ul">
          <li className="nav-list__ul__li-section-1">
            {data1.map(obj => {
              return navListItem(obj);
            })}
          </li>
          <li className="nav-list__ul__li-section-2">
            {data2.map(obj => {
              return navListItem(obj);
            })}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default SidePopupNav;
