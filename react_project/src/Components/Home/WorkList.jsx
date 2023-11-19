import React from "react";
// import cardData from "./cardData";
import { useEffect, useState } from "react";
import axios from "axios";



 const WorkList = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
        .get('./database/workData.json')
        .then(res => setData(res.data))
      },[])

   
  return (


    <div className="container p-10 bg-white">
      <div className="flex-col gap-[40px] top-[67px] left-[80px] inline-flex items-start relative">
        <div className="flex-col gap-[15px] flex-[0_0_auto] inline-flex items-start relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#20b15a] text-[20px] tracking-[0] leading-[normal]">
            WORK LIST
          </div>
          <p className="relative w-[495px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal]">
            We provide the Perfect Solution to your business growth
          </p>
        </div>
        <div className="gap-[45px] flex-[0_0_auto] shadow-lg inline-flex items-start relative">
            
            {data.map((item) => (
                    <div key={item.id} className="bg-white p-6 shadow-lg ">
                        <div className="text-2xl mb-4 bg-green-200  w-16 rounded">
                            <img src={item.icon} alt="icon 1"  aria-label="Icon 1"/>
                                {/* {data.icon} */}
                           
                        </div>
                        <h2 className="text-xl font-bold mb-2">{item.heading}</h2>
                        <p className="text-gray-600 mb-4">{item.des}</p>
                        <button className=" p-2 flex items-end gap-3">Learn More </button>
                    </div>
                ))}
                
        
        </div>
      </div>
    </div>
  );
};
export default WorkList;
// export default na korle worklist parent component e kaj kore na 

