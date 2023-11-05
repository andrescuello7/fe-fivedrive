export default class PostModel {
  private id: number | undefined;
  private title: string | undefined;
  private description: string | undefined;
  private photo: string | undefined;
  private user: { id: number } | undefined;
  private createAt: null | undefined;

  getId() {
    return this.id;
  }
  getUser() {
    return this.user;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getPhoto() {
    return this.photo;
  }
  getCreateAt() {
    return this.createAt;
  }

  setId(id: number) {
    this.id = id;
  }
  setUser(id: number) {
    this.user = { id };
  }
  setTitle(title: string) {
    this.title = title;
  }
  setDescription(description: string) {
    this.description = description;
  }
  setPhoto(photo: string) {
    this.photo = photo;
  }
  setCreateAt() {
    this.createAt = null;
  }
}
