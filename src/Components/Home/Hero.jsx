import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
           <div className="hero-image">
            <div className="opacity">
                <h1 style={{color: 'white'}}>Welcome to Group 1 Real estate</h1>
            </div>
           </div>

           <section className="welcome-section">
            <div className="welcome">
                <div className="title">Real Estate for Affordable Housing</div>
                <div className="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus. Nobis aliquid aspernatur, natus modi libero sunt molestiae qui velit, quas tempora excepturi tenetur non..</div>
                <Link>READ MORE</Link>
            </div>
            <div className="welcome-image"></div>
           </section>
        </div>
    )
}

export default Hero