import EstateCard from "./EstateCard"
import { useEffect, useState } from "react"

const Card = () => {
    const [post, setPost]= useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let response = await fetch('http://localhost:7000/posts')
        let data = await response.json()
        console.log(data)
        setPost(data.slice(0, 3))
      } catch (error) {
        console.error(error)
      }
    }

    fetchdata()
  }, [])

    return (
        <section className="section">
            <div className="heading">
                <div style={{width: '50%', textAlign: 'center'}}>Affordable Housing in Lagos, Nigeria</div>
            </div>
           <div className="card-section">
            {
                post.map((post) => (
                    <EstateCard key={post.id} post={post}/>
                ))
            }
           </div>
        </section>
    )
}

export default Card