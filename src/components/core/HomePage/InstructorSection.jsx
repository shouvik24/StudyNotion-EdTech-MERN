import React from "react";
import Instructor_Image from "../../../assets/Images/Instructor.png";
import HighLighText from "./HighLighText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[50%]">
          <img
            src={Instructor_Image}
            alt="Instructor_Image"
            className="border-white border-2 rounded-md  mt-16"
          />
        </div>

        <div className="lg:w-[50%] flex flex-col gap-10">
          <h1 className="text-4xl font-semibold lg:w-[50%]">
            Become an
            <HighLighText text={"Instructor"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex gap-2 items-center">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
