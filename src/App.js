import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import ScrollToTop from "./components/context/ScrollToTop";
import Siderbar from "./components/sidebar/Siderbar";
import HeaderDashboard from "./components/header/HeaderDashboard";
import { useState } from "react";
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

function App() {
  const [displayShowSidebar, setDisplayShowSidebar] = useState("none");
  const [mainContentWidth, setMainContentWidth] = useState("80%");
  const [showHbg, setShowHbg] = useState("none");
  const [deskDisplaySidebar, setDeskDisplaySidebar] = useState("flex");

  const showSidebar = () => {
    setDisplayShowSidebar("flex");
  };

  const shoDesktopSidebar = () => {
    setDeskDisplaySidebar("flex");
    setMainContentWidth("80%");
    setShowHbg("none");
  };

  // halal app
  return (
    <Router>
      <ScrollToTop>
        <Content>
          {/* Sidebar */}
          <Siderbar
            displayShowSidebar={displayShowSidebar}
            setDisplayShowSidebar={setDisplayShowSidebar}
            setMainContentWidth={setMainContentWidth}
            setShowHbg={setShowHbg}
            deskDisplaySidebar={deskDisplaySidebar}
            setDeskDisplaySidebar={setDeskDisplaySidebar}
          />

          <MainContent mainContentWidth={mainContentWidth}>
            {/* Header */}
            <HeaderDashboard
              showSidebar={showSidebar}
              showHbg={showHbg}
              shoDesktopSidebar={shoDesktopSidebar}
            />

            {/* Routes */}
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/post/:postId" element={<PostDetail />} />
              <Route path="/edit/:postId" element={<EditPost />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/category/:categoryId"
                element={<CategoryDetail />}
              />
              <Route path="/create-category" element={<CreateCategory />} />

              <Route path="/adverts" element={<Adverts />} />
              <Route path="/users" element={<Users />} />

              {/* <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/post/:postId" element={<SinglePost />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/register" element={<Register />} />
              <Route path="/new" element={<CreatePost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/editcategory/:id" element={<EditCategory />} />
              <Route path="/result" element={<SearchResult />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="/video-post" element={<CreateVideo />} />
              <Route path="/dashboard/home" element={<DashboardHome />} /> */}
            </Routes>
          </MainContent>
        </Content>
      </ScrollToTop>
    </Router>
  );
}

export default App;
