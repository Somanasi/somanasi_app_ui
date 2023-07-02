import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuizesComponent = ({ quiz }) => {
  return (
    <>
      
      <div className="course_description py-8">
        <div className="about_course pb-4">
          <div  className="about_course_column">
            <h3 className="font-bold text-warning">{quiz}</h3>{/*Place description here!*/}
          </div>
        </div>
        <div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default QuizesComponent;
