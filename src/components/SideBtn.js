import React from "react";

const SideBtn = ({ icon, title }) => {
  return (
    <div className="text-white flex items-center gap-2">
      {icon}
      <p>{title}</p>{" "}
    </div>
  );
};

export default SideBtn;
