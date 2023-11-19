import React from 'react';
import Navigation from './../Layout/Navigation';
import Service from './../Components/Service/Service';
import Subscribe from './../Layout/Subscription';

const ServicePage = () => {
    return (
        <Navigation>
            <div className=' p-16 bg-base-200 '>
                <h1 className='text-xl font-bold'>Team</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>Our Services</span> </p>
            </div>
            <Service/>
            <Subscribe/>
        </Navigation>
    );
};

export default ServicePage;