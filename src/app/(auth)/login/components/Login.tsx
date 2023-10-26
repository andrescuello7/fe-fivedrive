"use client";
import { Authentication } from "services/auth.service";
import styles from "./login.module.css";
import { ChangeEvent, useState } from "react";
import AuthModel from "model/AuthModel";
import { useRouter } from "next/navigation";
import { saveToLocalStorage } from "@/utils/localStorage";
import Link from "next/link";

const Login = () => {
  const [authModel, setAuthModel] = useState<AuthModel>();
  const router = useRouter()

  const AuthenticationMethod = async () => {
    try {
      const { token } = await Authentication(authModel!);
      if (token) {
        const auth = token.replace('Bearer ', '');
        saveToLocalStorage({ key: 'x-auth-token', value: auth })
        router.push('/')
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
        <p className={styles.title}>Firedrive</p>
        <p>Usuario</p>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="Usuario"
          name="username"
          type="text"
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
          <Link href={""}>Olvidé mi contraseña</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
