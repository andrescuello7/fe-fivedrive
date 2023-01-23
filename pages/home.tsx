import Navbar from '../components/navbar/navbar';
import Post from '../components/post/post';
import styles from '../styles/home.module.css'
import useInfo from '../hooks/useInfo';

export default function Home() {
    const _con = useInfo();
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
                        {_con.mapPost}
                    </section>
                </div>
                <div className={styles.explore_home}>
                </div>
            </div>
        </div>
    )
}