import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";
import {addPosts} from "../store/postSlice"
import { LoadingPage } from "../components";
import {PostCard , Container} from "../components/index";
import { Link } from "react-router-dom";
function AllPosts() {
  const dispatch = useDispatch()
  const [allPosts, setAllposts] = useState(null);
//   const [loading,setLoading] = useState(true)
const [onlyMyPosts, setOnlyMyPosts] = useState(false)
  const storePosts = useSelector((state) => state.posts.allPosts)
  console.log("my state",useSelector((state) => state));
  const handleFilter = async (e) => {
    console.log(e.currentTarget);
    
        if (e.currentTarget.value === "All Posts"){
          setOnlyMyPosts(false)
        }else if (e.currentTarget.value === "My Posts"){
          setOnlyMyPosts(true)
        }
  }
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
          <select value={onlyMyPosts} onChange={handleFilter} className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full">
                <option value="All" selected>All Posts</option>
                <option value="My Posts">My Posts</option>
            </select>
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
