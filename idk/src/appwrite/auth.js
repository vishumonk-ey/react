import { Client, Account, ID } from "appwrite";
import { config } from "../assets/config";
class AuthService {
  client = new Client()
    .setProject(config.appwriteProjectId)
    .setEndpoint(config.appwriteUrl);
  // client is outside any method jaise hi class declare hoyega tabhi client declare hojayega , basically connection ek common hogya aur global jo harr ek method me aayega to iss vjh se aur bhi service objects create kr skta huuu
  constructor() {
    this.account = new Account(this.client);
    console.log(config.appwriteProjectId);

    // by default has default endpoint so no need to setEndpoint , and we are using appwrite cloud services which are maintained by them only , hosted , scaling vo sab hi dekhte hainnn
  }
  async signUp({ email, password, name }) {
    try {
      const newAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (newAccount) {
        return await this.logIn({ email, password });
      }
    } catch (error) {
      // console.log("sign up method error", error);
      throw error;
    }
  }
  async logIn({ email, password }) {
    try {
      const loggedInUser = await this.account.createEmailSession(
        email,
        password
      );
      console.log(loggedInUser);

      return loggedInUser;
    } catch (error) {
      // console.log("appwrite login error", error);
      throw error;
    }
  }
  async initiatePasswordRecovery({ email }) {
    const callbackURL = "";
    // add the route
    try {
      return this.account.createRecovery(email, callbackURL);
    } catch (error) {
      console.log("erroin in initating pwd recovery", error);
    }
  }
  async updatePassword({ userID, secretKey, password }) {
    try {
      return await this.account.updateRecovery(userID, secretKey, password);
    } catch (error) {
      console.log("updation error", error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSession("current");
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
  async updatePreferences(fileId) {
    try {
      const promise = await this.account.updatePrefs({
        profileImageId: fileId,
      });
      return promise;
    } catch (error) {
      console.log("error in updating preferences", error);
    }
  }
  async getPreferences() {
    try {
      const promise = await this.account.getPrefs();
      return promise;
    } catch (error) {
      console.log("error in getting preferences :", error);
    }
  }
  async deleteAccount() {
    try {
      return await this.account.updateStatus();
    } catch (error) {
      console.log("error in deleting the account : ", error);
    }
  }
}
const authService = new AuthService();
export default authService;
