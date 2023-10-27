/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Post from "@/app/components/posts/post";
import styles from "./dashboard.module.css";
import FormPost from "../../form/form";
import PostModel from "model/PostModel";

import { IPosts } from "interfaces/IPostModel";
import { ICommentModel } from "interfaces/ICommentModel";
import { CreatePost, FindAllPosts } from "services/posts.service";
import { ChangeEvent, useEffect, useState } from "react";
import { Image } from "antd";
import { photoDefault } from "@/values/constantDefault";
import { UserFactory } from "singleton/userFactory";
import UserModel from "model/UserModel";
import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import Link from "next/link";

export default function Dashboard() {
  const userFactory: UserFactory = UserFactory.Initial();
  const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);
  const tokenAuth = readFromLocalStorage(ContentTypeEnum.Token);

  const [posts, setposts] = useState([]);
  const [user, setuser] = useState<UserModel>();
  const [postModel, setPostModel] = useState<PostModel>();

  const createPostMethod = async () => {
    try {
      await CreatePost(postModel!);
      await getPostsMethod();
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostModel((form: any) => ({
      ...form,
      [name]: value,
    }));
  };

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
      <div className={styles.body_home}>
        {tokenAuth ?
          <ItemBar photo={user?.photo ?? photoDefault} />
          :
          <div className={styles.bar}></div>
        }
        <div className={styles.body}>
          <FormPost
            createPostMethod={createPostMethod}
            onChangeMethod={onChangeMethod}
          />
          <br />
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
    </>
  );
}

const ItemBar = ({ photo }: { photo: string }) => {
  return (
    <div className={styles.bar}>
      <div className={styles.barItemProfile}>
        <Image preview={false} alt="" style={{ borderRadius: "50%" }} src={photo} />
      </div>
      <Link href={'/'} className={styles.barItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`${styles.barItemIcon} bi bi-house`} viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
        </svg>
        <label className={styles.barItemLabel}>
          Inicio
        </label>
      </Link>
      <Link href={'/profile'} className={styles.barItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className={`${styles.barItemIcon} bi bi-person`} viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
        <label className={styles.barItemLabel}>
          Perfil
        </label>
      </Link>

      <Link href={'/'} className={styles.barItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.barItemIcon} bi bi-search`} viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <label className={styles.barItemLabel}>
          Buscar
        </label>
      </Link>
      <Link href={'/'} className={styles.barItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.barItemIcon} bi bi-chat-dots`} viewBox="0 0 16 16">
          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
        </svg>
        <label className={styles.barItemLabel}>
          Mensages
        </label>
      </Link>
      <Link href={'/'} className={styles.barItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.barItemIcon} bi bi-sliders`} viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
        </svg>
        <label className={styles.barItemLabel}>
          Configuracion
        </label>
      </Link>
    </div>
  );
}