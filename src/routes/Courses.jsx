//icons are the thumbnail images of the course
import React from 'react';
import {Link} from "react-router-dom";
import '../assets/sass/main.scss'
import {dummyData} from '../dummydata/Dummy.js';

const Courses = () => {
  return (
    <>
        <div style={{textAlign:"center", fontSize:"30px"}}><h1>Courses</h1></div>
        {dummyData.map((items, index)=>(
            <div style={{display:"flex", margin:"10px"}}>
                <div>
                    <Link to = {"/courses/" + items.id}>
                        <div>
                            <h3 style={{padding:"10px"}}>{items.name}</h3>
                        </div>
                        <div>
                            <p>{items.description}</p>
                        </div>
                    </Link><hr/>
                </div>
                <div style={{padding:"10px"}}>
                    <Link to = {"/courses/" + items.id}>
                        <img width="50px" height="50px" src={items.icon}/>
                    </Link>
                </div>
            </div>
        ))}
    </>
  )
}

export default Courses
