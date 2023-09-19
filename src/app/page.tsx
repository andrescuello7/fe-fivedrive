/* eslint-disable react/no-unescaped-entities */
import Navbar from "./components/navbar/navbar";
import styles from "./home.module.css";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.body_home}>
        <div className={styles.title}>
          <div>Welcome to Social-Network</div>
        </div>
        <div className={styles.description}>
          <div>
            It's my platform. You can make posts and comment on posts from your friends and users, Update at another time...
          </div>
        </div>
        <div>
          <button className={styles.button}>Start</button>
          <button className={styles.button_outline}>Get a Demo</button>
        </div>
      </div>
    </>
  );
}
