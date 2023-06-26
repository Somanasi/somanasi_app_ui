import React, { useState } from 'react'
import { FaLifeRing, FaSearch, FaStar } from 'react-icons/fa'

const Courseavailable = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showcourses, setShowcourse] = useState(false)

  const [courses] = useState([
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Doe',
      duration: '4 weeks',
      price: '$49.99',
      rating: 4,
      tags: ["HTML", "CSS", "JavaScript", "MySQL", 'Node', "Express"],
      coursedata: [
        {
          ctitle: "Front-end Development",
          ctext: "It focuses on the visual and interactive aspects of a website. HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript are the core technologies used in front-end development. HTML provides the structure of web pages, CSS defines the presentation and layout, and JavaScript adds interactivity and functionality."
        },
        {
          ctitle: "Back-end Development",
          ctext: " It involves the server-side programming and handling of data, user authentication, and database management. Popular back-end technologies include programming languages like Python, Ruby, Java, PHP, and frameworks like Node.js, Django, Ruby on Rails, and Laravel. Back-end development enables dynamic content generation and server-side operations."
        },
        {
          ctitle: "Database Management",
          ctext: "Web applications often require persistent storage of data. Databases such as MySQL, PostgreSQL, MongoDB, and SQLite are commonly used to store, retrieve, and manage data. Back-end developers interact with databases to handle data processing and storage."
        },
        {
          ctitle: "Web Servers",
          ctext: "Web servers are software applications that handle client requests and serve web pages and resources over the internet. Popular web servers include Apache HTTP Server, Nginx, and Microsoft Internet Information Services (IIS). These servers process requests, execute server-side code, and communicate with databases to deliver web content."
        },
      ]
    },

    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      price: '$69.99',
      rating: 4,
      tags: ["HTML", "CSS", "JavaScript", "MySQL", 'Node', "Express"],
      coursedata: [
        {
          ctitle: "Front-end Development",
          ctext: "It focuses on the visual and interactive aspects of a website. HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript are the core technologies used in front-end development. HTML provides the structure of web pages, CSS defines the presentation and layout, and JavaScript adds interactivity and functionality."
        },
        {
          ctitle: "Back-end Development",
          ctext: " It involves the server-side programming and handling of data, user authentication, and database management. Popular back-end technologies include programming languages like Python, Ruby, Java, PHP, and frameworks like Node.js, Django, Ruby on Rails, and Laravel. Back-end development enables dynamic content generation and server-side operations."
        },
        {
          ctitle: "Database Management",
          ctext: "Web applications often require persistent storage of data. Databases such as MySQL, PostgreSQL, MongoDB, and SQLite are commonly used to store, retrieve, and manage data. Back-end developers interact with databases to handle data processing and storage."
        },
        {
          ctitle: "Web Servers",
          ctext: "Web servers are software applications that handle client requests and serve web pages and resources over the internet. Popular web servers include Apache HTTP Server, Nginx, and Microsoft Internet Information Services (IIS). These servers process requests, execute server-side code, and communicate with databases to deliver web content."
        },
      ]
    },
    {
      id: 3,
      title: 'Computer Science',
      instructor: 'Jane Smith',
      duration: '8 weeks',
      price: '$70.99',
      rating: 4,
      tags: ["HTML", "CSS", "JavaScript", "MySQL", 'Node', "Express"],
      coursedata: [
        {
          ctitle: "Front-end Development",
          ctext: "It focuses on the visual and interactive aspects of a website. HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript are the core technologies used in front-end development. HTML provides the structure of web pages, CSS defines the presentation and layout, and JavaScript adds interactivity and functionality."
        },
        {
          ctitle: "Back-end Development",
          ctext: " It involves the server-side programming and handling of data, user authentication, and database management. Popular back-end technologies include programming languages like Python, Ruby, Java, PHP, and frameworks like Node.js, Django, Ruby on Rails, and Laravel. Back-end development enables dynamic content generation and server-side operations."
        },
        {
          ctitle: "Database Management",
          ctext: "Web applications often require persistent storage of data. Databases such as MySQL, PostgreSQL, MongoDB, and SQLite are commonly used to store, retrieve, and manage data. Back-end developers interact with databases to handle data processing and storage."
        },
        {
          ctitle: "Web Servers",
          ctext: "Web servers are software applications that handle client requests and serve web pages and resources over the internet. Popular web servers include Apache HTTP Server, Nginx, and Microsoft Internet Information Services (IIS). These servers process requests, execute server-side code, and communicate with databases to deliver web content."
        },
      ]
    },
  ]);

  const handleViewCourse = (title) => {
    const selected = courses.find((course) => course.title === title);
    setSelectedCourse(selected);
  };

  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center mt-4'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
           Available Courses
          </div>

           {/* Search container */}
           <div className='flex flex-row items-center'> 
            <FaSearch/>
            <input type='search' placeholder='Search...' className='ml-2 px-2 border-none outline-none py-1'/>
           </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
          {showcourses && <button className="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600 mr-2" onClick={() => {
            setShowcourse(false)
           }}>
             Close
            </button>}
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
          </div>
        </div>
        <hr/>

        {/* Display section */}
        <main className='sm:w-[100%] mt-10'>
         {!showcourses ? <div className="container mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6 mb-2">
                <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
                <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
                <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
                <p className="text-green-600 font-bold mb-4">Price: {course.price}</p>
                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                  Enroll Now
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-4"
                onClick={() => {
                  handleViewCourse(course.title)
                  setShowcourse(true)
                  }}>
                  View
                </button>
              </div>
            ))}
          </div>
        :
        //  Filter course
         <div className="container mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div key={selectedCourse.id} className="bg-white rounded-lg shadow-md p-6 mb-2 border-t-8 border-orange">
              <h2 className="text-xl font-semibold mb-4">{selectedCourse.title}</h2>
              <p className="text-gray-600 mb-2">Instructor: {selectedCourse.instructor}</p>
              <p className="text-gray-600 mb-2">Duration: {selectedCourse.duration}</p>
              <p className="text-gray-600 mb-2">Tags: {
              selectedCourse.tags.map((data) => {
                return selectedCourse.tags !== 0 ?<span className=''>{data}, </span> : "Not yet tagged";
              })
              }</p>
              <p className="text-gray-600 mb-2">Duration: {selectedCourse.duration}</p>
              <p className="mb-2 flex flex-row text-orange-500 items-center gap-x-2">Rating: {
                Array.from({ length: selectedCourse.rating }).map((_, index) => (
                  selectedCourse.rating !== 0 ? <FaStar key={index} /> : "No rating"
                ))}
              </p>
              <p className="text-green-600 font-bold mb-4">Price: {selectedCourse.price}</p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mt-4">
                Enroll Now
              </button>
            </div>

            {/* The description */}
           
         </div>
        }
         
        </main>
      </article>
    </>
  )
}

export default Courseavailable
