import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { appwriteService } from "../appwrite/majorConif";
import { Buttons } from "../components/Buttons";
import { Container } from "../components/container";
import parse from "html-react-parser";
function Post() {
  let [post, setPost] = useState(null);
  let { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
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
        appwriteService.deleteFile(post.featureImage);
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img 
            src={appwriteService.getFilePreview(post.featureImage)}  
            // how file will load ? this should give error !
             alt={post.title}
             className="rounded-xl"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6">
                <Link to= {`edit-post/${post.$id}`}>
                    <Button className="bg-green-500 hover:bg-green-300 ">
                        Edit
                    </Button>
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
