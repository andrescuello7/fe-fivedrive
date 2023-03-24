"use client";

import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.body_login}>
      <div className={styles.form}>
        <div>
          <p>Login!</p>
        </div>
        <div>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
        </div>
        <button>Sing In</button>
      </div>
    </div>
  );
};

export default Login;
