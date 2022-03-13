import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoclose={3000} hideProgressBar></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/courses" element={<CoursesPage></CoursesPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/about-page" element={<Navigate replace to="/about"></Navigate>}></Route>
        <Route path="/course/:slug" element={<ManageCoursePage></ManageCoursePage>}></Route>
        <Route path="/course" element={<ManageCoursePage></ManageCoursePage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
