import React from 'react'
import { GoPlay } from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import Button from '../Button'


const WeeklyLessons = ({ lesson }) => {
    return (
        <div className='card_lesson mb-4'>
            <div className='text-warning'>
                <Button>
                    {lesson.type === 'video' ? <GoPlay size={25} /> : <FaBookReader size={25} />}
                </Button>
            </div>
            <div>
                <h3>{lesson.lesson_title}</h3>
            </div>
            <div>
                <span>4min</span>
            </div>
        </div>
    )
}

export default WeeklyLessons;