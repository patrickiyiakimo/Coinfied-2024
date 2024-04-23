import React from "react";
import video from "../video/stock-footage-financial-analyst-working-on-a-computer-with-multi-monitor-workstation-with-real-time-stocks.webm";

const MyPlayer = () => {
  return (
    <div className=" pl-10 bg-gray-800">
      <video
        autoplay
        muted
        width="850"
        height="600"
        controls
        className="rounded mt-10 pb-5 pt-20 ml-60"
      >
        <source src={video} type="video/mp4" />
      </video>
      <p className="text-white pb-5 text-center">Video gotten from Shutterstock</p>
    </div>
  );
};

export default MyPlayer;
