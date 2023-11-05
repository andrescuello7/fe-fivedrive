export default class AuthModel {
  username: string | undefined;
  password: string | undefined;
  
  getUsername(){
    return this.username;
  }
  getPassword(){
    return this.password;
  }
}
