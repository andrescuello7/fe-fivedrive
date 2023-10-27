/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { readFromLocalStorage, removeLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import { useRouter } from "next/navigation";
import { Image } from "antd";
import { UserFactory } from "../../../../singleton/userFactory";
import { photoDefault } from "@/values/constantDefault";


export default function Navbar() {
  const userFactory: UserFactory = UserFactory.Initial();

  const [options, setOptions] = useState(false);
  const [photo, setPhoto] = useState(photoDefault);
  const [token, setToken] = useState();
  const router = useRouter()

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (options && !e.target.closest("#options")) {
        setOptions(false);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [options]);

  useEffect(() => {
    const authBearer = readFromLocalStorage(ContentTypeEnum.Token);
    const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);

    if (userJsonBuffer && authBearer) {
      const buffer = atob(userJsonBuffer);
      const user = JSON.parse(buffer);
      if (userFactory.getUserModel().photo) {
        setPhoto(userFactory.getUserModel().photo!);
      } else if (user.photo) {
        setPhoto(user.photo);
      }
    }

    setToken(authBearer);
  }, [])

  const RemoveSession = () => {
    removeLocalStorage(ContentTypeEnum.Token)
    removeLocalStorage(ContentTypeEnum.User)
    router.push('/login')
  }

  return (
    <>
      <div className={styles.body_navbar}>
        <div className={styles.logo_navbar}>
          <Link href={`/`}>
            <div className={styles.title}>Firedrive</div>
          </Link>
        </div>
        <div className={styles.items_navbar}>
        </div>
        {!token ?
          <div className={styles.logo_navbar}>
            <Link href={`login`}>
              <button className={styles.buttonLogin}>Iniciar</button>
            </Link>
            <Link href={`register`}>
              <button className={styles.buttonRegister}>Registrarme</button>
            </Link>
          </div>
          :
          <div className={styles.logo_profile} onClick={() => setOptions(!options)}>
            <Image preview={false} style={{ borderRadius: "50%", height: "46px" }} src={photo} alt="" />
          </div>
        }
      </div>
      <div id="options" className={options ? styles.options : styles.optionsNone}>
        <Link style={{ marginBottom: "5px" }} href={`profile`}>
          <b style={{ color: "white" }}>Perfil</b>
        </Link>
        <Link style={{ marginBottom: "5px" }} href={``}>
          <b style={{ color: "white" }}>Configuraciones</b>
        </Link>
        <Link href={`login`} onClick={RemoveSession}>
          <b style={{ color: "red" }}>Cerrar Sesion</b>
        </Link>
      </div>
    </>
  );
}
