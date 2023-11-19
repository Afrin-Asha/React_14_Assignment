import React from 'react';
import Navigation from '../Layout/Navigation';
import Team from './../Components/Team/Team';
import Subscribe from './../Layout/Subscription';

const Teampage = () => {
    return (
        <Navigation>
         <div className=' p-16 '>
             <h1 className='text-xl font-bold'>Team</h1>
            <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>Team</span> </p>
          </div>
          
         <Team/>
         <Subscribe/>
    </Navigation>
    );
};

export default Teampage;