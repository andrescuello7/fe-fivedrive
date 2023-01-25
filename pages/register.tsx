import { useState } from 'react'
import Navbar from '../components/navbar/navbar';
import styles from './styles/register.module.css'
import useSession from '../hooks/useSession';

export default function Register() {
    const _con = useSession();

    return (
        <div>
            <Navbar />
            <div className={styles.body_login}>
                <div className={styles.form}>
                    <div>
                        <p>Welcome Sing Up!</p>
                    </div>
                    <div>
                        <input
                            name="username"
                            type="text"
                            placeholder='user name'
                            onChange={_con.onChange}
                            className={_con.valid ? 'border border-1 border-danger' : ""} />
                        <input
                            name="email"
                            type="email"
                            placeholder='email'
                            onChange={_con.onChange}
                            className={_con.valid ? 'border border-1 border-danger' : ""} />
                        <input
                            name="password"
                            type="password"
                            placeholder='password'
                            onChange={_con.onChange}
                            className={_con.valid ? 'border border-1 border-danger' : ""} />
                    </div>
                    <button onClick={_con.SingUp}>Sing In</button>
                </div>
            </div>
        </div>
    )
}