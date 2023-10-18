import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import LikeButtonApp from "../03LikeButton/LikeButtonApp";
import BlogsApp from "../04Blogs/BlogsApp";

function App() {
  return (
    <>
      <div className="main">
       {/* <LikeButtonApp /> */}
       <BlogsApp />
       
      </div>
    </>
  );
}

export default App;
