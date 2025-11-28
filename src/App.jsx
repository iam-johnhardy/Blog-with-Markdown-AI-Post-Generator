import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import BlogPostView from "./Pages/Blog/BlogPostView.jsx";
import PostByTags from "./Pages/Blog/PostByTags.jsx";
import SearchPosts from "./Pages/Blog/SearchPosts.jsx";
import AdminLogin from "./Pages/Admin/Components/AdminLogin";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./Pages/Admin/Components/Dashboard";
import BlogPosts from "./Pages/Admin/Components/BlogPosts"
import BlogPostEditor from "./Pages/Admin/Components/BlogPostEditor"
import Comment from "./Pages/Admin/Components/Comment"
import BlogLandingPage  from "./Pages/Blog/BlogLandingPage.jsx";
import { UserProvider } from "./Context/userContext";


const App = () => {
  return (
    <UserProvider>
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          {/* Default Router */}
          <Route path="/" element={<BlogLandingPage />} />
          <Route path="/Post/:slug" element={<BlogPostView />} />
          <Route path="/tag/:tagName" element={<PostByTags />} />
          <Route path="/search" element={<SearchPosts />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={("admin")} />}/>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/posts" element={<BlogPosts />} />
          <Route path="/admin/create" element={<BlogPostEditor />} />
          <Route path="/admin/edit/:postSlug"
            element={<BlogPostEditor isEdit={true} />} />
          <Route path="/admin/comments" element={<Comment />} />


          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: '13px',
          },
        }}
      />
    </div>
    </UserProvider>
  )

}

export default App
