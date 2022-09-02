import React from "react";
import Skill from "./Skill";

interface IProps {
  icon: React.ReactNode;
  text?: string;
  onClick: () => void;
}

function IconButton({ icon, text, onClick }: IProps) {
  return (
    <a className="w-max flex items-center gap-2 py-1 rounded-md px-2 bg-green-500 text-white select-none">
      <div className="font-pop">{text}</div>
      <div onClick={onClick} className="text-xl cursor-pointer">
        {icon}
      </div>
    </a>
  );
}

export default IconButton;
