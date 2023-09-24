import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

const LargeCourseName = ({ courseName }) => {
  const fullName = courseName;
  const partialName = fullName.slice(0, 28);
  const [showName, setShowName] = useState(partialName);
  const [showButton, setShowButton] = useState(true);

  return (
    <div className="flex gap-1">
      <p>{showName}</p>
      {showButton ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowName(fullName);
            setShowButton(!showButton);
          }}
        >
          ....
        </button>
      ) : (
        <BiSolidUpArrow
          className="mr-4 mt-8"
          onClick={(e) => {
            e.preventDefault();
            setShowName(partialName);
            setShowButton(!showButton);
          }}
        />
      )}
    </div>
  );
};

export default LargeCourseName;
