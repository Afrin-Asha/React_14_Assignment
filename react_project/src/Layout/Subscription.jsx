import * as React from "react";

function Subscribe() {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-20 max-md:px-5">
      <div className="text-green-500 text-2l font-medium leading-8 uppercase whitespace-nowrap mt-24 max-md:mt-10">
        SUBSCRIBE
      </div>
      <div className="text-black text-center text-3xl font-semibold leading-10 capitalize max-w-[495px] mt-6 max-md:max-w-full">
        Subscribe to get the latest news about us
      </div>
      <div className="text-zinc-500 text-center text-base font-medium leading-6 capitalize whitespace-nowrap mt-1.5 max-md:max-w-full">
        Please drop your email below to get daily update about what we do
      </div>
      <div className="items-center border flex w-[596px]  justify-between gap-5 mt-10 mb-28 pl-2 pr-1.5 py-1.5 rounded-2xl border-solid border-black max-md:flex-wrap max-md:mb-10">
        {/* <div className="text-zinc-500 text-base leading-6 my-auto">
          Enter Your Email Adress
        </div>
        <div className="text-white text-base font-medium leading-8 whitespace-nowrap justify-center items-center bg-orange-600 self-stretch grow px-5 py-4 rounded-2xl">
          Subscribe
        </div> */}
        {/* <div className="flex items-center"> */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-l-md p-2 border w-[596px]  border-r-0 border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button className=" bg-orange-600 w-[250px]  text-white justify-end rounded-r-lg rounded-l-lg p-2 px-3   py-2  hover:bg-orange-700 ">
                            Subscribe
                        </button>
                    {/* </div> */}
      </div>
    </div>
  );
}

export default Subscribe;
