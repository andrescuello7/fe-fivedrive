import { ICommentModel } from "./ICommentModel";

export interface IPosts {
  id?: number;
  description?: string;
  username?: string;
  photo?: string;
  photoAuthor?: string;
  createAt?: Date;
  comments: ICommentModel[] | [];

  getPostsMethod?: () => void;
}
