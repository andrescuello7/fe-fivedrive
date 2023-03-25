import Navbar from "./components/navbar/navbar";
import styles from "./home.module.css";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.body_home}>
        <div className={styles.title}>
          <div>Develop.Preview.Ship.</div>
        </div>
        <div className={styles.description}>
          <div>
            Vercel is the platform for frontend developers, providing the speed
            and reliability innovators need to create at the moment of
            inspiration.
          </div>
        </div>
        <div>
          <button className={styles.button}>Start Deploying</button>
          <button className={styles.button_outline}>Get a Demo</button>
        </div>
      </div>
    </>
  );
}
