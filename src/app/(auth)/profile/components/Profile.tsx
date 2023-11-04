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
import UploadMethod from "@/utils/upload";
import { updateUsers } from "services/users.service";

export default function Profile() {
  const tokenAuth = readFromLocalStorage(ContentTypeEnum.Token);
  const [user, setuser] = useState<UserModel>();
  const [posts, setposts] = useState([]);
  const { UploadSend } = UploadMethod();

  const getUserMethod = async () => {
    const user = await GetAuthentication(tokenAuth);
    setuser(user);
    setposts(user.posts ?? []);
  };

  const uploadImage = async (event: any, option: boolean) => {
    try {
      const userDate = new UserModel()
      const upload = await UploadSend(event);
      userDate.id = user?.id;
      userDate.email = user?.email;
      userDate.username = user?.username;
      userDate.password = user?.password;
      if (option) {
        userDate.cover = upload;
        userDate.photo = user?.photo;
      } else {
        userDate.photo = upload;
        userDate.cover = user?.cover;
      }
      await updateUsers(userDate);
      await getUserMethod();
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getUserMethod();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <input type="file" id="cover" accept="image/*" onChange={event => uploadImage(event, true)} />
        <label htmlFor="cover">
          <div className={styles.profile} style={user?.cover ?
            { background: `url(${user?.cover})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }
            : { background: "rgb(26, 27, 32)" }}
          >
            <div className={styles.profilePhoto}>
              <div className={styles.file_input}>
                <input type="file" id="profile" accept="image/*" onChange={event => uploadImage(event, false)} />
                <label htmlFor="profile">
                  <span>
                    <i style={{ display: "flex" }}>
                      <Image preview={false} alt="" style={{ borderRadius: "50%" }} src={user?.photo ?? photoDefault} />
                    </i>
                  </span>
                </label>
              </div>
            </div>
            <div className={styles.profileFullname}>{user?.username ?? ""}</div>
          </div>
        </label>
        <div className={styles.body_home}>
          <div className={styles.bar}></div>
          <div className={styles.body}>
            <div className={styles.posts}>
              {posts.length > 0 ?
                posts.map((item: IPosts, index: number) => (
                  <Post
                    user={user!}
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
