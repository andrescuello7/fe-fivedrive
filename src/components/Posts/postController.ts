import { IPosts } from "interfaces/IPostModel";
import CommentModel from "@/model/CommentModel";
import UserModel from "@/model/UserModel";
import { ChangeEvent, useEffect, useState } from "react";
import { CreateComment } from "@/services/comments.service";
import { DeletePost, UpdatePost } from "@/services/posts.service";
import PostModel from "@/model/PostModel";

interface CommentModelActions {
    post: IPosts;
    user: UserModel | null;
    getPostsMethod: () => void;
}

export default function PostController({ getPostsMethod, post, user }: CommentModelActions){
    const [options, setOptions] = useState(false);
    const [edit, setedit] = useState(false);
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
  
    const onChangeMethod = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      console.log(e);
      
      setDescription(value)
    };

    const saveEdit = async () => {
      const postModel = new PostModel();
      postModel.setId(post.id);
      postModel.setDescription("Hola mundo");
      await UpdatePost(postModel);
      getPostsMethod();
      // setDescription("")
      setedit(false);
    }
  
    useEffect(() => {
      if (edit && options) {
        setedit(true);
        setOptions(false);
      }
      const handleDocumentClick = (e: any) => {
        if (options && !e.target.closest("#options")) {
          setOptions(false);
          setedit(false);
        }
      };
      document.addEventListener("mousedown", handleDocumentClick);
      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }, [options, edit]);
  
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
        edit,
        post, 
        user,
        setedit,
        saveEdit,
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