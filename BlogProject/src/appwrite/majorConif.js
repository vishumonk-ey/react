import { config } from "../assets/conf/config";
import { Client, ID ,Databases,Query,Storage} from "appwrite";
export class DatabaseService{
    client = new Client()
    databases;
     bucket ;
    //  even if i dont declare databus and bucket here , i wont get any error?
    // why are we declaring first here and then database and bucket inside constructor and also why not set endpoint initially here or everything couldve been inside constructor
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title , content , featuredImage ,status , userId ,slug}){
        try {
            const post = await this.databases.createDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                slug ,
                {
                    title : title,
                    content : content ,
                    featuredImage ,
                    status ,
                    userId,
                }
            )
            return post
        } catch (error) {
            console.log("Appwrite :: createPost",error);
            
        }
    }
    async updatePost(slug,{title , content , featuredImage ,status}){
        try {
            const updatedPost = await this.databases.updateDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                slug ,
                {
                    title ,
                    content ,
                    featuredImage ,
                    status
                }
            )
            return updatedPost
        } catch (error) {
            console.log("Appwrite :: updatePost",error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                slug
            )
            return true 
        } catch (error) {
            console.log("Appwrite deletion error",error);
            
            return false

        }
    }
    async getPost(slug){
        try {
            const result = await this.databases.getDocument(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId,
                slug
            )
            return result
        } catch (error) {
            console.log("Appwrite :: getPost",error);
        }
    }
    async getPosts(){
        try {
            const result = await this.databases.listDocuments(
                config.appwriteDatabaseId ,
                config.appwriteCollectionId ,
                [
                    Query.equal("status","active")
                ]
                
            )
            return result
        } catch (error) {
            console.log("Appwrite :: getPosts",error);
            throw error
        }
    }
// for file uploading.... why stored file in buckets? because these are large files and can bloat up my database , slows down my queries , buckets are cheaper and also optimized for handling large files
async uploadFile(file){
    try {
        const result = await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),
            file
        ) 
        return result
    } catch (error) {
        console.log("uploadFIle" , error)
    }
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            config.appwriteBucketId ,
            fileId
        )
    } catch (error) {
        console.log("deleteFile" , error)
    }
}
getFilePreview(fileId){
    const result = this.bucket.getFilePreview(
        config.appwriteBucketId ,
        fileId
    )
    return result
}
}
const appwriteService = new DatabaseService()
export default appwriteService
