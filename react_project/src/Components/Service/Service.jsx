import { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {
 
    
        const [data, setData] = useState([]);
        useEffect(()=>{
            axios
            .get('./database/cardData.json')
            .then(res => setData(res.data))
          },[])

    return (
        <div className='p-10 '>
             <h2 className='uppercase font-semibold text-green-300'>Our All Services</h2>
            <h2 className='uppercase font-bold my-3'>We provide BestWeb design<br /> services</h2>
            <div className="grid grid-cols-2 gap-8 p-20">
                {data.map((data, index) => (
                    <div key={data.name} className={`bg-white p-6 rounded-lg shadow-md ${index > 1 ? 'mt-8' : ''}`}>
                        <h2 className="text-xl font-bold mb-2">{data.caption}</h2>
                        <p className="text-sm text-gray-600 mb-4">{data.description}</p>
                        <div className="flex">
                            <img src={data.img1} alt={`Card Photo`} className="w-96 h-40" />
                            <img src={data.img2} alt={`Card Photo`} className="w-36 h-40" />
                        </div>
                        <div className="flex">
                            <img src={data.img3} alt={`Card Photo`} className="w-64 h-72" />
                            <img src={data.img4} alt={`Card Photo`} className="w-64 h-72" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;