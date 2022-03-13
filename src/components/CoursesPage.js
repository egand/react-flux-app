import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

/////////////////// implementazione come classe
// class CoursesPage extends React.Component {
//   state = {
//     courses: [],
//   };

//   componentDidMount() {
//     getCourses().then((courses) => this.setState({ courses: courses }));
//   }

//   renderRow(course) {
//     return (
//       <tr key={course.id}>
//         <td>{course.title}</td>
//         <td>{course.authorId}</td>
//         <td>{course.category}</td>
//       </tr>
//     );
//   }

//   render() {
//     return (
//       <>
//         <h2>Courses</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>{this.state.courses.map(this.renderRow)}</tbody>
//         </table>
//       </>
//     );
//   }
// }

/////////////////// implementazione come hook
function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses}></CourseList>
    </>
  );
}

export default CoursesPage;
