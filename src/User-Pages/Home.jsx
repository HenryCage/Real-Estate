import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
          <h1>Homepage</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </>
    )
}

export default Home