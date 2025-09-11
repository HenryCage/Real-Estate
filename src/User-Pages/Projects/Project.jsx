import EstateCard from "../../Components/Home/EstateCard"
import { useEffect, useState } from "react"

const Projects = () => {

    const [post, setPost]= useState([])
    
      useEffect(() => {
        const fetchdata = async () => {
          try {
            let response = await fetch('http://localhost:7000/posts')
            let data = await response.json()
            console.log(data)
            setPost(data)
          } catch (error) {
            console.error(error)
          }
        }
    
        fetchdata()
      }, [])


    return(
        <>
        <section className="section">
            <div className="heading">
                <div style={{width: '50%', textAlign: 'center'}}>Our Projects</div>
            </div>
            <div className="card-section">
            {
                post.map((post) => (
                    <EstateCard key={post.id} post={post}/>
                ))
            }
            </div>
        </section>
        </>
    )
}

export default Projects