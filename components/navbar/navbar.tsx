import { useState } from "react";
import styles from './navbar.module.css'
import Link from "next/link";
import { getItem } from "../../utils/localStorage";
import { sessionFinished } from "../../utils/session";
import { PageNames } from "../../router/page_enum";

export default function Navbar() {
    const [navbar, setNavbar] = useState(styles.dnone);
    return (
        <div>
            <div className={styles.body_navbar}>
                <div className={styles.logo_navbar}>
                    <div>🌀</div>
                </div>
                <div className={styles.items_navbar}>
                    <div>
                        <p>Pull request</p>
                    </div>
                    <div>
                        <p>Issues</p>
                    </div>
                    <div>
                        <p>Explore</p>
                    </div>
                </div>
                <div className={styles.search_navbar}>
                    <input type="text" placeholder='Search or jump to' />
                </div>
                {getItem("token") != undefined ?
                    <div className={styles.logo_navbar}>
                        <div className='d-flex' onClick={sessionFinished}>
                            <Link href="/login">
                                🤦‍♂️
                            </Link>
                        </div>
                    </div>
                    :
                    <div>
                        <button>
                            <Link href={`${PageNames.LOGIN}`}>
                                Sing In
                            </Link>
                        </button>
                        <button>
                            <Link href={`${PageNames.REGISTER}`}>
                                Sing Up
                            </Link>
                        </button>
                    </div>
                }
            </div>
            <div className={styles.body_responsive_navbar}>
                <div onClick={() => setNavbar(navbar == styles.dnone ? styles.dblock : styles.dnone)} className={styles.logo_navbar}>
                    <div>🌀</div>
                </div>
                <div className={navbar}>
                    <div className={styles.items_navbar}>
                        <div>
                            <p>Profile</p>
                        </div>
                        <div>
                            <p>Pull request</p>
                        </div>
                        <div>
                            <p>Issues</p>
                        </div>
                        <div>
                            <p>Explore</p>
                        </div>
                    </div>
                    <div className={styles.search_navbar}>
                        <input type="text" placeholder='Search or jump to' />
                    </div>
                </div>
            </div>
        </div>
    )
}