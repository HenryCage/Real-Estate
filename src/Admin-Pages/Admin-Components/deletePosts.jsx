import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeletePosts =  ({ postId, onDelete}) => {
    const navigate = useNavigate();
    
    const delete_the_post = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await axios.delete(`http://localhost:7000/posts/${postId}`);
                onDelete(postId);
                alert("Post deleted successfully");
                navigate('/admin/view-posts');
            } catch (err) {
                console.error(`This post could not be deleted`, err);
                alert("Error deleting post");
            }
        }
    }

    return (
        <button className="delete-button" onClick={delete_the_post}>Delete</button>
    )
}

export default DeletePosts;