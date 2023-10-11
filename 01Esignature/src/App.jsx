import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");

  // const namehandler = (e)=> {
  //   setname(e.target.value)
  // }
  // function dobHandler() {
  //   console.log('dob handler run...');

  // }
  return (
    <>
      <div className="container">
        <Title title={name} dob={dob} classes="main-heading" />
        <p className="box">
          This is a verty sipmle react project. This is the starting of my React
          practice so just appreciate me to have a long journe ahead. In this
          journey you can simply help me by just inputtin your name in the text
          box and date of birth from date select option
        </p>
        <footer>
          <input
            type="text"
            placeholder="your name please!"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => {
              setdob(e.target.value);
            }}
          />
          {/* <input type="file" name="photo" id="" /> */}
        </footer>
      </div>
    </>
  );
}

export default App;
