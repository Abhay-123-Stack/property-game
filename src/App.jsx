import { useState } from "react";
import Property from "./Property";
import PropertyAsset from "./propertyAssets";
import "./App.css";

function App() {
  const [money, setMoney] = useState(10);

  return (
    <>
      <div className="money-container">
        <h1 className="money-h1">Money: {money.toFixed(2)} </h1>
      </div>
      {PropertyAsset.map((property) => (
        <Property
          key={property.name}
          {...property}
          money={money}
          setMoney={setMoney}
        />
      ))}
    </>
  );
}

export default App;
