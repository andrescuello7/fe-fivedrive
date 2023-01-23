import { useState } from "react";
import PostModel from "../../model/post_model";
import styles from './post.module.css'

export default function Post(item?: PostModel) {
    return (
        <div className={styles.body_post}>
            <div className={styles.label_post}>
                <div>{item?.photo ?? ""}</div>
                <p>{item?.user ?? ""}</p>
            </div>
            <div className={styles.info_post}>
                <h4>{item?.title ?? ""}/{item?.lenguage ?? ""}</h4>
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