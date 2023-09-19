"use client";
import { ChangeEvent, useState } from "react";
import styles from "./register.module.css";
import UserModel from "model/UserModel";
import { useRouter } from "next/navigation";
import { createUsers } from "services/users.service";

const Register = () => {
  const router = useRouter()
  const [userModel, setUserModel] = useState<UserModel>();

  const CreateUserMethod = async () => {
    try {
      const response = await createUsers(userModel!);
      console.log({response});
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };
  
  const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserModel((prevAuthModel: any) => ({
      ...prevAuthModel,
      [name]: value,
    }));
  };
  return (
    <div className={styles.body_login}>
      <div className={styles.form}>
        <p className={styles.title}>FIVEDRIVE</p>
        <p>Usuario</p>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="JohnSmith7"
          name="fullname"
          type="text"
          className={styles.textField}
        />
        <p>Correo electrónico</p>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="john@example.com"
          name="email"
          type="email"
          className={styles.textField}
        />
        <p>Contraseña</p>
        <input
          onChange={(e) => onChangeMethod(e)}
          placeholder="*************"
          name="password"
          type="password"
          className={styles.textField}
        />
        <button onClick={CreateUserMethod}>
          Registrarme
        </button>
      </div>
    </div>
  );
};

export default Register;
