import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import { DisplayGifs } from "./components/DisplayGifs";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <section className="text-center mt-3">
        <AddCategory setCategory={setCategory} />
        <DisplayGifs category={category}/>
      </section>
    </>
  );
}

export default App;
