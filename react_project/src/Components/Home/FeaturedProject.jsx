// import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function FeaturedProject(   ) {
  
   

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
        .get('./database/featuredData.json')
        .then(res => setData(res.data))
      },[])
    
      const firstItem = data.length > 0 ? data[0] : null;
  
    return (

      <div className="bg-green-50 flex flex-col items-center px-5">
      <div className="w-full max-w-[1239px] mt-16 mb-20 max-md:max-w-full max-md:my-10">
        <div className="gap-9 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
              
              <div className="flex flex-col pl-3 pr-20 max-md:max-w-full max-md:pr-5">
                <div className="text-green-500 text-xl font-medium leading-8 uppercase whitespace-nowrap max-md:max-w-full">
                  Featured Project
                </div>
                <div className="text-black text-3xl font-semibold leading-10 w-[495px] mt-3 max-md:max-w-full max-md:mt-10">
                  We provide the Perfect Solution to your business growth
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="images/large_project_1.png"
                className="aspect-[1.13] object-contain object-center w-full overflow-hidden mt-14 max-md:max-w-full max-md:mt-10"
              />
              <div className="text-slate-700 text-sm leading-7 opacity-80 whitespace-nowrap mt-2.5 max-md:max-w-full">
                App Design - June 20, 2022
              </div>
              <div className="text-indigo-950 text-2xl font-bold leading-7 whitespace-nowrap mt-3.5 max-md:max-w-full">
                App Redesign
              </div>


            </div>
          </div>
          <div className="grid grid-cols-2 justify-arround gap-2 w-7/12 mt-40 max-md:w-full">
                    {data.map((data) => (
                        <div key={data.id} className=" p-4 w-52">
                            <img src={data.imageSrc} alt={`Small Card ${data.id}`} className="aspect-[1.53] object-contain object-center mt-2" />
                            <p className="text-xs text-gray-500  mb-2">{data.appDesignDate}</p>
                            <h3 className="text-xs font-bold mb-2">{data.redesignHeading}</h3>
                        </div>
                    ))}
                </div>


         
        </div>
      </div>
    </div>
    
  );
}


export default FeaturedProject;