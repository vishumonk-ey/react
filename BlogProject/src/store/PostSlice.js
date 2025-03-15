import { createSlice } from "@reduxjs/toolkit";
import appwriteService from "../appwrite/majorConif";
const initialState = {
  postLoaded: false,
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
     fetchPosts: (state, action) => {
      appwriteService.getPosts().then((posts) => {
        state.posts = posts.documents;
        state.postLoaded = true
      }).catch((err) => console.log("error in getting posts",err))
    },
  },
});

export default postSlice.reducer
export const {fetchPosts} = postSlice.actions
