export default class UserModel {
  fullname: string | undefined;
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
