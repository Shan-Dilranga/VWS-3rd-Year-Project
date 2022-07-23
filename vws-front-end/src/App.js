import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoginPage from "./pages/all/Login/LoginPage";
import AdminHomePage from "./pages/admin/Home/HomePage";
import PcHomePage from "./pages/projectCoordinator/home/HomePage";
import VolunteerHomePage from "./pages/volunteer/home/HomePage";
import ViewAnnouncement from "./pages/admin/Announcement/ViewAnnouncement";
import Event from "./pages/admin/Event/Event";
import Forum from "./pages/admin/ForumPoll/Forum";
import Poll from "./pages/admin/ForumPoll/Poll";
import OnGoingProject from "./pages/admin/Project/OnGoingProject";
import ProposedProject from "./pages/admin/Project/ProposedProject";
import EventSummary from "./pages/admin/Summary/EventSummary";
import ProjectSummary from "./pages/admin/Summary/ProjectSummary";
import MemberSummary from "./pages/admin/Summary/MemberSummary";
import CurrentUser from "./pages/admin/User/CurrentUser";
import NewUser from "./pages/admin/User/NewUser";
import AdminSidebar from "./pages/admin/Sidebar/Sidebar";
import PcSidebar from "./pages/projectCoordinator/Sidebar/Sidebar"
import VolunteerSidebar from "./pages/volunteer/Sidebar/Sidebar";
import Guestpage from "./pages/guestUser/home/HomePage";
import ForgotPassword from "./pages/all/ForgotPassword/ForgotPassword";
import Profile from "./pages/all/Profile/Profile";
import { fetchUserData } from "./services/authenticationService";

function App() {
  const [userrole, setUserRoles] = useState([]);
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    user();
  },[]);

  const user= async () => {
    const res = await fetchUserData();
    setUserId(res.data.id);
    setUserRoles(res.data.roles[0].roleCode);
    // can user userId anywhere
    console.log(userId,userrole);
  };


  function sidebar(){
    if(localStorage.getItem("USER_KEY")){
      if(userrole === "PROJECT_COORDINATOR")
          return <PcSidebar />
      else if(userrole === "ADMIN")
        return <AdminSidebar />
      else if(userrole === "VOLUNTEER")
        return <VolunteerSidebar />
    }
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      {sidebar()}
        <Routes>
          <Route exact path="/" element={<Guestpage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          <Route path="/viewprofile" element={<Profile/>}></Route>

          {/* admin part */}
          <Route path="/adminhome" element={<AdminHomePage />}></Route>
          <Route
            path="/adminviewannouncement"
            element={<ViewAnnouncement />}
          ></Route>
          <Route path="/adminevent" element={<Event />}></Route>
          <Route path="/adminforum" element={<Forum />}></Route>
          <Route path="/adminpoll" element={<Poll />}></Route>
          <Route
            path="/adminongoingproject"
            element={<OnGoingProject />}
          ></Route>
          <Route
            path="/adminproposedproject"
            element={<ProposedProject />}
          ></Route>
          <Route path="/admineventsummary" element={<EventSummary />}></Route>
          <Route
            path="/adminprojectsummary"
            element={<ProjectSummary />}
          ></Route>
          <Route path="/adminmembersummary" element={<MemberSummary />}></Route>
          <Route path="/admincurrentuser" element={<CurrentUser />}></Route>
          <Route path="/adminnewuser" element={<NewUser />}></Route>


          {/* project coordinator part */}
          <Route path="/pchome" element={<PcHomePage />}></Route>


          {/* volunteer part */}
          <Route path="/volunteerhome" element={<VolunteerHomePage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 2596BE light blue
// 96BE25 dark green
// BE4D25 dark orange
// 145369 dark blue
// 6C25BE purple
// BE2596 pink
// 49BE25 light green
// BEA925 brown
// A6A6A6 gray
