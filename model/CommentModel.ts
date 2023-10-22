export default class CommentModel {
  private id: number | undefined;
  private description: string | undefined;

  getId() {
    return this.id;
  }

  getDescription() {
    return this.description;
  }

  setId(id: number) {
    return this.id = id;
  }

  setDescription(description: string) {
    return this.description = description;
  }
}
