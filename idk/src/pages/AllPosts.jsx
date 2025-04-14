import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import databaseService from "../appwrite/databaseService";
import {addPosts} from "../store/postSlice"
import { LoadingPage } from "../components";
import {PostCard , Container} from "../components/index";
import { Link } from "react-router-dom";
import { set } from "react-hook-form";
function AllPosts() {
  const dispatch = useDispatch()
  const [allPosts, setAllposts] = useState(null);
//   const [loading,setLoading] = useState(true)
const [filterValue, setfilterValue] = useState("All Posts")
  const storePosts = useSelector((state) => state.posts.allPosts)
  // console.log("my state",useSelector((state) => state));
  const userId = useSelector((state)=> state.auth.userData.$id)
  // console.log(userId);
  console.log(useSelector((state) => state.posts.allPosts));
  
  const handleFilter = async (e) => {
    // console.log(e.currentTarget.value);
    console.log(e.target);
    console.log(e.currentTarget);
    
    setfilterValue(e.target.value)
  }
  useEffect(() => {
    setAllposts((prev)=>storePosts);
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
    if (filterValue === "My Posts") {
      const afterFilterPosts = allPosts.filter((eachpost) =>  eachpost.authorId === userId)
      setAllposts(afterFilterPosts)
      console.log("after filter posts",afterFilterPosts);
      
    }
    // setLoading(false)
  }, [filterValue]);

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
          <select value={filterValue} 
          onChange={handleFilter} className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full">
                <option value="All Posts">All Posts</option>
                <option value="My Posts">My Posts</option>
            </select>
            <div className="py-6 grid grid-cols-3 gap-3">
                {allPosts.map((eachPost)=>(
                    <div key={eachPost.$id} >
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
