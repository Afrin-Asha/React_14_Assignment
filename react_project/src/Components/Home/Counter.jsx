import { useEffect, useState } from "react";
import axios from "axios";

/*
 <div className="flex justify-around items-center mt-12  mb-6">
            {smallCardData.map((data) => (
                <div key={data.id} className="bg-white p-10 rounded-lg shadow-md text-center flex flex-col items-center ">
                    <div className="text-4xl mb-4 bg-green-200 p-5 rounded-md">{data.icon}</div>
                    <h2 className="text-xl font-bold mb-2">{data.count}</h2>
                    <p className="font-bold">{data.name}</p>
                </div>
            ))}
        </div>

            className="left-0 flex w-[290px] h-[290px] top-0">
        //not from here 
*/
export const Counter = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
        .get('./database/counter.json')
        .then(res => setData(res.data))
      },[])
//gap-[45px] flex-[0_0_auto] inline-flex items-start relative
//flex justify-around items-center mt-12  mb-6
  return (
    <div className="w-full h-[421px] bg-white">
      {/* <div className="relative w-[1239px] h-[290px] top-[66px] left-[101px]"> */}
      <div className="gap-[45px] flex-[0_0_auto]  inline-flex items-start relative mt-12  mb-6">
      {data.map((item) => (
        <div key={item.id} className="left-0 ml-1 flex shadow-lg w-[270px] h-[290px] top-0">
          <div className=" h-[288px] w-[270px] bg-white rounded-[20px] shadow-[4px_9px_20px_#00000012]">
            <div className="relative w-[117px] h-[195px] top-[48px] left-[88px]">
              <div className="absolute w-[70px] h-[70px] top-0 left-[7px] bg-[#d7f5dc] rounded-[10px]">
              <img src={item.icon} alt="icon 1"  aria-label="Icon 1"/>
              </div>
              <div className="top-[122px] absolute left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal]">
                {item.count}
              </div>
              <p className="absolute  top-[171px] left-[1px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
              {item.name}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};
export default Counter;
