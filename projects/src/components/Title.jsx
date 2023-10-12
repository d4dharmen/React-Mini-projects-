import React from "react";

export default function Title({ title, dob, classes }) {
  return (
    <div>
      <h1 className={!classes ? "sub-heading" : classes}>
        {!title ? "Dharmendra welcome you" : title}
      </h1>
     
    </div>
  );
}
