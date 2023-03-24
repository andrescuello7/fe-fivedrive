import styles from "./dashboard.module.css";

export default function Dashboard() {
  // const handleChange = (e: any) => {
  //   console.log(e.target.value);
  // };
  return (
    <>
      <div className={styles.body_home}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="serach"
            className={styles.input}
            // onChange={handleChange}
            placeholder="Buscar..."
          />
          <button className={styles.button}>Search</button>
        </div>
      </div>
    </>
  );
}
