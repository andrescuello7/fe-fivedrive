/* eslint-disable react-hooks/exhaustive-deps */

import UserModel from "@/model/UserModel";
import PostModel from "@/model/PostModel";
import { CreatePost, FindAllPosts } from "@/services/posts.service";
import { ChangeEvent, useEffect, useState } from "react";
import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import { GetAuthentication } from "@/services/auth.service";

export default function DashboardController(){
    const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);
    const tokenAuth = readFromLocalStorage(ContentTypeEnum.Token);
  
    const [posts, setposts] = useState([]);
    const [user, setuser] = useState<UserModel>();
    const postModel = new PostModel();
  
    const createPostMethod = async () => {
      try {
        await CreatePost(postModel);
        await getPostsMethod();
      } catch (error) {
        console.error(error);
      }
    };
  
    const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      postModel.setDescription(value);
      postModel.setCreateAt();
      postModel.setUser(user?.id!)
    };
  
    const getPostsMethod = async () => {
      const posts = await FindAllPosts();
      setposts(posts);
      if (tokenAuth) {
        const user = await GetAuthentication(tokenAuth);
        setuser(user);
      }
    };
  
    useEffect(() => {
      getPostsMethod();
    }, []);
  
    return {
        user,
        posts,
        postModel,
        tokenAuth,
        userJsonBuffer,
        getPostsMethod,
        onChangeMethod,
        createPostMethod,
    };
}