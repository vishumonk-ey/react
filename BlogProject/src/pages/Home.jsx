import React, { useState, useEffect } from "react";
import { appwriteService } from "../appwrite/majorConif";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";
function Home() {
  let [posts, setPosts] = useState([]);
  appwriteService.getPosts().then((posts) => setPosts(posts.document));
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center text-2xl">
        <h1 className="hover:underline ">No posts yet !</h1>
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
