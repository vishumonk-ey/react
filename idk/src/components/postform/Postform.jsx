import React, { useCallback, useState } from "react";
import RTE from "../index";
import Input from "../index";
import Button from "../index";
import Container from "../index";
import { useForm } from "react-hook-form";
import databaseService from "../../appwrite/databaseService";
import { addPost, updatePosts } from "../../store/postSlice";
function Postform({ post }) {
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "Write your text here...",
        imageId: post?.imageId || "",
      },
    });
  const [slug, setSlug] = useState("");
  const submit = (data) => {
    if (post) {
    }
  };
  const slugTransform = useCallback((value) => {
    const slug = value
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
      .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens

    return slug;
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-2/3 px-2 ">
          <Input
            label="Title"
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />
          <RTE control = {control} defaultValues = {getValues(content)}/>
        </div>
        <div className="w-1/3 px-2 space">
            <Input 
              type = "file"
              label = "Upload file"
              placeholder ="Upload File"
              {...register("image",{
                required : true
              })}
            />
            {post && (<div className="w-full">
              <img className="rounded-lg" src={databaseService.getFilePreview(post.imageId)}/>
            </div>)}
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
