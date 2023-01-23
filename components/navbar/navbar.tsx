import { useState } from "react";
import styles from './navbar.module.css'
import Link from "next/link";
import { getItem } from "../../utils/localStorage";
import { sessionFinished } from "../../utils/session";
import { PageNames } from "../../enums/page_enum";
import useInfo from "../../hooks/useInfo";
import Image from 'next/image'
import Icon from '../../assets/icon.png'

export default function Navbar() {
    const [navbar, setNavbar] = useState(styles.dnone);
    let user = getItem('user') ?? "";
    return (
        <div className="bg-dark">
            <div className={styles.body_navbar}>
                <div className={styles.logo_navbar}>
                    <div>
                        <Image
                            alt={""}
                            width={100}
                            height={100}
                            src="https://cdn-icons-png.flaticon.com/512/6528/6528597.png"
                            className="w-100 rounded-circle p-2"
                        />
                    </div>
                </div>
                {getItem("token") != undefined ?
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
                    :
                    <div className="w-50"></div>
                }
                {getItem("token") != undefined ?
                    <div className={styles.search_navbar}>
                        <input
                            type="text"
                            placeholder='Search or jump to'
                        />
                    </div>
                    :
                    <div className="w-25"></div>
                }
                {getItem("token") != undefined ?
                    <div className={styles.logo_navbar}>
                        <Link href={`${PageNames.LOGIN}`}>
                            <div className='d-flex' onClick={sessionFinished}>
                                <Image
                                    alt={""}
                                    width={100}
                                    height={100}
                                    src={user.avatar_url}
                                    className="w-100 rounded-circle"
                                />
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
                    <div className={styles.logo_navbar}>
                        <div>
                            <Image
                                alt={""}
                                width={100}
                                height={100}
                                src={user.avatar_url}
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