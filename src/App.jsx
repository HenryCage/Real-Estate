import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './User-Pages/Home';
import AdminLayout from './Admin-Pages/admin-layout'
import Dashboard from './Admin-Pages/dashboard'
import AddPosts from './Admin-Pages/add-posts'
import AboutUs from "./User-Pages/About-Us";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="add-posts" element={<AddPosts />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;