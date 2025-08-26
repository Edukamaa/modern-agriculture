import React, { useState } from "react";
import "./FarmScores.css";

const FarmScores = () => {
  const [product, setProduct] = useState("");
  const [expenditure, setExpenditure] = useState("");
  const [yieldAmount, setYieldAmount] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const totalIncome = yieldAmount * price;
    const profit = totalIncome - expenditure;

    setResult({
      product,
      totalIncome,
      profit,
    });
  };

  return (
    <div className="farm-scores-container">
      <h2>Farm Income & Profit Calculator (Kenya)</h2>
      <form className="farm-form" onSubmit={calculate}>
        <label>Type of Farm Product</label>
        <input
          type="text"
          placeholder="e.g. Milk, Maize, Coffee"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />

        <label>Total Expenditures (KES)</label>
        <input
          type="number"
          placeholder="Enter total costs in KES"
          value={expenditure}
          onChange={(e) => setExpenditure(e.target.value)}
          required
        />

        <label>Yield (in units e.g. litres, kg, bags, crates)</label>
        <input
          type="number"
          placeholder="Enter yield"
          value={yieldAmount}
          onChange={(e) => setYieldAmount(e.target.value)}
          required
        />

        <label>Current Market Price (KES per unit)</label>
        <input
          type="number"
          placeholder="Enter price per unit"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div className="result-card">
          <h3>Results for {result.product}</h3>
          <p>
            <strong>Total Income:</strong> KES {result.totalIncome.toLocaleString()}
          </p>
          <p className={result.profit >= 0 ? "profit" : "loss"}>
            <strong>{result.profit >= 0 ? "Profit" : "Loss"}:</strong> KES{" "}
            {result.profit.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default FarmScores;
