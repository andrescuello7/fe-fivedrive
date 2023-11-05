import { IPosts } from "interfaces/IPostModel";
import CommentModel from "@/model/CommentModel";
import UserModel from "@/model/UserModel";
import { ChangeEvent, useEffect, useState } from "react";
import { CreateComment } from "@/services/comments.service";
import { DeletePost } from "@/services/posts.service";

interface CommentModelActions {
    post: IPosts;
    user: UserModel | null;
    getPostsMethod: () => void;
}

export default function PostController({ getPostsMethod, post, user }: CommentModelActions){
    const [options, setOptions] = useState(false);
    const [description, setDescription] = useState("");
  
    const createCommentMethod = async () => {
      try {
        const commentModel = new CommentModel()
        commentModel.setDescription(description);
        commentModel.setPostId(post.id!);
        await CreateComment(commentModel);
        getPostsMethod();
        setDescription("")
      } catch (error) {
        console.error(error);
      }
    };
  
    const onChangeMethod = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setDescription(value)
    };
  
    useEffect(() => {
      const handleDocumentClick = (e: any) => {
        if (options && !e.target.closest("#options")) {
          setOptions(false);
        }
      };
      document.addEventListener("mousedown", handleDocumentClick);
      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }, [options]);
  
    const DeleteByIdMethod = async () => {
      try {
        await DeletePost(post.id!);
        getPostsMethod();
        setOptions(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getDate = (date: Date) => {
      let dateAt = new Date(date)
      const newDate = dateAt.toLocaleDateString('es-ES', {
        month: "long",
        day: "numeric",
        hour: '2-digit',
        minute: '2-digit',
      });
      return newDate;
    }
    return {
        post, 
        user,
        options,
        setOptions,
        description,
        setDescription,
        getDate,
        DeleteByIdMethod,
        onChangeMethod,
        createCommentMethod,
    };
}