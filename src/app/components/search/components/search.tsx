import styles from "./search.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={styles.body_home}>
        <div className={styles.textField}>
          <input
            type="text"
            name="serach"
            className={styles.input}
            placeholder="Usuario..."
          />
          <button className={styles.button}>Buscar</button>
        </div>
      </div>
    </>
  );
}
