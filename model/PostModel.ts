export default class PostModel {
  id?: number;
  user?: string;
  title?: string;
  description?: string;
  photo?: string;

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
}
