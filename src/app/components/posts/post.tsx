import { IPosts } from "interfaces/IPostModel";
import styles from "./post.module.css";
import { CreateComment } from "services/comments.service";
import { ChangeEvent, useEffect, useState } from "react";
import { DeletePost } from "services/posts.service";
import CommentModel from "model/CommentModel";
import { ICommentModel } from "interfaces/ICommentModel";

interface CommentModelActions {
  post: IPosts;
  getPostsMethod: () => void;
}

export default function Post({ getPostsMethod, post }: CommentModelActions) {
  const [options, setOptions] = useState(false);
  const [description, setDescription] = useState("");

  const createPostMethod = async () => {
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

  return (
    <div className={styles.post_body}>
      <div id="options" className={options ? styles.options : styles.optionsNone}>
        <div>
          Ver Perfil
        </div>
        <div>
          Editar
        </div>
        <div style={{ color: "red" }} onClick={DeleteByIdMethod}>
          <b>Eliminar</b>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={styles.photo_user}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div>{post?.id ?? ""}</div>
          <p style={{ color: "#b1b2ba31", display: "flex" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              style={{ marginRight: "2px", marginTop: "2px", color: "var(--default-background-LGO)" }}
              className="bi bi-stopwatch"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
            </svg>
            <i>12 minutes</i>
          </p>
        </div>
        <div style={{ marginTop: "10px" }} onClick={() => setOptions(!options)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            style={{ color: "var(--default-background-LGO)" }}
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <p>{post.description}</p>
      </div>

      {post.comments.length > 0 ?
        post.comments.map((item: { description: string }, i: number) => (
          <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <div className={styles.photo_comment}></div>
            <div>{item.description}</div>
          </div>)) : <></>}

      <div style={{ display: "flex" }}>
        <div className={styles.photo_comment}></div>
        <input type="text" onChange={onChangeMethod} value={description} name="description" placeholder="Comentario" />
        <button onClick={createPostMethod}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send"
            style={{ color: "var(--default-background-LG0)" }}
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
