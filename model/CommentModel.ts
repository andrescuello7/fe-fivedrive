export default class CommentModel {
  id?: number;
  description?: string;
  postId?: number;

  getId() {
    return this.id;
  }
  getDescription() {
    return this.description;
  }
  getPostId() {
    return this.postId;
  }
}
