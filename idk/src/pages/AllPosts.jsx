import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";
import {addPosts} from "../store/postSlice"
import { LoadingPage } from "../components";
import {PostCard , Container} from "../components/index";
import { Link } from "react-router-dom";
function AllPosts() {
  const [allPosts, setAllposts] = useState(null);
//   const [loading,setLoading] = useState(true)
  const storePosts = useSelector((state) => state.posts.allPosts)
  useEffect(() => {
    setAllposts(storePosts);
    if (allPosts === null) {
      databaseService.getAllPosts().then((fetchedPosts) => {
           if(fetchedPosts){
                setAllposts(fetchedPosts.documents)
                dispatch(addPosts(fetchedPosts.documents))
           } else {
            console.log("error in getting the allPosts:",fetchedPosts);
           }
      });
    }
    // setLoading(false)
  }, [allPosts]);

  if(allPosts === null){
    return (<LoadingPage/>)
  } else if ( allPosts.length === 0) {
    return (
        <div>
          
          <div className="w-full text-center text-3xl font-bold py-48">
            No Posts yet
          </div>
        </div>
      );
  } else {
    return (
        <Container>
            <div className="py-6 flex flex-wrap space-x-2">
                {allPosts.map((eachPost)=>(
                    <div key={eachPost.$id}>
                        <PostCard {...eachPost}>

                        </PostCard>
                    </div>
                ))}
            </div>
        </Container>
    )
  }
}

export default AllPosts;
