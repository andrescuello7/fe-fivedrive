export default class PostModel {
  id?: number;
  title?: string;
  description?: string;
  photo?: string;
  user?: { id: number };

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
  setUser(id: number) {
    this.user = { id };
  }
}
