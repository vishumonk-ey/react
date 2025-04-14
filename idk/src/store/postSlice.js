import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  allPosts: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.allPosts = action.payload
    },
    updatePosts : (state,action) => {
      const {slugForDelete , newPost} = action.payload
      const updated = state.allPosts.map((eachPost) => {
        if (eachPost.$id === slugForDelete) {
          return newPost
        }else{
          return eachPost
        }
      })
      console.log("updated",updated);
      state.allPosts = updated
      
      
    },
    deletePost : (state,action) => {
        // send slug of the post to delete
        const slug = action.payload
        const updatedPosts = state.allPosts.filter((eachPost)=>(
            eachPost.$id !== slug
        ))
        state.allPosts= updatedPosts
    }
  },
});

export default postSlice.reducer
export const {deletePost,updatePosts,addPosts} = postSlice.actions