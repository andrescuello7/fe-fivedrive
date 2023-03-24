import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
      <div className={styles.body_navbar}>
        <div className={styles.logo_navbar}>
          <div>♟</div>
        </div>
        <div className={styles.items_navbar}>
          <div className="pt-3">
            <p>Home</p>
          </div>
          <div className="pt-3">
            <p>About</p>
          </div>
          <div className="pt-3">
            <p>Profile</p>
          </div>
        </div>
        <div className={styles.search_navbar}>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.logo_navbar}>
          <Link href={``}>
            <button>Login</button>
          </Link>
          <Link href={``}>
            <button>Register</button>
          </Link>
        </div>
      </div>
  );
}
