"use client";

import Post from "@/app/components/posts/post";
import styles from "./dashboard.module.css";
import FormPost from "./form/form";
import { getPosts } from "services/posts.service";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    postMethod();
  }, []);

  const postMethod = async () => {
    const response = await getPosts();
    setposts(response);
  };
  return (
    <>
      <div className={styles.body_home}>
        <div className={styles.bar}></div>
        <div className={styles.body}>
          <FormPost />
          <br />
          {posts.map((item: any, index: number) => (
            <Post
              key={index}
              title="title"
              description="description"
              userId="skdgshdg"
            />
          ))}
        </div>
        <div className={styles.anuncie}></div>
      </div>
    </>
  );
}
