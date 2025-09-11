import { Link } from "react-router-dom"

const EstateCard = ({ post }) => {
    return(
        <>
            <div className="card">
                    <div className="image"><img src={post.imageUrl} alt="" /></div>
                    <div className="card-details">
                        <div style={{fontSize: '1.5rem', marginBottom: '.5rem', letterSpacing: '.1em'}}>{post.title}</div>
                        <div  style={{fontSize: '2rem', marginBottom: '1rem', letterSpacing: '.1em'}}>N {post.price}</div>
                        <Link>LEARN MORE</Link>
                    </div>
                </div>
        </>
    )
}
 
export default EstateCard