import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import styles from "./main.module.scss";

export default function Main() {
  const statusLogin = useSelector((state) => state.isLogin.isLogin);
  const [toggle, setToggle] = useState(true);
  const [display, setDisplay] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setButton(false);
    }, 2000);
    setTimeout(() => {
      setToggle(false);
    }, 5000);

    setTimeout(() => {
      setDisplay(true);
      setToggle(true);
    }, 10000);
  };

  const clickMe = () => {
    alert("ngủ cái mai làm tiếp")
  }

  return (
    <header>
      {statusLogin ? "" : <Navigate to="/login" />}

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>

      <section id={styles.header}>
        <button
          onClick={handleClick}
          style={{ display: button ? "block" : "none" }}
        >
          Nhấn vô đây này
        </button>

        <div id={styles.content} style={{ display: toggle ? "none" : "block" }}>
          Có cái gì đâu :
        </div>

        <div id={styles.next} style={{ display: display ? "block" : "none" }}>Đùa đó kkkk
          <button id={styles.click} onClick={clickMe}>Nhấn tiếp này :</button>
        </div>
      </section>
    </header>
  );
}
