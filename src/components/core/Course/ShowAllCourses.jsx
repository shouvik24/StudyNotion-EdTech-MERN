import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";

import { getAllCourses } from "../../../services/operations/courseDetailsAPI";
import LargeCourseName from "./LargeCourseName";

const ShowAllCourses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const coursesData = await getAllCourses();
      console.log(coursesData);
      if (coursesData) {
        setCourses(coursesData);
      }
      console.log("All Courses Data -> ", coursesData);
      setLoading(false);
    })();
  }, []);

  if (!courses) {
    return (
      <div className="flex justify-center items-center text-3xl text-richblack-5 my-auto">
        {
          " No Courses are updated to the site yet :( Please check after some time."
        }
      </div>
    );
  }
  return (
    <div>
      <div className=" box-content p-4">
        <div
          className="mx-auto flex  max-w-maxContentTab 
        flex-col justify-center gap-2 lg:max-w-maxContent "
        >
          <p className="text-3xl text-richblack-5 mx-auto">
            Welcome to All Courses Page
          </p>
          <p className="text-base text-richblack-25 mx-auto">
            Click on any course to explore and buy{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-8 justify-center my-auto mb-8">
        {courses.map((course, index) => (
          <div key={index} className="rounded-2xl max-w-[300px]">
            <Link to={`/courses/${course._id}`}>
              <div className=" bg-richblack-700 p-4 text-richblack-5">
                <img
                  src={course.thumbnail}
                  alt="Course_Thumbnail"
                  className="max-h-[200px] min-h-[180px] w-[400px] overflow-hidden rounded-lg 
                              object-cover md:max-w-full border-white border-2"
                />
              </div>
              <div className="flex flex-col gap-2 px-1 py-3 bg-richblack-700">
                <p className="text-xl text-richblack-5">
                  {(course?.courseName).length > 30 ? (
                    <LargeCourseName courseName={course.courseName} />
                  ) : (
                    course.courseName
                  )}
                </p>
                <p className="text-xl text-richblack-5"> ₹ {course?.price}</p>
                <p className="text-sm text-richblack-50">
                  Course Instructor : {course?.instructor?.firstName}{" "}
                  {course?.instructor?.lastName}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShowAllCourses;
