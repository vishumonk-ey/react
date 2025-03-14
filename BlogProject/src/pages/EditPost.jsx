import React, { useState, useEffect } from "react";
import PostForm from "../components/postform/PostForm";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { appwriteService } from "../appwrite/majorConif";
import  Container  from "../components/container/Container";
function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  // useParams takes some values from the url
  // how does it works properly?
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        setPost(post);
      });
    } else {
      navigate("/");
      // why this?
    }
  }, [slug, navigate]);
  // why useEffect here?and why navigate here?
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
