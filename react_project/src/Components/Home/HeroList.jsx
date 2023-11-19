import React from "react";

export const HeroList = () => {

  //this is from anima
  //line 9 <div className="absolute w-[1440px] h-[120px] top-[683px] left-0 bg-[#f7fff8]">
  //w-full max-w-[1239px] mt-16 mb-20 max-md:max-w-full max-md:my-10"
  //relative w-[1440px] h-[837px]
  //
  return (
    <> 
    <div className="relative w-full h-[700px] bg-white [background:linear-gradient(180deg,rgb(214.76,245.44,219.67)_0%,rgb(214.76,245.44,219.67)_100%)]">
      
      <div className="inline-flex flex-col items-start gap-[50px] absolute top-[185px] left-[102px]">
        <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
          <p className="relative w-[550px] mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[50px] tracking-[0] leading-[65px]">
            Increase Your Customers Loyalty and Satisfaction
          </p>
          <p className="relative w-[472px] [font-family:'Avenir-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
            We help businesses like yours earn more customers, standout from competitors,&nbsp;&nbsp;make more money
          </p>
        </div>
        <button className="inline-flex items-center shadow hover:shadow-[0_0_10px_black] justify-center gap-[10px] px-[30px] py-[20px] relative flex-[0_0_auto] bg-[#20b15a] rounded-[16px] all-[unset] box-border">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[20px]  tracking-[0] leading-[normal]">
            Get Started
          </div>
        </button>
      </div>


      <div className="absolute w-[606px] h-[457px] top-[146px] left-[733px]">
        <img
          className="w-[408px] h-[271px] top-0 left-0 absolute object-cover"
          alt="Rectangle"
          src="images/pic_card_1.png"
        />
        <img
          className="w-[246px] h-[164px] top-[293px] left-0 absolute object-cover"
          alt="Rectangle"
          src="images/pic_card_3.png"
        />
        <img
          className="w-[345px] h-[164px] top-[293px] left-[261px] absolute object-cover"
          alt="Rectangle"
          src="images/pic_card_4.png"
        />
        <img
          className="w-[180px] h-[271px] top-0 left-[426px] absolute object-cover"
          alt="Rectangle"
          src="images/pic_card_2.png"
        />
      </div>
     

    </div>
    <div className=" bg-[#f7fff8] h-28 left-0">
            <div className="flex flex-row justify-evenly  p-10">
              
                    <img src="images/Notion.png" alt="Notion" />
                    <img src="images/Slack.png " alt="Slack" />
                        <img src="images/logos_google.png" alt="" />
                        <img src="images/Trello-logo-blue 1.png" alt=" " />
                        <img src="images/logos_monday.png" alt="" />

                        

               </div>
            </div>
        
            <div className=" bg-green-100 h-28 ">
           
            </div>
    </>
  );
};
export default HeroList;

/*
<div className="flex flex-col lg:flex-row justify-around rounded-md overflow-hidden mx-4 my-8 lg:mx-auto lg:w-3/4 xl:w-full p-15  bg-[#f7fff8]">
        <div className="relative w-[1182px] h-[31px] top-[44px] left-[115px]">
          <img className="absolute w-[157px] h-[29px] top-0 left-[531px]" alt="Logos monday" src="logos-monday.png" />
          <img className="absolute w-[89px] h-[29px] top-[2px] left-0" alt="Logos google" src="logos-google.png" />
          <img
            className="absolute w-[142px] h-[29px] top-[2px] left-[239px] object-cover"
            alt="Trello logo blue"
            src="trello-logo-blue-1.png"
          />
          <img
            className="absolute w-[80px] h-[29px] top-[2px] left-[838px] object-cover"
            alt="Notion"
            src="notion.png"
          />
          <img
            className="absolute w-[114px] h-[29px] top-[2px] left-[1068px] object-cover"
            alt="Slack"
            src="slack.png"
          />
        </div>
      </div>

*/