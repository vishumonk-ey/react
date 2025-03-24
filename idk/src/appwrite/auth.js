import { Client, Account, ID } from "appwrite";
import { config } from "../assets/config";
class AuthService {
  client = new Client().setProject(config.appwriteProjectId);
  // client is outside any method jaise hi class declare hoyega tabhi client declare hojayega , basically connection ek common hogya aur global jo harr ek method me aayega to iss vjh se aur bhi service objects create kr skta huuu
  constructor() {
    this.account = new Account(this.client);
  }
  async signUp(email, pass) {
    try {
      const newAccount = await this.account.create(ID.unique(), email, pass);
      if (newAccount) {
        return await this.logIn(email, pass);
      }
    } catch (error) {
      console.log("sign up method error", error);
    }
  }
  async logIn(email, pass) {
    try {
      const loggedInUser = await this.account.createEmailPasswordSession(
        email,
        pass
      );
      return loggedInUser;
    } catch (error) {
      console.log("appwrite login error", error);
    }
  }
  async initiatePasswordRecovery(email) {
    const callbackURL = "";
    // add the route
    try {
      return this.account.createRecovery(email, callbackURL);
    } catch (error) {
      console.log("erroin in initating pwd recovery", error);
    }
  }
  async updatePassword(userID, secretKey, password) {
    try {
      return await this.account.updateRecovery(userID, secretKey, password);
    } catch (error) {
      console.log("updation error", error);
    }
  }
  async logout() {
    try {
      this.client.setEndpoint(config.appwriteEndpoint);
      this.account = new Account(this.client);
      
    } catch (error) {
      console.log("error in logging Out", error);
    }
  }
  async getCurrentuser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error in getting the current user", error);
    }
  }
}
