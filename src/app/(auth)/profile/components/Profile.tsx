"use client";

import { useEffect, useState } from "react";
import { FindAllPosts } from "services/posts.service";
import { ICommentModel } from "interfaces/ICommentModel";
import { IPosts } from "interfaces/IPostModel";
import Post from "@/app/components/posts/post";
import styles from "./profile.module.css";
import { Image } from "antd";

export default function Profile() {
  const [posts, setposts] = useState([]);

  const getPostsMethod = async () => {
    const response = await FindAllPosts();
    setposts(response);
  };

  useEffect(() => {
    getPostsMethod();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            <Image alt="" style={{borderRadius: "50%"}} src="https://storage.prompt-hunt.workers.dev/clhjx3gkw000pmg08c1b7wsii_1" />
          </div>
          <div className={styles.profileFullname}>4ndres_cuello</div>
        </div>
        <div className={styles.body_home}>
          <div className={styles.bar}></div>
          <div className={styles.body}>
            <div className={styles.posts}>
              {posts.map((item: { post: IPosts, comments: ICommentModel[] }, index: number) => (
                <Post
                  key={index}
                  post={item.post}
                  comments={item.comments}
                  getPostsMethod={getPostsMethod}
                />
              ))}
            </div>
          </div>
          <div className={styles.anuncie}></div>
        </div>
      </div>
    </>
  );
}
