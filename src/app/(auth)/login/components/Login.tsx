"use client";
import { Authentication } from "services/auth.service";
import styles from "./login.module.css";
import { ChangeEvent, useState } from "react";
import AuthModel from "model/AuthModel";
import { useRouter } from "next/navigation";

const Login = () => {
  const [authModel, setAuthModel] = useState<AuthModel>();
  const router = useRouter()

  const AuthenticationMethod = async () => {
    try {
      const response = await Authentication(authModel!);
      if (!response) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthModel((prevAuthModel: any) => ({
      ...prevAuthModel,
      [name]: value,
    }));
  };

  return (
    <div className={styles.body_login}>
      <div className={styles.form}>
        <p className={styles.title}>FIVEDRIVE</p>
        <p>Correo electrónico</p>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="Correo electrónico"
          name="email"
          type="email"
          className={styles.textField}
        />
        <p>Contraseña</p>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="Contrasena"
          name="password"
          type="password"
          className={styles.textField}
        />
        <button onClick={AuthenticationMethod}>Iniciar Sesion</button>
        <div>
          <br />
          <a href="">Olvidé mi contraseña</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
