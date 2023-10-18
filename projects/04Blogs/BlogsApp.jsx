import React, { useState } from "react";
import Title from "../src/components/Title";
import Button from "../src/components/buttons/Button";
import "./BlogsApp.css";
function BlogsApp() {
  let array = ["ram", "Mohan", "Sohan"];
   const [testimonial, setTestimonial] = useState ("")

  return (
    <div className="main">
      <Title title={"Blogs App"} />
      <div className="container-btn">
        <Button name={"blogs"} bgColor={"bg-info"} />
        <Button name={"comment"} bgColor={"bg-warning"}  />
        <Button name={"title"} bgColor={"bg-danger"}  />
      </div>
      <h2>{testimonial} </h2>
      {(array == null)
      ? (<h2> "your data will be displayed here" </h2>)
        : array.map((data) => {
            return (
              <div className="table" key={Math.random()}>
                <p>{data} </p>
              </div>
            );
          })}
     </div>
  );
}

export default BlogsApp;
