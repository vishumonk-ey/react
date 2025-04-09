import React, { useEffect, useState } from "react";
import {Container} from "./index";
import {Button} from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";
import parse from "html-react-parser";
function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  // let authorId;
  useEffect(() => {
    databaseService
      .getPost(slug)
      .then((resolvedPost) => {
        resolvedPost ? setPost((resolvedPost)) : navigate("/");
        console.log(resolvedPost);
        
        // authorId = post.authorId;
      })
      .catch((err) => {
        console.log("error in fetching post in post", err);
        navigate("/");
      });
  }, [slug, navigate]);
  const userId = useSelector((state) => state.auth.userData.$id);
 let isAuthor;
 if(post && userId){
    if ( userId === post.authorId) {
      isAuthor = true
    } else {
      isAuthor = false
    }
 }
  const handleDelete = async () => {
    try {
      const status = await databaseService.deletePost(slug);
      if (status) {
        const fileDelStatus = await databaseService.deleteFile(post.fileId);
        fileDelStatus && navigate("/");
      }
    } catch (error) {
      console.log("error in deleting post", error);
      navigate("/");
    }
  };

  return post ? (
    <Container>
      {isAuthor && (
        <div className="w-full flex justify-end pr-2">
          <Link to={`/edit-post/${slug}`}>
            <Button className="hover:bg-amber-600/80">Edit</Button>
          </Link>
          <Button className=" hover:bg-red-400" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}
      <div className="w-full py-2 flex flex-col items-center space-y-4">
        <img
          src={databaseService.getFilePreview(post.imageId)}
          className="rounded-xl w-1/2"
          alt={post.title}
        />

        <h2 className="font-bold text-lg font-mono text-center mt-3">
          {post.title}
        </h2>

        {parse(post.content)}
      </div>
    </Container>
  ) : null;
}

export default Post;
