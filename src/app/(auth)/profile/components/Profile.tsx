/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { FindAllPosts } from "services/posts.service";
import { ICommentModel } from "interfaces/ICommentModel";
import { IPosts } from "interfaces/IPostModel";
import Post from "@/app/components/posts/post";
import styles from "./profile.module.css";
import { Image } from "antd";
import { UserFactory } from "../../../../../singleton/userFactory";
import UserModel from "model/UserModel";
import { photoDefault } from "@/values/constantDefault";
import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";

export default function Profile() {
  const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);
  const userFactory: UserFactory = UserFactory.Initial();
  const [posts, setposts] = useState([]);
  const [user, setuser] = useState<UserModel>();

  const getPostsMethod = async () => {
    const response = await FindAllPosts();
    setposts(response);
  };

  useEffect(() => {
    if (userFactory.getUserModel()) {
      setuser(userFactory.getUserModel())
    }

    if (userJsonBuffer) {
      const buffer = atob(userJsonBuffer);
      const user = JSON.parse(buffer);

      if (userFactory.getUserModel().photo) {
        setuser(userFactory.getUserModel());
      } else if (user) {
        setuser(user);
      }
    }
    getPostsMethod();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div className={styles.profile}
          style={user?.cover ?
            { background: `url(${user?.cover})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }
            :
            { background: "rgb(26, 27, 32)" }
          }>
          <div className={styles.profilePhoto}>
            <Image alt="" style={{ borderRadius: "50%" }} src={user?.photo ?? photoDefault} />
          </div>
          <div className={styles.profileFullname}>{user?.username ?? ""}</div>
        </div>
        <div className={styles.body_home}>
          <div className={styles.bar}></div>
          <div className={styles.body}>
            <div className={styles.posts}>
              {posts.map((item: { post: IPosts }, index: number) => (
                <Post
                  key={index}
                  post={item.post}
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
