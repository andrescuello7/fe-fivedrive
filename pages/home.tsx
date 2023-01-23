import Navbar from '../components/navbar/navbar';
import Post from '../components/post/post';
import styles from '../styles/home.module.css'
import { sessionToken } from "../utils/session";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        sessionToken();
    }, [])
    return (
        <div className={styles.body_home}>
            <Navbar />
            <div className={styles.info_home}>
                <div className={styles.repos_home}>
                    <div>
                        <p>Repositories</p>
                        <button>+ New</button>
                    </div>
                    <input type="text" placeholder='Fied a repository...' />
                </div>
                <div className={styles.posts_home}>
                    <p>Your <b>Feed</b></p>
                    <br />
                    <section>
                        <Post
                            lenguage='typescript'
                            photo='🤦‍♂️'
                            title='api-server'
                            user='andrescuello7'
                            label='Get running space of job for client and conection of api...'
                        />
                        <Post
                            lenguage='typescript'
                            photo='🤦‍♂️'
                            title='api-server'
                            user='andrescuello7'
                            label='Get running space of job for client and conection of api...'
                        />
                    </section>
                </div>
                <div className={styles.explore_home}>
                </div>
            </div>
        </div>
    )
}