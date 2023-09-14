import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(3);
  const [rent, setRent] = useState(2);
  const [cost, setCost] = useState(5);
  const [inc, setInc] = useState(1.05);
  const [intId, setIntId] = useState(-1);
  const [auto, setAuto] = useState(false);
  const [tmp, setTmp] = useState(0);
  const [isRented, setIsRented] = useState(false);

  const onBuy = () => {
    setLevel(level + 1);
    setCost(cost * inc);
    setInc(inc + 0.05);
  };

  const onRent = () => {
    setIsRented(true);
  };
  useEffect(() => {
    if (isRented) {
      const iid = setInterval(() => {
        setTmp((prevTmp) => {
          if (prevTmp > time) {
            setIsRented(false);
            return 0;
          }
          return prevTmp + 0.1;
        });
      }, 100);
      return () => clearInterval(iid);
    }
  }, [isRented, time]);

  const onManage = () => {};

  return (
    <>
      <figure>
        <img
          src="asset/01.png"
          alt="Normal House"
        />
        <figcaption>Normal House</figcaption>
      </figure>
      <div>
        <p>
          level: {level} time: {time} rent: {rent} cost: {cost} inc: {inc} intId:{" "}
          {intId} auto: {String(auto)} tmp: {tmp.toFixed(2)}
        </p>
        {isRented && (
          <progress
            max={time}
            value={tmp}
            className="progress-bar"
          />
        )}
      </div>
      {isRented ? (
        <p>Please Wait !</p>
      ) : (
        <p>
          <button onClick={onBuy}>Buy</button>
          {Boolean(level) && (
            <span>
              <button onClick={onRent}>Rent</button>
              <button onClick={onManage}>Manage</button>
            </span>
          )}
        </p>
      )}
    </>
  );
}

export default App;
