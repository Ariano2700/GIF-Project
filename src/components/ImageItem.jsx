import React from "react";

const ImageItem = ({ title, url }) => {
  const goTo = () =>{
    window.open(url,'_blank')
  }
  return (
    <div>
      <img className="rounded-2xl shadow-sm w-72 h-72 object-cover cursor-pointer" src={url} alt={title} onClick={goTo} />
      <p>{title}</p>
    </div>
  );
};
export default ImageItem;
