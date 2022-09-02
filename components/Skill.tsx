import React from "react";

interface IProps {
  skillName: string;
  onClick?: (skill: string) => void;
}

function Skill({ skillName, onClick }: IProps) {
  return (
    <div
      onClick={() => {
        onClick?.(skillName);
      }}
      className="inline-block cursor-pointer px-5 py-1 rounded-md text-md font-pop border bg-white"
    >
      {skillName}
    </div>
  );
}

export default Skill;
