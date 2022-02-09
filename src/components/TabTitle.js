import React from "react"

function TabTitle(props) {
  const { isActive, number, onClick } = props;
  return (
    <div className="tab-title-wrapper cursor-pointer" onClick={onClick}>
      <h1 className={isActive ? "" : "opacity-30"}>
        {number}
      </h1>
    </div>
  );
}

export default TabTitle;
