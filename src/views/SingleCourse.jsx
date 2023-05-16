import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { dummyData } from '../dummydata/Dummy.js';
import { GoChevronLeft } from "react-icons/go";
import { Button, CourseBreakDown } from "../components";


const SingleCourse = () => {
    const [courseOpen, setCourseOpen] = useState(null);
    const toggleCourseOpen = (e) => {
        e.preventDefault();
        setCourseOpen(!courseOpen);
    };
    const params = useParams();
    return (
        <main className='single_course'>
            <section className='course_header'>
                <div>
                    <GoChevronLeft size={30} />
                </div>
                <div>
                    <h1>Course</h1>
                </div>
            </section>
            <section className='course_details'>
                {/*get single course info from database*/}
                {dummyData.map((item, index) => (((item.id + '') === params.id) ?
                    <>
                        <div className='course_title'>
                            <div>
                                <div>
                                    {item.classification}
                                </div>
                                <div>
                                    <h2>{item.name}</h2>
                                </div>
                                <div>
                                    <span>KES. {item.price}</span>
                                </div>
                            </div>
                            <div>
                                <img src={item.course_avatart} alt={item.name} />
                            </div>
                        </div>
                        <div className='course_description'>
                            <div>
                                <div>
                                    <h3>Abour Course</h3>
                                </div>
                                <div>
                                    <span>
                                        &#9733; 4.4(700);
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laborum odit itaque ut doloribus, nesciunt labore id
                                    doloremque saepe aliquid quisquam ipsam quia ea! Magnam
                                    harum ipsam iusto exercitationem quod suscipit!
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <h3>Course</h3>
                            </div>
                            <div>
                                <Button>See All</Button>
                            </div>
                        </div>
                        <div className="course_breakdown">
                            {
                                item.course_breakdown.map((breakdown, index) => {
                                    return <CourseBreakDown breakdown={breakdown} key={index} />
                                })
                            }
                        </div>
                        <div style={{ textAlign: "center" }}><p><strong>Instructed by: </strong>{item.instructorName}</p></div>
                        <div><p>{item.description}</p></div>
                        <div style={{ textAlign: "center", margin: "10px" }}>
                            <button onClick={(e) => toggleCourseOpen(e)} style={{ padding: "10px", backgroundColor: "transparent", borderColor: "orange", color: "orange", fontSize: "20px" }}>
                                {courseOpen ? <>Close</> : <>Open Course</>}
                            </button>
                        </div>
                        <div style={courseOpen ? { display: "block" } : { display: "none" }}>
                            <div style={{ padding: "10px" }}>
                                {/*Get course data from database*/}
                                {/* {item.dummyLessons.map((items, index) => {
                                    return (
                                        <>
                                            <hr />
                                            <div style={{ width: "20%", fontSize: "20px", marginLeft: "30px" }}><h3 key={index}>Lesson {items.lesson}</h3></div>
                                            <div><p key={index}>{items.description}</p></div>
                                            <div style={{ display: "flex", textAlign: "center" }}>
                                                <div style={{ width: "10%" }}><Link key={index} to={items.downloadPdfLink}><button>Download PDF</button></Link></div>
                                                <div><Link key={index} to={items.downloadPdfLink}><button>Read Online</button></Link></div>
                                            </div>
                                            <hr /></>
                                    )
                                }
                                )} */}
                            </div>
                        </div>
                    </>
                    : ""
                ))
                }
            </section>
        </main>
    );
}

export default SingleCourse
