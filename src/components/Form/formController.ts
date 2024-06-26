/* eslint-disable react-hooks/exhaustive-deps */
import { readFromLocalStorage } from "@/utils/localStorage";
import UploadMethod from "@/utils/upload";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import PostModel from "@/model/PostModel";
import UserModel from "@/model/UserModel";
import { ChangeEvent, useEffect, useState } from "react";
import { UserFactory } from "singleton/userFactory";
import { CreateImageOpenAI } from "@/services/posts.service";

interface PostModelActions {
    onChangeMethod: (e: ChangeEvent<HTMLInputElement>) => void;
    createPostMethod: () => void;
    postModel: PostModel;
}
enum OpenAiState {
  "STOP"= 0,
  "START"= 1,
  "SUCCESS"= 2,
  "FAIL"= 3,
}

export default function FormController({ createPostMethod, onChangeMethod, postModel }: PostModelActions) {
    const userFactory: UserFactory = UserFactory.Initial();
    const userJsonBuffer = readFromLocalStorage(ContentTypeEnum.User);
  
    const [user, setuser] = useState<UserModel>();
    const [inputValue, setInputValue] = useState("");
    const [loading, setloading] = useState(false);
    const [enable, setenable] = useState(true);
    const [openAi, setOpenAi] = useState(OpenAiState.STOP);
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

    const generateImageOpenAI = async () => {
      try {
        setOpenAi(OpenAiState.START);
        const { response } = await CreateImageOpenAI(inputValue)
        postModel.setPhoto(response);
        setOpenAi(OpenAiState.STOP);
      } catch (error) {
        setOpenAi(OpenAiState.FAIL);
      }
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
        openAi,
        enable,
        loading,
        setOpenAi,
        inputValue,
        handleInputChange,
        handleUploadClick,
        generateImageOpenAI,
        uploadImage,
        OpenAiState
    };
}