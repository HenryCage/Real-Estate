import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="style">
            <h1 className="welcome-dashboard">Dashboard</h1>
            <div className="body">
                <p>
                    <Link to = '#'>Add Posts</Link> | <Link to = '#'>View Posts</Link> | <Link to = '#'>Manage Posts</Link>
                </p>
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default Dashboard