import React, { useCallback, useEffect, useState } from "react";
import {RTE} from "../index";
import {Input} from "../index";
import {Button} from "../index";
import {Container} from "../index";
import { useForm } from "react-hook-form";
import databaseService from "../../appwrite/databaseService";
import {addPosts,deletePost,updatePosts} from "../../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Postform({ post }) {
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "Write your text here...",
        imageId: post?.imageId || "",
        slug: post?.$id || "",
      },
    });
  const navigate = useNavigate();
  console.log(useSelector((state)=>state));
  const storedPosts = useSelector((state) => state.posts.allPosts)
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch()
  // const [slug, setSlug] = useState("");
  const submit = async (data) => {
    // console.log(data);
    // console.log("pot : "s,post);
    
    if (post) {
      const newImage = data.image[0]
        ? await databaseService.uploadFile(data.image[0])
        : null;
      if (newImage) {
        await databaseService.deleteFile(post.imageId);
        //  const updatedPost = await databaseService.updatePost({
        //      ...data,
        //      imageId: newImage.$id } , post.$id
        //     );
        // slug isnt changing so deleting the old and creating new with same data
      }
      const deleteOldPost = await databaseService.deletePost(post.$id);
      if (deleteOldPost) {
        const newPost = await databaseService.createPost(
          {
            ...data,
            imageId: newImage.$id || data.imageId,
            authorId: userData.$id,
          },
          data.slug
        );
        if (newPost) {
          // addPosts()
          dispatch(updatePosts({
            slugForDelete : post.$id ,
            newPost
          }))
          navigate(`/posts/${newPost.$id}`);
        }
      }
    } else {
      const image = await databaseService.uploadFile(data.image[0]);
      const newPost = await databaseService.createPost(
        {
          ...data,
          imageId: image.$id,
          authorId: userData.$id,
        },
        data.slug
      );
      if (newPost){
        dispatch(addPosts([...storedPosts , newPost]))
        navigate(`/posts/${newPost.$id}`)
      }
    }
  };
  const slugTransform = useCallback((value) => {
    const slug = value
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
      .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
    console.log(slug);
    
    return slug;
  }, []);
  useEffect(()=>{
    const subscription = watch((value , {name})=>{
        if (name === "title"){
          setValue("slug",slugTransform(value.title))
        }
    })
    return () => subscription.unsubscribe()
  },
  []) 
  // my useEffect will run once when the component mounts , and it is continously watching until my component unmounts , we can only return a function in useEffect which will run when useEffect runs again or component unmounts.
  return (
    <Container>
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2 ">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", {
              required: true,
            })}
            
          />
          <RTE control={control} defaultValues={getValues("content")} />
        </div>
        <div className="w-1/3 px-2 space">
          <Input
            type="file"
            label="Upload file"
            placeholder="Upload File"
            className={"mb-4"}
            {...register("image", {
              required: true,
            })}
          />
          {post && (
            <div className="w-full">
              <img
                className="rounded-lg mb-4"
                src={databaseService.getFilePreview(post.imageId)}
              />
            </div>
          )}
          <Button className={post ? "bg-orange-400" : "bg-blue-400"}>
            {post ? "Edit" : "Add"}
          </Button>
        </div>
      </form>
    </Container>
  );
}

// defaultValues are given in the react hook form useForm() , as form also manages its data so to give default values to that data
// watch is continously watching my input field and whenever something changes it executes an callback and it is exactly similar like our onChange eventListener . watch is our centralised management system , it watches all over the input fields at once . so all the logic for event listening can be stored at a place
// useCallback in slugTransform? -> depend nhi kr rha hai kisi parr and if not used useCallback then it may cause an infinte rendering issue . render hoga function ka def will change and which will cause useEffect to run again and it might change some state in which will cause a re-render again and this will keep on going.
export default Postform;
