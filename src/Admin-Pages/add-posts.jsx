import { useState } from 'react'
import './add-posts.css'

const AddPosts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            title,
            description,
            price: Number(price),
            location,
            imageUrl
        };

        try {
            await fetch('http://localhost:7000/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            });

            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setImageUrl('');
            alert('Post added successfully!');
        } catch (err) {
            alert('Error adding post: ' + err.message);
        }
    }
    return (
        <div className="add-posts">
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: 'auto'}}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Title</label>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '8px' }}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Description</label>
                    <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required style={{width: '100%', height: '200px', padding:'8px'}}></textarea>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Price</label>
                    <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} required style={{ width: '100%', padding: '8px' }}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Location: </label>
                    <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} required style={{ width: '100%', padding: '8px' }}/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Image URL: </label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required style={{ width: '100%', padding: '8px' }}/>
                </div>

                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default AddPosts