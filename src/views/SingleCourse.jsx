import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { dummyData } from '../dummydata/Dummy.js';

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

            </section>
            <section>
                {/*get single course info from database*/}
                {dummyData.map((item, index) => (((item.id + '') === params.id) ?
                    <>
                        <div><h2 style={{ textAlign: "center" }}>{item.name}</h2></div>
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
                                {item.dummyLessons.map((items, index) => {
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
                                )}
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
