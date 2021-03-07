import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One Punch Man"]);

  // const handleAdd = () => setCategories([...categories, "owo"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((c) => (
          <GifGrid  key={ c } category={c} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
