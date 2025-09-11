import { useState, useEffect } from 'react';
import axios from 'axios';
import EditPostButton from './Admin-Components/EditPostButton';
import DeletePosts from './Admin-Components/deletePosts';
import './ViewPost.css';

const ViewPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('http://localhost:7000/posts');
                setPosts(response.data);   
            }

            catch (error) {
                console.error("Error retrieving posts:", error);
            }
        }

        getPosts();
    }, []);

    const removePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    };

    return (
        <div className="houses-container">
            <h2>All Posts</h2>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : ( 
                posts.map((post) => (
                    <div key = {post.id} className="postss">
                        <img src={post.imageUrl} alt={post.title} className='post-image'/>

                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <p>{post.location}</p>
                            <p>
                                <strong>
                                    {post.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
                                </strong>
                            </p>
                        </div>

                        <div className="button-group">
                            <EditPostButton postId={post.id} className="edit-button"/>
                            <DeletePosts postId={post.id} onDelete={removePost} className="delete-button"/>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default ViewPosts;