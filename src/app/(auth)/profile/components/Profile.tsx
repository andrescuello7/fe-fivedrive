/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { IPosts } from "interfaces/IPostModel";
import Post from "@/app/components/posts/post";
import styles from "./profile.module.css";
import { Image } from "antd";
import { UserFactory } from "../../../../../singleton/userFactory";
import UserModel from "model/UserModel";
import { photoDefault } from "@/values/constantDefault";
import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import { GetAuthentication } from "services/auth.service";

export default function Profile() {
  const tokenAuth = readFromLocalStorage(ContentTypeEnum.Token);
  const userFactory: UserFactory = UserFactory.Initial();
  const [user, setuser] = useState<UserModel>();
  const [posts, setposts] = useState([]);

  const getUserMethod = async () => {
    const user = await GetAuthentication(tokenAuth);
    setuser(user);
    setposts(user.posts ?? []);
  };

  useEffect(() => {
    if (userFactory.getUserModel()) {
      setuser(userFactory.getUserModel())
    }
    getUserMethod();
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
              {posts.length > 0 ?
                posts.map((item: IPosts, index: number) => (
                  <Post
                    key={index}
                    post={item}
                    getPostsMethod={getUserMethod}
                  />
                )) : <></>}
            </div>
          </div>
          <div className={styles.anuncie}></div>
        </div>
      </div>
    </>
  );
}
