import { Client, Databases, ID, Role, Storage } from "appwrite";
import { config } from "../assets/config";
class DatabaseService {
  client = new Client()
      .setProject(config.appwriteProjectId)
      .setEndpoint(config.appwriteUrl);
  database;
  storage;
  constructor() {
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, content, imageId, authorId }, slug) {
    // post data will be myy json object
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, imageId, authorId }
      );
    } catch (error) {
      console.log("creating document error", error);
    }
  }
  async updatePost({ title, content, imageId }, slug) {
    // post data will be myy json object
    try {
      return await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, imageId }
      );
    } catch (error) {
      console.log("creating document error", error);
    }
  }
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: getPost", error);
    }
  }
  async getAllPosts() {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId
      );
    } catch (error) {
      console.log("Appwrite :: getAllPosts", error);
    }
  }
  async deletePost(slug) {
    try {
      return await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: deletePost", error);
    }
  }
  //   for file storage , bucket
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file ,
        [
        ]
      );
    } catch (error) {
      console.log("uploadFIle", error);
    }
  }
  async getFile(fileId) {
    try {
      return await this.storage.getFile(config.appwriteBucketId, fileId);
      // will return a json
    } catch (error) {
      console.log("getFile", error);
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("deleteFile", error);
    }
  }
  getFilePreview(fileId) {
    const result = this.storage.getFileView(config.appwriteBucketId, fileId);
    // ###########################################
    // console.log("file preview method is returning me this", result);
    return result;
  }
}

const databaseService = new DatabaseService();
export default databaseService;
