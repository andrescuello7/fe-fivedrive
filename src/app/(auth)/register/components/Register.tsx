"use client";
import styles from "../register.module.css";

const Register = () => {
  return (
    <div className={styles.body_login}>
      <div className={styles.form}>
        <p className={styles.title}>FIVEDRIVE</p>
        <p>Usuario</p>
        <input
          id="outlined-controlled"
          placeholder="JohnSmith7"
          name="username"
          type="text"
          className={styles.textField}
        />
        <p>Correo electrónico</p>
        <input
          id="outlined-controlled"
          placeholder="john@example.com"
          name="email"
          type="email"
          className={styles.textField}
        />
        <p>Contraseña</p>
        <input
          id="outlined-controlled"
          placeholder="*************"
          name="password"
          type="password"
          className={styles.textField}
        />
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Registrarme
        </button>
      </div>
    </div>
  );
};

export default Register;
