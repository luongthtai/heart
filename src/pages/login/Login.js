import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import handleLogin from "../../redux/action/actionLogin";
import styles from "./login.module.scss";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const dispatch = useDispatch()

  const statusLogin = useSelector(state => state.isLogin.isLogin)

  return (
    <div id={styles.login}>
      {statusLogin ? <Navigate to="/" /> : ""}

      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className={styles.title}>Đăng nhập mới vào được nha bạn Bông</h2>

        <label id={styles.yourName}>Tên đăng nhập:</label>
        <input
          type="text"
          id={styles.name}
          placeholder="Tên: Hoa, Bông, ..."
          required
        />

        <label id={styles.password}>Mật khẩu:</label>
        <input
          type="password"
          id={styles.pass}
          placeholder="VD: yeuanhlam, nhoanhghe, ..."
          required
        />

        <button onClick={() => dispatch(handleLogin())}>Login</button>
      </form>
    </div>
  );
}
