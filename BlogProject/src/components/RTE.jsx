import React from 'react'
import { useState } from 'react'
import {Controller,useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
export default function RTE({
    name ,
    control , 
    label ,
    defaultValue = ""
}) {
// why we used controller ? because editor hamara ek third party alone,software hai. iske andar jo content likha jayega vo to inbuilt hi hai , uska access hame lena padega such that we can store the data and sent it in database.
// its basically like a inputbox , mujhe uske andar ke content ka access chaiye 
  return (
   <Controller
    name= {name || "content" }
    control = {control} // its like manager which is controlling my editor content vagerahh...
    render={({field:{onChange}}) => (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
        
        </div>    
  )
}
    />
)
}
