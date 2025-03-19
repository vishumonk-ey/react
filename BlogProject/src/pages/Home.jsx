import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/majorConif";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/container/Container";
import { fetchPosts } from "../store/PostSlice";
function Home() {
  let [posts, setPosts] = useState([]);
  const [req, setreq] = useState(false);
  const dispatch = useDispatch();

  const postsLoaded = useSelector((state) => state.post.postLoaded);
  console.log("postloaded",postsLoaded);
  useEffect(() => {
    if (!postsLoaded) {
      appwriteService
        .getPosts()
        .then((posts) => {
          dispatch(fetchPosts(posts.documents))
        })
        .catch((err) => console.log("error in getting posts", err))
        .finally(() => setreq(true));
      // dispatch(fetchPosts());
    }
  }, []);
  const allPosts = useSelector((state) => state.post.posts  );
  console.log("allposts",allPosts);
  useEffect(() => {
    console.log(allPosts);
    setPosts(allPosts);
  }, [postsLoaded,allPosts]);
  // forgot postsloaded which caused error
  if (req === false && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center text-2xl">
        <h1 className="hover:underline ">Please Wait !</h1>
      </div>
    );
  } else if (req === true && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center text-2xl">
        <h1 className="hover:underline ">No Posts yet !</h1>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((eachPost) => (
              <div className="p-2 w-1/4" key={eachPost.$id}>
                <PostCard {...eachPost} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
