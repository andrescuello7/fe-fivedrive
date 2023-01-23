import Link from "next/link";
import Image from 'next/image'
import styles from './navbar.module.css'

import { getItem } from "../../utils/localStorage";
import { useState } from "react";
import { PageNames } from "../../enums/page_enum";
import { sessionFinished } from "../../utils/session";

import Icon from '../../assets/icon.png'

export default function Navbar() {
    const [navbar, setNavbar] = useState(styles.dnone);
    let user = getItem('user') ?? "";
    let token = getItem("token") ?? "";
    return (
        <div className="bg-dark">
            <div className={styles.body_navbar}>
                <div className={styles.logo_navbar}>
                    <div>
                        ♟
                    </div>
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
                    <input
                        type="text"
                        placeholder='Search or jump to'
                    />
                </div>
                <div className={styles.logo_navbar}>
                    <Link href={`${PageNames.LOGIN}`}>
                        <button>
                            SingIn
                        </button>
                    </Link>
                    <Link href={`${PageNames.REGISTER}`}>
                        <button>
                            SingUp
                        </button>
                    </Link>
                    <Link href={`${PageNames.LOGIN}`}>
                        <button>
                            Salir
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.body_responsive_navbar}>
                <div onClick={() => setNavbar(navbar == styles.dnone ? styles.dblock : styles.dnone)} className={styles.logo_navbar}>
                    <div className={styles.logo_navbar}>
                        <div>
                            <Image
                                alt={""}
                                width={100}
                                height={100}
                                src={Icon}
                                className="w-100 rounded-circle p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className={navbar}>
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
                        <div>
                            <Link href={`${PageNames.LOGIN}`} className="text-decoration-none text-light">
                                <p>Salir</p>
                            </Link>
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