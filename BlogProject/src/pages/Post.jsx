import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {appwriteService} from '../appwrite/majorConif'
function Post() {
    let [post,setPost] = useState(null)
    let {slug} = useParams()
    const navigate = useNavigate()
    const userData = useSelector((state)=> state.auth.userData)
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }else{
                    navigate("/")
                }
    
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])
    let isAuthor ;
    if (post && userData){
        if(post.userId === userData.$id){
            isAuthor = true
        }else{
            isAuthor = false
        }
    }
    
  return (
    

  )
}

export default Post