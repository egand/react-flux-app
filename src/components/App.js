import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage></AboutPage>;
    if (route === "/courses") return <CoursesPage></CoursesPage>;
    return <HomePage></HomePage>;
  }
  return (
    <div className="container-fluid">
      <Header></Header>
      {getPage()}
    </div>
  );
}

export default App;
