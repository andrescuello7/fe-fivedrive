"use client";
import { ChangeEvent, useState } from "react";
import styles from "./register.module.css";
import UserModel from "@/model/UserModel";
import { useRouter } from "next/navigation";
import { createUsers } from "@/services/users.service";
import { Button } from "antd";

const Register = () => {
  const router = useRouter();
  const [userModel, setUserModel] = useState<UserModel>();
  const [repeetPassword, setRepeetPassword] = useState('');
  const [validation, setValidation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const CreateUserMethod = async () => {
    setValidation(false)
    setLoading(true)
    try {
      if (userModel?.password !== repeetPassword && userModel?.username !== null && userModel?.email !== null) {
        throw new Error("Error creating user");
      }
      const response = await createUsers(userModel!);
      if (response) {
        router.push("/login");
      }
    } catch (error) {
      console.error({error});
      setValidation(true)
    }
    setLoading(false)
  };

  const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== 'repeetPassword') {
      setUserModel((prevAuthModel: any) => ({
        ...prevAuthModel,
        id: 0,
        [name]: value,
      }));
    } 
    setRepeetPassword(value)
  };

  return (
    <div className={styles.body_login}>
      <div className={styles.form}>
        <p className={styles.title}>Firedrive</p>
        <label>Usuario</label>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="John_Smith"
          name="username"
          type="text"
          className={styles.textField}
        />
        <label>Correo electrónico</label>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="john@fivedrive.com"
          name="email"
          type="email"
          className={styles.textField}
        />
        <label>Contraseña</label>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="***********"
          name="password"
          type="password"
          className={styles.textField}
        />
        <label>Repetir Contraseña</label>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="***********"
          name="repeetPassword"
          type="password"
          className={styles.textField}
        />
        {validation ? <div className={styles.errorDanger}>Error, intente nuevamente</div> : <></>}
        <Button loading={loading} onClick={CreateUserMethod}>Registrarme</Button>
      </div>
    </div>
  );
};

export default Register;
