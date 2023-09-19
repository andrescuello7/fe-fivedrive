/* eslint-disable react/no-unescaped-entities */
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
            It's my platform. You can make posts and comment on posts from your
            friends and users, Update at another time...
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
