import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allPosts: [],
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
        state.allPosts = action.payload
    },
    updatePosts : (state ,action) => {
        const updatedPost = action.payload
        const slug = updatedPost.$id
        const updatedPosts = state.allPosts.map((eachPost)=>(
            eachPost.$id === slug ? (updatedPost) : (eachPost)
        ))
        state.allPosts(updatedPosts)
    } ,
    deletePosts : (state,action) => {
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
export const {deletePosts,updatePosts,addPosts} = postSlice.actions