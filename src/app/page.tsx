import Navbar from "./components/navbar/navbar";
import styles from "./home.module.css";

export default async function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.body_home}>
      <div>
        <input type="text" className={styles.input} placeholder="Buscar..." />
      </div>
    </div>
    </>
  );
}
