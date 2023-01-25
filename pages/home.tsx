import Navbar from '../components/navbar/navbar';
import styles from './styles/home.module.css'
import useInfo from '../hooks/useInfo';

export default function Home() {
    const _con = useInfo();
    return (
        <div className={styles.body_home}>
            <Navbar />
            <div className={styles.info_home}>
                <div className={`${styles.repos_home} sticky-top`}>
                    <div>
                        <p>Repositories</p>
                        <button>+ New</button>
                    </div>
                    <input
                        type="text"
                        onChange={_con.onSearch}
                        placeholder='Fied a repository...'
                    />
                    <section className={styles.repos_list}>
                        {_con.mapRepos}
                    </section>
                </div>
                <div className={styles.posts_home}>
                    <p>Your <b>Feed</b></p>
                    <br />
                    <section className='pb-4'>
                        {_con.mapPost}
                    </section>
                </div>
                <div className={styles.explore_home}>
                </div>
            </div>
        </div>
    )
}