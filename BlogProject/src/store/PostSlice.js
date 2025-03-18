import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
// import appwriteService from "../appwrite/majorConif";
const initialState = {
  postLoaded: false,
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // the functions inside the reducers must be pure and synchronus , because reducers return the value immediately which means it changes the value in the store immediately so when we do an async func like below => jaise hi mera promise call hua usi time mera reducer ne value return krdiya store ko and finalize krdiya but when evewntualy my promise resolves and we try to update the store value then it doesnt occur as it was already finalized !
     fetchPosts: (state, action) => {
    //   appwriteService.getPosts().then((allposts) => {
    //     state.posts = allposts.documents;
    //     state.postLoaded = true
    //   }).catch((err) => console.log("error in getting posts",err))
      state.posts = action.payload
      state.postLoaded = true
    //   console.log(action)
    },
    removePostLoading : (state,action) =>{
        state.postLoaded = false
    }
  },
});

export default postSlice.reducer
export const {fetchPosts , removePostLoading} = postSlice.actions
