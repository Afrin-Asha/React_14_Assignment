import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Navigation = (props) => {


      return (
        <>
            <div className="fixed-top w-full  justify-between  bg-green-100 p-2  items-center flex gap-5 max-md:flex-wrap">
          
          
          <div className="text-orange-600 text-xl pl-20  font-bold leading-8 my-auto">
            <span className="text-black">Design</span>
            <span className="text-orange-600">AGENCY</span>
          </div>


          <div className="justify-between items-start self-stretch flex gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-black text-base font-medium leading-6 self-center my-auto">
            <NavLink to={"/"}>Home</NavLink>
            </div>
            <div className="text-black text-base font-medium leading-6 self-center my-auto">
            <NavLink to={"/team"}>Team</NavLink>
            </div>
            <div className="text-black text-base font-medium leading-6 self-center my-auto">
              <NavLink to={"/service"}>Service</NavLink>
            </div>
            <div className="text-black text-base font-medium leading-6 self-center my-auto">
              <NavLink to={"/projects"}>Projects</NavLink>
            </div>
            <div className="text-black text-base font-medium leading-6 my-auto">
              <NavLink to={"/testimonial"}>Testimonials</NavLink>
            </div>



            <div className="text-black text-base font-medium leading-6 whitespace-nowrap justify-center items-center border self-stretch grow px-5 py-2.5 rounded-xl border-solid border-green-500">
               <NavLink to={"/"}>Login</NavLink>
            </div>
            <div className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch bg-green-500 self-stretch grow px-5 py-2.5 rounded-xl max-md:pr-0">
              <NavLink to={"/"}>Register</NavLink>
            </div>


          </div>
        </div>
           {props.children}
            <Footer/>
        </>
      );
    
    


};

export default Navigation;