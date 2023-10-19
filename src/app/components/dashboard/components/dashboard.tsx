"use client";

import Post from "@/app/components/posts/post";
import styles from "./dashboard.module.css";
import FormPost from "../../form/form";
import { CreatePost, FindAllPosts } from "services/posts.service";
import { ChangeEvent, useEffect, useState } from "react";
import PostModel from "model/PostModel";

export default function Dashboard() {
  const [posts, setposts] = useState([]);
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
                item={{
                  description: item.description,
                  id: item.id,
                  photo: item.photo,
                  user: item.user,
                  title: item.title
                }}
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
