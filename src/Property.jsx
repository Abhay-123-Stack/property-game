/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Property({ time, rent, amount, money, setMoney, name, image }) {
  const [level, setLevel] = useState(0);
  const [cost, setCost] = useState(amount);
  const [inc, setInc] = useState(1.05);
  const [auto, setAuto] = useState(false);
  const [tmp, setTmp] = useState(0);
  const [isRented, setIsRented] = useState(false);

  const onBuy = () => {
    if (money >= cost) {
      setMoney(money - cost);
      setLevel(level + 1);
      setCost(cost * inc);
      setInc(inc + 0.05);
    }
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
            Promise.resolve().then(() => setMoney(money + rent));

            return 0;
          }
          return prevTmp + 0.1;
        });
      }, 100);
      return () => clearInterval(iid);
    }
  }, [isRented, time, rent, money, setMoney]);

  const onManage = () => {
    if (money >= rent * 20) {
      setMoney(money - rent * 20);
      setAuto(true);
    }
  };

  useEffect(() => {
    if (auto) {
      const iid = setInterval(() => {
        setTmp((prevTmp) => {
          if (prevTmp > time) {
            setMoney(money + rent);
            Promise.resolve().then(() => setMoney(money + rent));
            return 0;
          }
          return prevTmp + 0.1;
        });
      }, 100);
      return () => clearInterval(iid);
    }
  }, [auto, time, money, rent, setMoney]);

  return (
    <>
      <figure>
        <img src={`asset/${image}`} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <div>
        <p>
          level: {level} time: {time} rent: {rent} cost: {cost} inc: {inc} auto:{" "}
          {String(auto)} tmp: {tmp.toFixed(2)}
        </p>
        {(isRented || auto) && (
          <progress max={time} value={tmp} className="progress-bar" />
        )}
      </div>
      {isRented ? (
        <p>Please Wait !</p>
      ) : (
        <p>
          <button onClick={onBuy}>Buy</button>
          {Boolean(level) && !auto && (
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

export default Property;
