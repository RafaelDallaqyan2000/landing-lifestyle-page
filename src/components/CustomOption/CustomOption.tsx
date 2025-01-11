import React from "react";

export type OptionType = {
  option: {
    value: string;
    label: string;
  };
};

export function CustomOption({ option }: OptionType) {
  return (
    <li className="navbar-option" value={option.value}>
      <span>{option.label}</span>
      <img src={require("../../images/B.svg").default} />
    </li>
  );
}
