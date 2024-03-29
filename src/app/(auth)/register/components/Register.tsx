"use client";
import { ChangeEvent, useState } from "react";
import styles from "./register.module.css";
import UserModel from "@/model/UserModel";
import { useRouter } from "next/navigation";
import { createUsers } from "@/services/users.service";

const Register = () => {
  const router = useRouter();
  const [userModel, setUserModel] = useState<UserModel>();

  const CreateUserMethod = async () => {
    try {
      if (userModel?.password !== userModel?.repeetPassword && userModel?.username !== null && userModel?.email !== null) {
        throw new Error("Error creating user");
      }
      const response = await createUsers(userModel!);
      if (response) {
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserModel((prevAuthModel: any) => ({
      ...prevAuthModel,
      id: 0,
      [name]: value,
    }));
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
        <button onClick={CreateUserMethod}>Registrarme</button>
      </div>
    </div>
  );
};

export default Register;
