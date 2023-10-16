import "./App.css";
import { useState } from "react";

function App() {
  
  // Step State
  const [steps, setSteps] = useState(1);

  const incrementSteps = () => {
    setSteps((prevStep) => prevStep + 1);
  };

  const decrementSteps = () => {
    if (steps === 1) {
      return;
    }
    setSteps((prevStep) => prevStep - 1);
  };

  // Counter and Date State
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const incrementCountAndDate = () => {
    setCount((prevCount) => prevCount + steps);
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + steps);
    setDate(newDate);
    // console.log(newDate.toLocaleDateString());
  };

  const decrementCountAndDate = () => {
    setCount((prevCount) => prevCount - steps);
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - steps);
    setDate(newDate);
    // console.log(newDate.toLocaleDateString());
  };

  return (
    <>
      <div className="mainContainer">
        <div className="box">
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={decrementSteps}>-</button>
            <p style={{ display: "flex" }}>
              Steps: <span className="count">{steps}</span>
            </p>
            <button onClick={incrementSteps}>+</button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <button onClick={decrementCountAndDate}>-</button>
            <p style={{ display: "flex" }}>
              Count: <span className="count">{count}</span>
            </p>
            <button onClick={incrementCountAndDate}>+</button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <div>
              <div>
                <p style={{ display: "flex" }}>
                  <span className="count">{count}</span>
                  days from today is
                </p>
              </div>
              <div>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  <span className="date">{days[date.getDay()]},</span>
                  <span className="date">{months[date.getMonth()]}</span>
                  <span className="date">{date.getDate()},</span>
                  <span className="date">{date.getFullYear()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
