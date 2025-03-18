import React, { useEffect , useState} from "react";
import { useNavigate, useParams ,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import  appwriteService  from "../appwrite/majorConif";
import  Buttons  from "../components/Buttons";
import  Container  from "../components/container/Container";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { deletePost as storeDeletePost } from "../store/PostSlice";
function Post() {
  let [post, setPost] = useState(null);
  let { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost((prev) => prev = post);
          console.log("image id",post.featuredImage);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
 
  
  let isAuthor;
  if (post && userData) {
    if (post.userId === userData.$id) {
      isAuthor = true;
    } else {
      isAuthor = false;
    }
  }
  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        dispatch(storeDeletePost(post.$id))
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img 
            src={appwriteService.getFilePreview(post.featuredImage)}  
            // how file will load ? this should give error !
             alt={post.title}
             className="rounded-xl"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6">
                <Link to= {`/edit-post/${post.$id}`}>
                    <Buttons className="bg-green-500 hover:bg-green-300 ">
                        Edit
                    </Buttons>
                </Link>
                <Buttons className="bg-red-500 hover:bg-red-300" onClick={deletePost}>
                    Delete
                </Buttons>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
            <h1 className="font-bold text-2xl">
                {post.title}
            </h1>
        </div>
          <div className="browser-css">
            {parse(post.content)}
            {/* post.content is my tinyMCE vaala text and it consists HTML so post.content agar mai directly curly braces lagakr krdeta to it wouldntve rendered correctly */}
          </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
