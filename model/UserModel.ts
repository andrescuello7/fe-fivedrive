export default class UserModel {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  repeetPassword: string | undefined;
  
  getEmail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
}
