import React, { useRef } from "react";
import { CustomOption } from "../CustomOption/CustomOption.tsx";
import "./customSelectStyles.css";

type OptionType = {
  value: string;
  label: string;
};

export function CustomSelect({ section }: any) {
  const selectRef = useRef(null);
  const isMobile = true;

  return (
    <div ref={selectRef} className="navbar-section-container">
      <div>
        <h4>{section.selectName}</h4>
        <img src={require("../../images/V.svg").default} />
      </div>
      <ul className={`options-section ${isMobile && "is-mobile-options"}`}>
        {section?.options.map((option: OptionType, i: number) => (
          <CustomOption key={option.value + i} option={option} />
        ))}
      </ul>
    </div>
  );
}
