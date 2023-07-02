import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { dummyData } from '../../../dummydata/Dummy.js';
import { BsChevronLeft, BsThreeDotsVertical } from "react-icons/bs";
import { QuizesComponent} from '../components'

export default function Quizes() {

    const [quiz, setQuiz] = useState(null);
    const params = useParams();

    useEffect( () => {
        const foundCourse = dummyData.find( course => course.id === Number(params.id));
        foundCourse.course_breakdown.map((breakdown) => {
          if(breakdown.tag === params.tag){
            const foundQuiz = breakdown.quiz;
            setQuiz(foundQuiz);
          }
        })
    });
    
    if(!quiz) return <div className='errorBoundary'><h1>Error</h1><p>Quiz Not Found!</p></div>;

    return (
        <main className='single_course bg-primary'>
            <section className='course_header px-2 py-4'>
                <div className='course_header_column flex justify-start py-2 '>
                    <Link to={'/courses'} className='text-warning'>
                        <BsChevronLeft size={25} />
                    </Link>
                </div>
                <div className='course_header_column flex justify-center py-2 '>
                    <h1 className='font-extrabold text-2xl text-warning'>Quizes for {params.tag}</h1>
                </div>
                <div className='course_header_column text-right py-2 flex justify-end pr-1 text-warning'>
                    <BsThreeDotsVertical size={25} />
                </div>
            </section>
            <section className='course_details py-4 px-2 '>
                {/*get single lesson info from database*/}
                <QuizesComponent quiz={quiz} />
            </section>
        </main>
    );
}