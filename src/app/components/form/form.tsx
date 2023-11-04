/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { UserFactory } from "singleton/userFactory";
import styles from "./form.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import UserModel from "model/UserModel";
import { Image } from "antd";
import { photoDefault } from "@/values/constantDefault";
import UploadMethod from "@/utils/upload";
import axios from "axios";
import PostModel from "model/PostModel";

interface PostModelActions {
  onChangeMethod: (e: ChangeEvent<HTMLInputElement>) => void;
  createPostMethod: () => void;
  postModel: PostModel;

}

export default function FormPost({ createPostMethod, onChangeMethod, postModel }: PostModelActions) {
  const userFactory: UserFactory = UserFactory.Initial();
  const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);

  const [user, setuser] = useState<UserModel>();
  const [inputValue, setInputValue] = useState("");
  const { UploadSend } = UploadMethod();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChangeMethod(e);
  };

  const handleUploadClick = () => {
    createPostMethod();
    setInputValue("");
  };

  const uploadImage = async (e: any) => {
    const res = await UploadSend(e);
    postModel.setPhoto(res);
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
  }, []);

  return (
    <>
      <div className={styles.form_post}>
        <div style={{ display: "flex" }}>
          <Image preview={true} alt="" src={user?.photo ?? photoDefault} className={styles.photo} />
          <input onChange={e => handleInputChange(e)} value={inputValue} name="description" type="text" placeholder="Que estas pensando?" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
            </div>
            <div style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>
            </div>
            <div className={styles.file_input}>
              <input type="file" id="file" accept="image/*" onChange={uploadImage} />
              <label htmlFor="file">
                <span>
                  <i style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      style={{ color: "var(--default-background-LG0)" }}
                      fill="currentColor"
                      className="bi bi-camera"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                    <div style={{ width: "10px", height: "10px" }}></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      style={{ color: "var(--default-background-LG0)" }}
                      className="bi bi-card-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                  </i>
                </span>
              </label>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleUploadClick}>Subir</button>
          </div>
        </div>
      </div >
    </>
  );
}
