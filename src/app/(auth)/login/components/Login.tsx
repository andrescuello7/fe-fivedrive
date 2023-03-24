"use client";

import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.body_login}>
      <div className={styles.form}>
        <p className={styles.title}>FIVEDRIVE</p>
        <p>Correo electrónico</p>
        <input
          id="outlined-controlled"
          placeholder="Correo electrónico"
          name="email"
          type="email"
          className={styles.textField}
        />
        <p>Contraseña</p>
        <input
          id="outlined-controlled"
          placeholder="Contrasena"
          name="password"
          type="password"
          className={styles.textField}
        />
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Iniciar Sesion
        </button>
        <div>
          <br />
          <a href="">Olvidé mi contraseña</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
