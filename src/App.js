import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/context/ScrollToTop";
import Siderbar from "./components/sidebar/Siderbar";
import HeaderDashboard from "./components/header/HeaderDashboard";
import { useContext, useEffect, useState } from "react";
import DashboardHome from "./pages/admin/home/DashboardHome";
import { Content, MainContent } from "./pages/admin/home/Home.style";
import Posts from "./pages/admin/posts/Posts";
import CreatePost from "./pages/admin/posts/createpost/CreatePost";
import Categories from "./pages/admin/category/categories/Categories";
import CategoryDetail from "./pages/admin/category/detail_category/CategoryDetail";
import PostDetail from "./pages/admin/posts/detail_post/PostDetail";
import EditPost from "./pages/admin/posts/edit_post/EditPost";
import CreateCategory from "./pages/admin/category/create_category/CreateCategory";
import Adverts from "./pages/admin/adverts/Adverts";
import EditAds from "./components/ads_components/edit_ads/EditAds";
import Users from "./pages/admin/users/Users";
import EditCategory from "./pages/admin/category/edit_category/EditCategory";
import Login from "./pages/auth/Login";
import HiderHeader from "./components/hide/Hider-header/HiderHeader";
import HideSidebar from "./components/hide/hide-sidebar/HideSidebar";
import { UserContext } from "./components/context/UserContext";
import ProtectedRoute from "./components/protected_route/ProtectedRoute";
// import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  const [displayShowSidebar, setDisplayShowSidebar] = useState("none");
  const [mainContentWidth, setMainContentWidth] = useState("80%");
  const [showHbg, setShowHbg] = useState("none");
  const [deskDisplaySidebar, setDeskDisplaySidebar] = useState("flex");

  const { user, setUser } = useContext(UserContext); // Get user and setUser from context

  const location = useLocation(); // Get the current location (path)

  // Update mainContentWidth when path is "/"
  useEffect(() => {
    if (location.pathname === "/") {
      setMainContentWidth("100%"); // Set width to 100% when on the homepage
    } else {
      setMainContentWidth("80%"); // Set default width to 80%
    }
  }, [location.pathname]);

  const showSidebar = () => {
    setDisplayShowSidebar("flex");
  };

  const shoDesktopSidebar = () => {
    setDeskDisplaySidebar("flex");
    setMainContentWidth("80%");
    setShowHbg("none");
  };

  return (
    <ScrollToTop>
      <Content>
        {/* Sidebar */}
        <HideSidebar>
          <Siderbar
            displayShowSidebar={displayShowSidebar}
            setDisplayShowSidebar={setDisplayShowSidebar}
            setMainContentWidth={setMainContentWidth}
            setShowHbg={setShowHbg}
            deskDisplaySidebar={deskDisplaySidebar}
            setDeskDisplaySidebar={setDeskDisplaySidebar}
          />
        </HideSidebar>

        <MainContent mainContentWidth={mainContentWidth}>
          {/* Header */}
          <HiderHeader>
            <HeaderDashboard
              showSidebar={showSidebar}
              showHbg={showHbg}
              shoDesktopSidebar={shoDesktopSidebar}
            />
          </HiderHeader>

          {/* Routes */}
          <Routes>
            {/* Redirect to Dashboard if logged in */}
            <Route
              path="/"
              element={user ? <Navigate to="/dashboard" /> : <Login />}
            />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<DashboardHome />} />}
            />
            <Route
              path="/posts"
              element={<ProtectedRoute element={<Posts />} />}
            />
            <Route
              path="/create-post"
              element={<ProtectedRoute element={<CreatePost />} />}
            />
            <Route
              path="/post/:postId"
              element={<ProtectedRoute element={<PostDetail />} />}
            />
            <Route
              path="/edit/:postId"
              element={<ProtectedRoute element={<EditPost />} />}
            />
            <Route
              path="/categories"
              element={<ProtectedRoute element={<Categories />} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ProtectedRoute element={<CategoryDetail />} />}
            />
            <Route
              path="/create-category"
              element={<ProtectedRoute element={<CreateCategory />} />}
            />
            <Route
              path="/editcategory/:categoryId/"
              element={<ProtectedRoute element={<EditCategory />} />}
            />
            <Route
              path="/adverts"
              element={<ProtectedRoute element={<Adverts />} />}
            />
            <Route
              path="/users"
              element={<ProtectedRoute element={<Users />} />}
            />
          </Routes>
        </MainContent>
      </Content>
    </ScrollToTop>
  );
}

export default App;
