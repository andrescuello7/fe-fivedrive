import { ICommentModel } from "./ICommentModel";

export interface IPosts {
  id?: number;
  description?: string;
  photo?: string;
  comments: ICommentModel[] | [];

  getPostsMethod?: () => void;
}
