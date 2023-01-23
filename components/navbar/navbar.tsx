import { useState } from "react";
import styles from './navbar.module.css'
import Link from "next/link";
import { getItem } from "../../utils/localStorage";
import { sessionFinished } from "../../utils/session";
import { PageNames } from "../../enums/page_enum";

export default function Navbar() {
    const [navbar, setNavbar] = useState(styles.dnone);
    return (
        <div>
            <div className={styles.body_navbar}>
                <div className={styles.logo_navbar}>
                    <div><img src="https://cdn-icons-png.flaticon.com/512/6528/6528597.png" className="w-100 rounded-circle p-2"/></div>
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
                        <Link href={`${PageNames.LOGIN}`}>
                            <div className='d-flex' onClick={sessionFinished}>
                                <img src="https://avatars.githubusercontent.com/u/72234490?v=4" className="w-100 rounded-circle"/>
                            </div>
                        </Link>
                    </div>
                    :
                    <div>
                        <Link href={`${PageNames.LOGIN}`}>
                            <button>
                                Sing In
                            </button>
                        </Link>
                        <Link href={`${PageNames.REGISTER}`}>
                            <button>
                                Sing Up
                            </button>
                        </Link>
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