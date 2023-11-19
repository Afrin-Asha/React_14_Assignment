import React from 'react';
import Navigation from './../Layout/Navigation';
import Testimonial from './Testimonial/Testimonial';
import Subscribe from './../Layout/Subscription';

const TestimonialPage = () => {
    return (
        <Navigation>
             <div className=' p-16 '>
                <h1 className='text-xl font-bold'>Testimonial List</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>TestimonialList</span> </p>
            </div>
            <Testimonial/>
            <Subscribe/>
            
        </Navigation>
    );
};

export default TestimonialPage;