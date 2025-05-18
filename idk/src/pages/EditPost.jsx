import React, { useEffect, useState } from "react";
import { Postform } from "../components/index";
import {  useParams } from "react-router-dom";
import databaseService from "../appwrite/databaseService";
function EditPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    // const post = await
    // databaseService.getPost(slug)
    // if (post){
    //   setPost(post)
    // }
    databaseService
      .getPost(slug)
      .then((post) => {
        if (post) {
          setPost(post);
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);
  // useEffect me i can only return a cleanup function , but here ---->
  // Async function haiii, whenever i declare a function async it implicitly returns a promise which resolves when our async code compeletes , so bts

  // () => {
  //   return new Promise((resolve, reject) => {
  //     // runs your code
  //     const post = await databaseService.getPost(slug);
  //     setPost(post);
  //     resolve(); // or reject(err) if an error happens
  //   });
  // }

  //  await myAsyncFunction() --> await will wait till my promise resolves or rejects             :)

  return post ? <Postform post={post} /> : null;
}

export default EditPost;
