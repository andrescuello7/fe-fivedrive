export default class AuthModel {
  email?: string;
  password?: string;
  
  getEmail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
}
