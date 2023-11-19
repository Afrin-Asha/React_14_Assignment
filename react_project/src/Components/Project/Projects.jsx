import React from 'react';
// import ProjectsCard from './ProjectsCard';
// import ProjectItem from './ProjectItem';
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
    // const projectData = [
    //     {
    //       id: 1,
    //       name: 'lorem ipsum dolor sit amet',
    //       imagePath: 'images/p1.png',
    //     },
    //     {
    //       id: 2,
    //       name: 'lorem ipsum dolor sit amet',
    //       imagePath: 'images/p2.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'lorem ipsum dolor sit amet',
    //       imagePath: 'images/p3.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'lorem ipsum dolor sit amet',
    //       imagePath: 'images/p4.png',
    //     },
    //     {
    //       id: 5,
    //       name: 'lorem ipsum dolor sit amet',
    //       imagePath: 'images/p5.png',
    //     },
    //     {
    //       id: 6,
    //       name: 'lorem ipsum dolor sit amet',
    //       imagePath: 'images/p6.png',
    //     },

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
        .get('./database/projectData.json')
        .then(res => setData(res.data))
      },[])


    return (
        <div className='p-16 bg-white-100'>
         
             <h2 className='uppercase  font-semibold text-green-300'>All PROJECT</h2>
            
            <h2 className='uppercase font-bold my-3'>Better Agency/SEO solution At<br />Your Fingertips</h2>
            <div className="grid grid-cols-2 gap-8 p-20">
                {
                    data.map((data, index) => (
                      <div key={index} className='shadow-md rounded-md flex flex-col items-center w-3/4 '>
                      <img src={data.imagePath} alt="Image" className='w-full h-full hover:scale-110 transition-all'  />
                      <p className='p-6 m-2 font-bold '>{data.name}</p>
                  </div>
                    ))
                }
            </div> 
        </div>
    );
};

export default Projects;