import React from "react";
import RightItemTop from "./RightItemTop";
import ProfileImg from "./ProfileImg";

function TopSection() {
  return (
    <div className="flex flex-row pdl:flex-col-reverse w-full gap-4">
      <ProfileImg />
      <RightItemTop />
    </div>
  );
}

export default TopSection;