export default class CommentModel {
  private id: number | undefined;
  private description: string | undefined;
  private post: { id: number } | undefined;

  getId() {
    return this.id;
  }

  setId(id: number) {
    return this.id = id;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description: string) {
    return this.description = description;
  }

  getPostId() {
    return this.post;
  }

  setPostId(id: number) {
    this.post = { id: id };
  }

}
