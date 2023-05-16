import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { dummyData } from '../dummydata/Dummy.js';
import { GoChevronLeft } from "react-icons/go";
import { FaShoppingBag } from "react-icons/fa"
import { Button, Course } from '../components';

const SingleCourse = () => {

    const [course, setCoure] = useState(null);
    const {id} = useParams();

    useEffect( () => {
        const foundCourse = dummyData.find( course => course.id === Number(id));
        setCoure(foundCourse);
    }, [id]);
    
    if(!course) return <div><h1>Error</h1><p>Course Not Found!</p></div>;

    return (
        <main className='single_course'>
            <section className='course_header'>
                <div>
                    <Link to={'/courses'}>
                        <GoChevronLeft size={30} />
                    </Link>
                </div>
                <div>
                    <h1>Course</h1>
                </div>
            </section>
            <section className='course_details'>
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
