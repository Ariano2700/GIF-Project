import React from "react";
import { useState } from "react";

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const searchGIF = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    setCategory(value);
    setValue("");
    //console.log("enter uwu");
  };
  return (
    <>
      <h2 className="mb-3 text-2xl text-slate-800 font-bold">
        Add GIF name to search
      </h2>
      <form onSubmit={searchGIF}>
        <input
          className="px-3 py-5 outline-none border-black w-72 rounded-3xl shadow-md h-3"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
      </form>
      {error ? (
        <p className="text-red-600">El campo no puede estar vacio</p>
      ) : (
        <p className="mt-6 font-bold text-lg">Start searching for your favorite GIFs</p>
      )}
    </>
  );
};

export default AddCategory;
