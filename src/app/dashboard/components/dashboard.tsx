import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={styles.body_home}>
        <div className={styles.textField}>
          <input
            type="text"
            name="serach"
            className={styles.input}
            placeholder="Buscar..."
          />
          <button className={styles.button}>Add new..</button>
        </div>
      </div>
    </>
  );
}
