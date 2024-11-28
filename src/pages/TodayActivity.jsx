import React from "react";
import Map from "../components/common/Map";

const TodayActivity = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <p className="font-semibold text-xl 2xl:text-2xl font-outfit text-zinc-800">
        Activity of 11/24/204
      </p>
      <p className="text-slate-400 text-sm font-outfit">
        Monitor Your Team's Live Activity and Locations
      </p>
      <div className="mt-2 ">
        <Map />
      </div>
    </div>
  );
};

export default TodayActivity;
