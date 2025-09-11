import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPosts = () => {
    const { postId } = useParams();
    console.log(postId);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
    const getPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:7000/posts/${postId}`);
            const post = response.data;
            setTitle(post.title);
            setDescription(post.description);
            setImageUrl(post.imageUrl);
            setLocation(post.location);
            setPrice(post.price);

        } catch (error) {
            console.error("Error retrieving house details:", error);
        }
    }

    getPosts();
    }, [postId]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const updatedPost = {
            title, description, imageUrl, location, price
        }

        try {
            await axios.put(`http://localhost:7000/posts/${postId}`, updatedPost)
            alert("Edits successfully saved")
            navigate("/admin/view-posts")
        } catch (error) {
            console.error("Error updating post:", error);
            alert("Failed to edit posts. Try Again")
        }
    }

    return (
        <div className="edit-posts">
            <h2>Edit Posts</h2>
            <form onSubmit={handleFormSubmit} style={{maxWidth: '600px', margin: 'auto'}}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '8px' }} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}  style={{width: '100%', height: '200px', padding:'8px'}}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Image URL</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ width: '100%', padding: '8px' }}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '8px' }}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: '100%', padding: '8px' }}/>
                </div>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default EditPosts