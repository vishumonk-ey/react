import React, { useEffect, useState } from "react";
import PostCard, { Container } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";

// import { data } from "react-router-dom";
import { addPosts } from "../store/postSlice";
function Home() {
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
      <div className="w-full text-center font-bold ">
        Log In to view the posts.
      </div>
    );
  } else if (!loading && allPosts.length == 0) {
    return <div className="w-full text-center font-bold ">No Posts yet</div>;
  } else if (!loading) {
    return <Container>
        <div className="py-6 flex flex-wrap space-x-2">
            {allPosts.map((eachPost)=>(
                <div key={eachPost.$id}>
                    <PostCard {...eachPost} ></PostCard>
                </div>
            ))}
        </div>
    </Container>;
  } else {
    return (
      <div className="w-full text-center font-bold ">
        Please wait while we are loading ...
      </div>
    );
  }
}

export default Home;
