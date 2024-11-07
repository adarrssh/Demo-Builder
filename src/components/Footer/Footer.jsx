import React from "react";
import researchIcon from "../../assets/svg/researchIcon.svg";
import outlineIcon from "../../assets/svg/outlineIcon.svg";


const Footer = () => {
  return (
    <section className="w-full h-[74px] pl-3 pr-3 flex justify-between bg-white">
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center p-6 rounded-xl bg-[#CFE6F6]"
        >
            <img src={researchIcon} alt="reasearch" />
        </button>
        <button
            className="flex items-center justify-center p-6 rounded-xl bg-[#CFE6F6]"
            style={{background: "linear-gradient(272.45deg, #CFC6F8 0%, #EFECFE 95.54%)"}}

        >
            <img src={outlineIcon} alt="outline" />
        </button>
      </div>
      <div className="flex items-center">
        <button
            className="pt-3 pb-3 pr-8 pl-8 text-white rounded-[100px]"
            style={{
                background: `linear-gradient(0deg, #007B79, #007B79), radial-gradient(84.42% 513.54% at 88.66% 23.27%, rgba(67, 237, 146, 0.45) 0%, rgba(1, 121, 121, 0) 85.44%)`
            }}
        >
            <p className="font-dm-sans text-[20px] font-bold leading-[20px] text-left">Smart Assist</p>
        </button>
      </div>
    </section>
  );
};

export default Footer;
