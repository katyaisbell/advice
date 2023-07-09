import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <h1>{advice}</h1>
      <button className="btn" onClick={getAdvice}>
        Get advice
      </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>
        You have read <strong>{props.count}</strong> pieces of advice
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
