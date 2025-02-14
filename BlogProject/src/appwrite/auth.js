import { config } from "../assets/conf/config";
import { Client, Account, ID } from "appwrite";
// why inside a class?
// --> easier to maintain ,more readable , if appwrite stops and i have to switch to another service then directly i can update this class instead of finding the appwrite functionality here and there
export class AuthService {
  client = new Client();
  //.setProject(config.appwriteProjectId) // instead of directly doing here we will do it inside the constructor why?
  account; // instead of declaring it here i could've declared it inside the constructor.
  constructor() {
    this.client.setProject(config.appwriteProjectId)
      .setEndpoint(config.appwriteUrl);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another method
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async logIn({ email , password }) {
    try {
      const loggedInUser = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return loggedInUser;
    } catch (error) {
      throw error;
    }
  }
  async getUser() {
    try {
      const user = await this.account.get();
      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.log("AuthService::getuser error",error);
      throw error;
    }
  }
  async logOut (){
    try {
        const del = await this.account.deleteSessions()
        if (del) {
            return del
        }else {
            return null
        }
    } catch (error) {
        throw error
    }
  }
}

const authService = new AuthService();
export default authService;
