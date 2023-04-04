import Post from "@/app/components/posts/post";
import styles from "./dashboard.module.css";
import FormPost from "./form/form";

export default function Dashboard() {
  return (
    <>
      <div className={styles.body_home}>
        <div className={styles.bar}></div>
        <div className={styles.body}>
          <FormPost />
          <br />
          <Post />
        </div>
        <div className={styles.anuncie}></div>
      </div>
    </>
  );
}
