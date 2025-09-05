import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './User-Pages/Home';
import AdminLayout from './Admin-Pages/admin-layout'
import Dashboard from './Admin-Pages/dashboard'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            {/* <Route path="add-posts" element={<AddPosts />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;