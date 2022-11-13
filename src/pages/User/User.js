import React from "react";
import { Link } from "react-router-dom";
import styles from "./user.module.scss";

export default function User() {
  return (
    <div id={styles.user}>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <div id={styles.avatar}>
        <img
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/279740208_3228981337347700_5003432957354195948_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JYvwMqduuykAX9dyMIt&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBMuXsKYDMxeeHrLZQNGlTwQ5lQuXoiF8gvI9LuuMWsZA&oe=63753C46"
          alt="avatar"
        />
        <p>Nguyễn Thị Thanh Heo</p>
      </div>

      <div id={styles.info}>
        <p>"Chua lam kip"</p>
      </div>
    </div>
  );
}
