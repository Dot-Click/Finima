import React from "react";

const WorkLogCard = ({ data }) => {
  return (
    <div className="flex items-center justify-between p-4 border border-[#AC9475] rounded-lg">
      <div>
        <p className="text-xl font-outfit font-semibold text-zinc-800">
          {data?.time}
        </p>
        <p className="text-slate-400 font-outfit font-normal">{data?.label}</p>
      </div>
      <div className="p-3 rounded-full bg-[#FFFCF0]">{data?.icon}</div>
    </div>
  );
};

export default WorkLogCard;
