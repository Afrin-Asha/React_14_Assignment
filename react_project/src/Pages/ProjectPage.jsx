import Projects from '../Components/Project/Projects';
import Subscribe from './../Layout/Subscription';
import Navigation from './../Layout/Navigation';



const ProjectPage = () => {
    return (
        <Navigation>
             <div className=' p-16 bg-base-200 mt-2 '>
                <h1 className='text-xl font-bold'>All Project</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>All Project</span> </p>
            </div>
            <Projects/>
            <Subscribe/>
           
        </Navigation>
    );
};


export default ProjectPage;