export default class UserModel {
  email: string | undefined;
  password: string | undefined;
  
  getEmail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
}
