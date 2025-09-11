import { Link } from "react-router-dom"
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="style">
            <h1 className="welcome-dashboard">Dashboard</h1>
            <div className="dashboard-links">
                <p>
                    <Link to = '/admin/add-posts' className="dashboard-link">Add Posts</Link>
                    <Link to = '/admin/view-posts' className="dashboard-link"> View Posts</Link>
                </p>
            </div>
        </div>
    )
}

export default Dashboard