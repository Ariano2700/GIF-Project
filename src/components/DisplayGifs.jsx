import React from "react";
import apiUse from "../hooks/apiUse.js";
import ImageItem from "./ImageItem.jsx";
export function DisplayGifs({ category }) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    import.meta.env.VITE_SECRET_KEY
  }&q=${category}&limit=25`;
  const { loading, data } = apiUse(url);
  return (
    <div className="flex gap-6 flex-wrap mt-10 justify-center px-0 py-2">
      {loading
        ? data.map((img) => {
            return (
              <ImageItem
                key={img.id}
                title={img.title}
                url={img.images.downsized_medium.url}
              />
            );
          })
        : ""}
    </div>
  );
}
