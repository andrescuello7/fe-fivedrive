"use client";
import styles from "../register.module.css";

const Register = () => {

  return (
      <div className={styles.body_login}>
        <div className={styles.form}>
          <div>
            <p>Register!</p>
          </div>
          <div>
            <input name="username" type="text" placeholder="user name" />
            <input name="email" type="email" placeholder="email" />
            <input name="password" type="password" placeholder="password" />
          </div>
          <button>Sing In</button>
        </div>
      </div>
  );
};

export default Register;
