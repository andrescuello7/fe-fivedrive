/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { Image } from "antd";

export default function Navbar() {
  const [options, setOptions] = useState(false);

  useEffect(() => {
    console.log({ options });

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
        {false ? <div className={styles.logo_navbar}>
          <Link href={`login`}>
            <button className={styles.buttonLogin}>Iniciar</button>
          </Link>
          <Link href={`register`}>
            <button className={styles.buttonRegister}>Registrarme</button>
          </Link>
        </div>
          :
          <div className={styles.logo_profile} onClick={() => setOptions(!options)}>
            <img style={{ borderRadius: "50%", height: "50px"  }} src="https://storage.prompt-hunt.workers.dev/clhjx3gkw000pmg08c1b7wsii_1" alt="" />
          </div>}
      </div>
      <div id="options" className={options ? styles.options : styles.optionsNone}>
        <Link href={`profile`}>
            Profile
        </Link>
        <Link href={`about`}>
            About
        </Link>
        <Link href={``}>
            Contacto
        </Link>
        <Link href={``}>
            Configuraciones
        </Link>
      </div>
    </>
  );
}
