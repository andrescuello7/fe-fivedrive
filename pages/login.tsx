import Navbar from '../components/navbar/navbar';
import useSession from '../hooks/useSession';
import styles from '../styles/login.module.css'

export default function Login() {
    const _con = useSession();
    return (
        <div>
            <Navbar />
            <div className={styles.body_login}>
                <div className={styles.form}>
                    <div>
                        <p>Welcome Sing In!</p>
                    </div>
                    <div>
                        <input
                            name="email"
                            type="text"
                            placeholder='email'
                            onChange={_con.onChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder='password'
                            onChange={_con.onChange}
                        />
                    </div>
                    <button onClick={_con.SingIn}>Sing In</button>
                </div>
            </div>
        </div>
    )
}