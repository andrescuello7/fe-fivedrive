import PostModel from "../../model/post_model";
import styles from './post.module.css'
import Image from 'next/image'
import { LenguageNames } from "../../enums/lenguage_enum";

export default function Post(item?: PostModel) {
    const src = item?.photo ?? "https://avatars.githubusercontent.com/u/72234490?v=4";
    const color = item?.lenguage != undefined ?
        item?.lenguage == LenguageNames.PYTHON ?
            "bg-info" : item?.lenguage == LenguageNames.HTML ?
                "bg-danger" : item?.lenguage == LenguageNames.JAVASCRIPT ?
                    "bg-warnnig" : item?.lenguage == LenguageNames.TYPESCRIPT ?
                        "bg-primary" : item?.lenguage == LenguageNames.CSS ?
                            "bg-info" : item?.lenguage == LenguageNames.EJS ?
                                "bg-success" : item?.lenguage == LenguageNames.DART ?
                                    "bg-danger" : "bg-warnnig" : "bg-primary";

    return (
        <div className={styles.body_post}>
            <div className={styles.label_post}>
                <div>
                    <Image
                        alt={""}
                        width={100}
                        height={40}
                        loader={() => src}
                        src={src}
                        className="w-100 rounded-circle"
                    />
                </div>
                <p>{item?.user ?? ""}</p>
            </div>
            <div className={styles.info_post}>
                <h4>{item?.title ?? ""}</h4>
                <p>{item?.label ?? ""}</p>
                <div>
                    <div className={color}></div>
                    <p className="m-0">{item?.lenguage ?? ""}</p>
                </div>
            </div>
        </div>
    )
}