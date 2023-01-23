import { useState } from "react";
import PostModel from "../../model/post_model";
import styles from './post.module.css'
import Image from 'next/image'

export default function Post(item?: PostModel) {
    return (
        <div className={styles.body_post}>
            <div className={styles.label_post}>
                <div>
                    <img
                        alt={""}
                        src={item?.photo ?? "https://avatars.githubusercontent.com/u/72234490?v=4"}
                        className="w-100 rounded-circle"
                    />
                </div>
                <p>{item?.user ?? ""}</p>
            </div>
            <div className={styles.info_post}>
                <h4>{item?.title ?? ""}</h4>
                <p>{item?.label ?? ""}</p>
                <br />
                <div>
                    <div></div>
                    <p>{item?.lenguage ?? ""}</p>
                </div>
            </div>
        </div>
    )
}