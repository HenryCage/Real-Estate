import { useNavigate } from "react-router-dom";

const EditPostButton = ({ postId }) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(`/admin/edit-posts/${postId}`)} className="edit-button">
            Edit
        </button>
    )
}

export default EditPostButton;