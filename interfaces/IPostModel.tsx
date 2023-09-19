export interface IPosts {
  id?: number;
  user?: string;
  title?: string;
  description?: string;
  photo?: string;

  getPostsMethod?: () => void;
}
