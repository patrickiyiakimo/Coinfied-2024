import React from "react";
import video from "../video/stock-footage-financial-analyst-working-on-a-computer-with-multi-monitor-workstation-with-real-time-stocks.webm";

const MyPlayer = () => {
  return (
    <div className=" pt-1 p-4 md:pl-10 bg-gray-900">
      <video
        autoplay
        muted
        width="850"
        height="600"
        controls
        className=" mt-10 md:pb-5 md:pt-10 md:ml-60 rounded"
      >
        <source src={video} type="video/mp4" />
      </video>
      <p className="text-white pb-5 text-center">
        Video gotten from Shutterstock
      </p>
    </div>
  );
};

export default MyPlayer;
