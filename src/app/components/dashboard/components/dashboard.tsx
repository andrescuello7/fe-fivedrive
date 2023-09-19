/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Post from "@/app/components/posts/post";
import styles from "./dashboard.module.css";
import FormPost from "../../form/form";
import { createPosts, getPosts } from "services/posts.service";
import { ChangeEvent, useEffect, useState } from "react";
import PostModel from "model/PostModel";

export default function Dashboard() {
  const [posts, setposts] = useState([]);
  const [postModel, setPostModel] = useState<PostModel>();

  const createPostMethod = async () => {
    try {
      await createPosts(postModel!);
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
    const response = await getPosts();
    setposts(response);
  };

  useEffect(() => {
    getPostsMethod();
  }, []);

  return (
    <>
      <div className={styles.body_home}>
        <div className={styles.bar}></div>
        <div className={styles.body}>
          <FormPost
            createPostMethod={createPostMethod}
            onChangeMethod={onChangeMethod}
          />
          <br />
          <div className={styles.posts}>
            {posts.map((item: PostModel, index: number) => (
              <Post
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                photo={item.photo}
                user={item.user}
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
