// import React from 'react';
import HeroList from '../Components/Home/HeroList';
import WorkList from '../Components/Home/WorkList';
import Counter from '../Components/Home/Counter';
import FeaturedProject from '../Components/Home/FeaturedProject';
import Subscribe from './../Layout/Subscription';
import Navigation from './../Layout/Navigation';
const HomePage = () => {
  
    return (
        
        <Navigation>
            
            <HeroList/>
            <WorkList/>
            <Counter/>
            <FeaturedProject/>
            <Subscribe/> 
            
        </Navigation>
    );
};

export default HomePage;