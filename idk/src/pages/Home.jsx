import React, { useEffect, useState } from "react";
import { PostCard, Container, LoadingPage } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";

// import { data } from "react-router-dom";
import { addPosts } from "../store/postSlice";
function Home() {
  console.log("rendered");

  const [allPosts, setallPosts] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const storedPosts = useSelector((state) => state.posts.allPosts);
  useEffect(() => {
    if (storedPosts === null) {
      databaseService
        .getAllPosts()
        .then((allPosts) => {
          setallPosts(allPosts.documents);
          dispatch(addPosts(allPosts.documents));
        })
        .catch((err) => {
          console.log("error in getting all posts ", err);
        });
    } else {
      setallPosts(storedPosts);
    }
    setLoading(false);
  }, []);
  if (!isLoggedIn) {
    return (
      <div className="w-full text-center text-3xl font-bold py-48 ">
        Log In to view the posts.
      </div>
    );
  } else if (!loading && allPosts.length == 0) {
    return (
      <div>
        
        <div className="w-full text-center text-3xl font-bold py-48">
          No Posts yet
        </div>
      </div>
    );
  } else if (!loading) {
    return (
      <Container>
        <div className="py-6 flex flex-wrap space-x-4">
          {allPosts.map((eachPost) => (
            <div key={eachPost.$id} className="w-1/4">
              <PostCard {...eachPost}></PostCard>
            </div>
          ))}
        </div>
      </Container>
    );
  } else {
    return (
      <div className="w-full text-center font-bold ">
        
        Please wait while we are loading ...
      </div>
    );
  }
}

export default Home;
