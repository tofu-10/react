import { Navbar } from "./Navbar";
import Bloglayout from "./pages/Blog/Bloglayout";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Blog/Post";
import PostDetails from "./pages/Blog/PostDetails";
import Dashboardlayout from "./pages/Dashboard/Dashboardlayout";
import SettingLayout from "./pages/Dashboard/SettingsLayout";
import Analytics from "./pages/Dashboard/Analytics";
import Admin from "./pages/Dashboard/Admin";
import User from "./pages/Dashboard/User";
import ContactLayout from "./pages/Contact/ContactLayout";
import Contact from "./pages/Contact/Contact";
import ContactDetails from "./pages/Contact/ContactDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/blog" element={<Bloglayout />}>
          <Route index element={<Post />} />
          <Route path=":PostId" element={<PostDetails />} />
        </Route>

        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
          <Route path=":contactId" element={<ContactDetails />} />
        </Route>

        <Route path="/" element={<h1>Home Page</h1>}>
          <Route path="/dashboard" element={<Dashboardlayout />} />
          <Route path="settings" element={<SettingLayout />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
          
        </Route>
      </Routes>
    </>
  );
}
export default App;
