import React, { useEffect, useState } from 'react'
import {Postform} from '../components/index'
import { useParams } from 'react-router-dom'
import databaseService from '../appwrite/databaseService'
function EditPost() {
  const {slug} = useParams()
  const [post,setPost] = useState(null)
  useEffect(async ()=>{
    const post = await
    databaseService.getPost(slug)
    if (post){
      setPost(post)
    }
  },[])
  return post ? (<PostForm post = {post}/>) : null  
}

export default EditPost