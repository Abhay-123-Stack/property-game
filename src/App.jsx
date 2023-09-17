import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Property from "./Property";

function App() {
  const [money, setMoney] = useState(10);
  const PropertyAsset = [
    { time: 3, rent: 2, amount: 5, name: "Small House", image: "00.png" },
    { time: 6, rent: 5, amount: 10, name: "Normal House", image: "01.png" },
    { time: 9, rent: 10, amount: 20, name: "Large House", image: "02.png" },
    { time: 12, rent: 20, amount: 40, name: "Appartment", image: "03.png" },
    { time: 15, rent: 40, amount: 80, name: "Car Garage", image: "04.png" },
    { time: 18, rent: 80, amount: 160, name: "Car Wash", image: "05.png" },
    { time: 21, rent: 160, amount: 320, name: "Small House", image: "06.png" },
    { time: 24, rent: 320, amount: 640, name: "Normal House", image: "07.png" },
    {
      time: 27,
      rent: 640,
      amount: 1280,
      name: "Normal House",
      image: "08.png",
    },
    {
      time: 30,
      rent: 1280,
      amount: 2560,
      name: "Normal House",
      image: "09.png",
    },
    {
      time: 33,
      rent: 2560,
      amount: 5120,
      name: "Normal House",
      image: "10.png",
    },
    {
      time: 36,
      rent: 5120,
      amount: 10240,
      name: "Normal House",
      image: "11.png",
    },
    {
      time: 39,
      rent: 10240,
      amount: 20480,
      name: "Normal House",
      image: "12.png",
    },
    {
      time: 42,
      rent: 20480,
      amount: 40960,
      name: "Normal House",
      image: "13.png",
    },
    {
      time: 45,
      rent: 40960,
      amount: 81920,
      name: "Normal House",
      image: "14.png",
    },
    {
      time: 48,
      rent: 81920,
      amount: 163840,
      name: "Normal House",
      image: "15.png",
    },
    {
      time: 51,
      rent: 163840,
      amount: 327680,
      name: "Normal House",
      image: "16.png",
    },
    {
      time: 54,
      rent: 327680,
      amount: 655360,
      name: "Normal House",
      image: "17.png",
    },
    {
      time: 57,
      rent: 655360,
      amount: 1310720,
      name: "Normal House",
      image: "18.png",
    },
    {
      time: 60,
      rent: 1310720,
      amount: 2621440,
      name: "Normal House",
      image: "19.png",
    },
  ];
  return (
    <>
      <p> Money : {money} </p>
      {PropertyAsset.map((property) => {
        console.log(property.name);
        return (
          <Property
            key={property.name}
            {...property}
            money={money}
            setMoney={setMoney}
          />
        );
      })}
    </>
  );
}

export default App;
