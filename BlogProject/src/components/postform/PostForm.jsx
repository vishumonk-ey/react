import React, { useCallback, useEffect } from "react";
import RTE from "../RTE";
import Input from "../Input"
import Select from "../Select"
import  Button from "../Buttons"
import { useForm } from "react-hook-form";
import appwriteService from "../../appwrite/majorConif";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function PostForm({ post }) {
  console.log(post);
  
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.$id|| "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    console.log("submit in the post form is cALLED WITH DATA ",data)
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        await appwriteService.deleteFile(post.featuredImage); // har ek post me jo attributes stored hain get it from appwrite db server
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      // updatePost me slug is needed so .$id will directly give us the slug
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        data.featuredImage = file.$id;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
          // why we are overwriting userId here? ? ?
        });
        console.log(dbPost);
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      const slug = value
  .trim()
  .toLowerCase()
  .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
  .replace(/[\s_]+/g, "-")  // Replace spaces and underscores with hyphens
  .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens

      return slug;
    }
    return "";
  }, []);
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => subscription.unsubscribe();
  }, [slugTransform, watch, setValue]);
  //  watch continously watch karta hai harr ek input field ko and whenever an input changes it runs the callback inside it .
  // watch call karta hu to it returns a subscription obj , and we need to unsubscribe from it . initialyy the cb runs but name will be undefined as anything havent changed yet.
  // unsubscribe - >  jab dusri baari ye run karega or when the component umnounts
  //   what is subscription? and what are we doing with the callback in it ?
  //   useCallback kyu use kiya hai? and why returning empty "" in second case

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug",{
              required: true
          })}
          // we used onINput bcoz if we used onCHange then it wud also run when our slug is automatically generated and will transform the already generated slug to slug which is waste , so used onInput which will only run when the user types (direct interaction with the input field)
          onInput = {(e) =>{
            setValue("slug",slugTransform(e.currentTarget.value))
          }}
        />
          {/* do baar kyu setValue kar rahe hain ? watch vala automatically slug ka value dega but if someone types manually then onInput ki vjh se it will be converted into the correct syntax of slug */}
       
        <RTE
          label="Content :"
          name="content"
          control={control} // control yaha se pass kiya hai so it means this form will control our rte . it is being registered to this form data.
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
