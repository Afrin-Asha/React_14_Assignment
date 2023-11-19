import React from 'react';

const ProjectItem = ({data}) => {
    const {imagePath , name} = data
    return (
        <div className='shadow-md rounded-md flex flex-col items-center w-3/4 '>
            <img src={imagePath} alt="Image" className='w-full h-full hover:scale-110 transition-all'  />
            <p className='p-6 m-2 font-bold '>{name}</p>
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor soluta facere praesentium nobis! Soluta iste deserunt, exercitationem cumque accusamus maiores blanditiis ullam ex tempore, inventore enim! Ullam a repellat suscipit!</p> */}
        </div>
    );
};

export default ProjectItem;