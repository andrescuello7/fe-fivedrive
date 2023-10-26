/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { readFromLocalStorage, removeLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [options, setOptions] = useState(false);
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

  const RemoveSession = () => {
    removeLocalStorage(ContentTypeEnum.Token)
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
        {!readFromLocalStorage(ContentTypeEnum.Token) ? <div className={styles.logo_navbar}>
          <Link href={`login`}>
            <button className={styles.buttonLogin}>Iniciar</button>
          </Link>
          <Link href={`register`}>
            <button className={styles.buttonRegister}>Registrarme</button>
          </Link>
        </div>
          :
          <div className={styles.logo_profile} onClick={() => setOptions(!options)}>
            <img style={{ borderRadius: "50%", height: "46px"  }} src="https://storage.prompt-hunt.workers.dev/clhjx3gkw000pmg08c1b7wsii_1" alt="" />
          </div>}
      </div>
      <div id="options" className={options ? styles.options : styles.optionsNone}>
        <Link href={`profile`}>
            <b style={{ color: "white" }}>Perfil</b>
        </Link>
        <Link href={``}>
            <b style={{ color: "white" }}>Configuraciones</b>
        </Link>
        <Link href={`login`} onClick={RemoveSession}>
            <b style={{ color: "red" }}>Cerrar Sesion</b>
        </Link>
      </div>
    </>
  );
}
