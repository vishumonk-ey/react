import React, { useEffect, useState } from "react";
import Container from "../components/index";
import Button from "../components/index";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";
function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    databaseService
      .getPost(slug)
      .then((resolvedPost) => {
        resolvedPost ? setPost(resolvedPost) : navigate("/");
      })
      .catch((err) => {
        console.log("error in fetching post in post", err);
        navigate("/");
      });
  }, [slug, navigate]);
  const userId = useSelector((state) => state.auth.userData.$id);
  let authorId = post.authorId;
  // const postData =
  const handleDelete = async () => {
    try {
        const status = await databaseService.deletePost(slug)
        if (status){
          const fileDelStatus = await databaseService.deleteFile(post.fileId)
          fileDelStatus  && navigate('/')
        }
    } catch (error) {
        console.log("error in deleting post",error);
        navigate("/")
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-end pr-2">
        <Link to={`/edit-post/${slug}`}>
          <Button className="hover:bg-amber-600/80">Edit</Button>
        </Link>
        <Button className=" hover:bg-red-400" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      <div className="w-full flex justify-center"></div>
    </Container>
  );
}

export default Post;
