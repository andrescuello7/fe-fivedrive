"use client";
import { Authentication, GetAuthentication } from "@/services/auth.service";
import styles from "./login.module.css";
import { ChangeEvent, useState } from "react";
import AuthModel from "@/model/AuthModel";
import { useRouter } from "next/navigation";
import { saveToLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import UserModel from "@/model/UserModel";
import { UserFactory } from "../../../../../singleton/userFactory";
import { Button } from "antd";

const Login = () => {
  const [authModel, setAuthModel] = useState<AuthModel>();
  const [validation, setValidation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()

  // Login Method auth
  const AuthenticationMethod = async () => {
    const userFactory: UserFactory = UserFactory.Initial();
    setValidation(false)
    setLoading(true)
    try {
      const { token } = await Authentication(authModel!);
      if (token) {
        const auth = token.replace('Bearer ', '');
        const { cover, email, id, photo, username }: UserModel = await GetAuthentication(auth);

        userFactory.setUserModel({
          cover,
          email,
          id,
          photo,
          username
        });
        saveToLocalStorage({ key: ContentTypeEnum.Token, value: auth })
        router.push('/')
      }
    } catch (error) {
      setValidation(true)
      console.error({error});
    }
    setLoading(false)
  };

  // Onchange form validation of inputs
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
          placeholder="Contraseña"
          name="password"
          type="password"
          className={styles.textField}
        />
        {validation ? <div className={styles.errorDanger}>Error, intente nuevamente</div> : <></>}
        <Button loading={loading} onClick={AuthenticationMethod}>Iniciar Sesion</Button>
        <div>
          <br />
          <Link href={""}>Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
