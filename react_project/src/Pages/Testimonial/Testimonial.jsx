import { useEffect, useState } from "react";
import axios from "axios";


 const Testimonial = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
        .get('./database/employeeData.json')
        .then(res => setData(res.data))
      },[])

   
  return (
    <div className='p-10'>
      <h2 className='uppercase font-semibold text-green-300'>All PROJECT</h2>
      <h2 className='uppercase font-bold my-3'>Better Agency/SEO solution At<br />Your Fingertips</h2>
      <div className="grid grid-cols-3 gap-4 p-10">
        {data.map((data) => (
          <div key={data.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={data.imagePath}
              alt={data.name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="text-sm text-gray-600 mb-2">{data.description}</p>
            <h3 className="text-lg font-bold mb-1">{data.name}</h3>
            <p className="text-sm text-gray-500">{data.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;