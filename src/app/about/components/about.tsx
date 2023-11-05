/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import styles from "./about.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={styles.body_home}>
        <div className={styles.title}>
          <div>Welcome to Firedrive</div>
        </div>
        <div className={styles.description}>
          <div>
            Welcome to <b>Firedrive</b> This is an online directory where you can communicate and post messages between your acquaintances in the community
          </div>
        </div>
        <div>
          <Link href={`/login`}>
            <button className={styles.button}>Start</button>
          </Link>
          <Link href={`/register`}>
            <button className={styles.button_outline}>Get a Demo</button>
          </Link>
        </div>
      </div>
    </>
  );
}
