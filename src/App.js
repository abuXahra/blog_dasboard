import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import ScrollToTop from "./components/context/ScrollToTop";
import Footer from "./components/footer/Footer";
import Siderbar from "./components/sidebar/Siderbar";
import HeaderDashboard from "./components/header/HeaderDashboard";
import { useState } from "react";
import DashboardHome from "./pages/amin/home/DashboardHome";
import { Content, MainContent } from "./pages/amin/home/Home.style";

function App() {
  const [displayShowSidebar, setDisplayShowSidebar] = useState("none");

  const showSidebar = () => {
    setDisplayShowSidebar("flex");
  };

  const hideSidebar = (url) => {
    setDisplayShowSidebar("none");
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
          />

          <MainContent>
            {/* Header */}
            <HeaderDashboard showSidebar={showSidebar} />

            {/* Routes */}
            <Routes>
              <Route path="/" element={<DashboardHome />} />
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

            {/* Footer */}
            <Footer />
          </MainContent>
        </Content>
      </ScrollToTop>
    </Router>
  );
}

export default App;
