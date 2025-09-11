import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './User-Pages/Home';
import AdminLayout from './Admin-Pages/admin-layout'
import Dashboard from './Admin-Pages/dashboard'
import Contact from './User-Pages/Contact/Contact';
import AddPosts from './Admin-Pages/Add-posts'
import AboutUs from "./User-Pages/About-Us";
import EditPost from "./Admin-Pages/Admin-Components/editPosts";
import ViewPosts from "./Admin-Pages/View-posts";
import Footer from "./User-Pages/Footer/Footer";
import Navbar from "./Components/Navbar";
import Properties from "./User-Pages/Projects/Project";

const App = () => {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  )
}

const Main = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="add-posts" element={<AddPosts />} />
            <Route path="view-posts" element={<ViewPosts />} />
            <Route path="edit-posts/:postId" element={<EditPost />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        {!isAdminRoute && <Footer />}
    </>
  )
}

export default App;