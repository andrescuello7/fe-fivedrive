import { IPosts } from "interfaces/IPostModel";
import PostModel from "./PostModel";

export default class UserModel {
  public id: number | undefined;
  public username: string | undefined;
  public photo: string | undefined;
  public cover: string | undefined;
  public email: string | undefined;
  public password?: string | undefined;
}
