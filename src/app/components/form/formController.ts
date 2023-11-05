/* eslint-disable react-hooks/exhaustive-deps */
import { readFromLocalStorage } from "@/utils/localStorage";
import UploadMethod from "@/utils/upload";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import PostModel from "model/PostModel";
import UserModel from "model/UserModel";
import { ChangeEvent, useEffect, useState } from "react";
import { UserFactory } from "singleton/userFactory";

interface PostModelActions {
    onChangeMethod: (e: ChangeEvent<HTMLInputElement>) => void;
    createPostMethod: () => void;
    postModel: PostModel;
  
  }

export default function FormController({ createPostMethod, onChangeMethod, postModel }: PostModelActions) {
    const userFactory: UserFactory = UserFactory.Initial();
    const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);
  
    const [user, setuser] = useState<UserModel>();
    const [inputValue, setInputValue] = useState("");
    const [loading, setloading] = useState(false);
    const [enable, setenable] = useState(true);
    const { UploadSend } = UploadMethod();
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setenable(false);
      setInputValue(e.target.value);
      onChangeMethod(e);
    };
  
    const handleUploadClick = () => {
      if (inputValue !== "") {
        createPostMethod();
        setInputValue("");
      }
    };
  
    const uploadImage = async (e: any) => {
      setloading(true);
      const res = await UploadSend(e);
      postModel.setPhoto(res);
      setloading(false);
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
    return {
        user,
        enable,
        loading,
        inputValue,
        handleInputChange,
        handleUploadClick,
        uploadImage
    };
}