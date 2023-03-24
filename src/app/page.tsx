import Navbar from "./components/navbar/navbar";
import styles from "./home.module.css";

export default async function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.body_home}>
      <p>Hola mundo</p>
    </div>
    </>
  );
}
