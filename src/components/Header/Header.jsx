import React from "react";
import {editIcon, headerModificationHistoryIcon, fullScreenIcon,previewIcon,tickIcon} from '../../utils/imageMapper'

const Header = () => {
  return (
    <section className="w-full h-[74px] pl-6 pr-6 flex justify-between bg-white">
      <div className="flex justify-between gap-6 items-center">
        <p className="h-[19px] font-inter text-[12px] font-semibold leading-[14.52px] text-left">
          Detected Industry:{" "}
          <span className="font-inter text-[16px] font-semibold leading-[19.36px] text-left">
            IT
          </span>{" "}
        </p>
        <p className="h-[19px] font-inter text-[12px] font-semibold leading-[14.52px] text-left">
          Change industry to:{" "}
          <span className="font-inter text-[16px] font-semibold leading-[19.36px] text-left text-[#00653B]">
            Sales
          </span>
        </p>
      </div>

      <div className=" flex items-center gap-4">
        <img src={editIcon} alt="edit" />
        <img src={headerModificationHistoryIcon} alt="edit" />
      </div>
      <div className="flex items-center gap-4">
        <button
          className=" pt-3 pb-3 pl-4 pr-4 rounded-lg flex items-center gap-1"
          style={{ border: "1px solid #C8C8C8" }}
        >
          <img src={previewIcon} alt="icon" />
          <span>Preview</span>
        </button>
        <button
          className=" pt-3 pb-3 pl-4 pr-4 rounded-lg flex items-center gap-1"
          style={{ border: "1px solid #C8C8C8" }}
        >
          <img src={tickIcon} alt="icon" />
          <span>Save Demo</span>
        </button>
        <button>
          <img src={fullScreenIcon} alt="icon" />
        </button>
      </div>
    </section>
  );
};

export default Header;
