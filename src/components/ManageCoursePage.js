import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    const slug = params.slug; // from the path /courses/:slug
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [params.slug]);

  function handleChange({ target }) {
    const updatedCourse = { ...course, [target.name]: target.value };
    setCourse(updatedCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) {
      return;
    }
    courseApi.saveCourse(course).then(() => {
      navigate("/courses");
      toast.success("Course saved.");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author id is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors}></CourseForm>
    </>
  );
};

export default ManageCoursePage;
