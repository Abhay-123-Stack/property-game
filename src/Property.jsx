/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
    <section className="property-container">
      <figure className="property-figure">
        <img
          src={`asset/${image}`}
          alt={name}
        />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="property-details">
        <p className="property-values">
          Count: {level} Rent: {rent} Price: {cost.toFixed(2)}
        </p>
        {(isRented || auto) && (
          <div className="property-indicator">
            <span className="property-timer">
              <span>Elaspe: {tmp.toFixed(1)}</span>
              <span>Time: {time}</span>
            </span>
            <progress
              max={time}
              value={tmp}
              className="progress-bar"
            />
          </div>
        )}
      </div>
      <p className="property-controls-container">
        {isRented ? (
          "Please Wait !"
        ) : (
          <>
            <button
              className="property-control btn-buy"
              onClick={onBuy}>
              Buy
            </button>
            {Boolean(level) && !auto && (
              <>
                <button
                  className="property-control btn-rent"
                  onClick={onRent}>
                  Rent
                </button>
                <button
                  className="property-control btn-manage"
                  onClick={onManage}>
                  Manage
                </button>
              </>
            )}
          </>
        )}
      </p>
    </section>
  );
}

export default Property;
{
  /*  */
}
