import React, { useCallback, useEffect } from "react";
import RTE from "../RTE";
import { useForm } from "react-hook-form";
import appwriteService from "../../appwrite/majorConif";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function PostForm({ post }) {
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const submit = async (data) => {
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
          // why we are overwriting userId here?
        });
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      const slug = value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
      return slug;
    }
    return "";
  }, []);
  useEffect(() => {
    const subscription = watch(
        (value , {name}) => {
            if (name === "title") {
                setValue("slug",
                    slugTransform(value.title , {shouldValidate: true})
                )
            }

        }
    )

    return () => subscription.unsubscribe()
  }, [slugTransform,watch,setValue]);
//   what is subscription? and what are we doing with the callback in it ?
  //   useCallback kyu use kiya hai? and why returning empty "" in second case
  
  return <div>PostForm</div>;
}

export default PostForm;
