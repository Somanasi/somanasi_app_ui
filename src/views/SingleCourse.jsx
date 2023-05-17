import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { dummyData } from '../dummydata/Dummy.js';
import { BsChevronLeft, BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa"
import { Button, Course } from '../components';

const SingleCourse = () => {

    const [course, setCoure] = useState(null);
    const {id} = useParams();

    useEffect( () => {
        const foundCourse = dummyData.find( course => course.id === Number(id));
        setCoure(foundCourse);
    }, [id]);
    
    if(!course) return <div className='errorBoundary'><h1>Error</h1><p>Course Not Found!</p></div>;

    return (
        <main className='single_course bg-primary'>
            <section className='course_header px-2 py-4'>
                <div className='course_header_column flex justify-start py-2 '>
                    <Link to={'/courses'} className='text-warning'>
                        <BsChevronLeft size={25} />
                    </Link>
                </div>
                <div className='course_header_column flex justify-center py-2 '>
                    <h1 className='font-extrabold text-2xl text-warning'>Course</h1>
                </div>
                <div className='course_header_column text-right py-2 flex justify-end pr-1 text-warning'>
                    <BsThreeDotsVertical size={25} />
                </div>
            </section>
            <section className='course_details py-4 px-2'>
                {/*get single course info from database*/}
                {dummyData.map((course, index) => (((course.id + '') === id) ?
                    <Course course={course} key={index} />
                    : ""
                ))
                }
            </section>
            <section className='buy_course_now'>
                <div>
                    <Button>
                        <FaShoppingBag size={30} />
                    </Button>
                </div>
                <div>
                    <Button>
                        Buy Course Now
                    </Button>
                </div>
            </section>
        </main>
    );
}

export default SingleCourse
