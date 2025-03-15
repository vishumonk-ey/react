import React from 'react'
import appwriteService from  '../appwrite/majorConif'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'
function AllPosts() {
    const [posts,setPosts]=React.useState([])
    appwriteService.getPosts().then((posts) => {
        setPosts(posts.documents)
    }).catch((err) => {
        console.log("error in getting posts",err)
    })
  return (
    <div className='py-8 w-full'>
        <Container>
            <div className="flex flex-wrap">
                {
                    posts.map((eachPost) => (
                        <div className="w-1/4 p-2" key={eachPost.$id}>
                            <PostCard {...eachPost} />
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts