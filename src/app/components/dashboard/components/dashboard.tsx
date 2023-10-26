"use client";

import Post from "@/app/components/posts/post";
import styles from "./dashboard.module.css";
import FormPost from "../../form/form";
import PostModel from "model/PostModel";

import { IPosts } from "interfaces/IPostModel";
import { ICommentModel } from "interfaces/ICommentModel";
import { CreatePost, FindAllPosts } from "services/posts.service";
import { ChangeEvent, useEffect, useState } from "react";
import { UseMicrosoft } from "../../../../hooks/useMicrosoft";

export default function Dashboard() {
  const [posts, setposts] = useState([]);
  const [postModel, setPostModel] = useState<PostModel>();
  const { RefreshToken } = UseMicrosoft();

  const createPostMethod = async () => {
    try {
    // TODO i18n: Refresh Token
    //  const response = await RefreshToken();
    //  console.log({response});
     
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
            {posts.map((item: {post: IPosts, comments: ICommentModel[]}, index: number) => (
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
