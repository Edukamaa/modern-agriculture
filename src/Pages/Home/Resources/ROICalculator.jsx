import React, { useState } from "react";
import "./ROICalculator.css";

const ROICalculator = () => {
  const [investment, setInvestment] = useState("");
  const [returns, setReturns] = useState("");
  const [roi, setRoi] = useState(null);

  const calculateROI = (e) => {
    e.preventDefault();
    if (investment && returns) {
      const roiValue = ((returns - investment) / investment) * 100;
      setRoi(roiValue.toFixed(2));
    }
  };

  return (
    <div className="roi-container">
      <h1>📊 ROI Calculator for Farmers</h1>
      <p className="intro">
        Return on Investment (ROI) helps you measure how profitable your farm
        project is. It tells you whether your money is growing or shrinking.
      </p>

      <div className="roi-info">
        <h2>💡 Why ROI Matters in Agriculture?</h2>
        <ul>
          <li>Evaluate profitability of crops, livestock, or poultry.</li>
          <li>Compare different farming methods and technologies.</li>
          <li>Plan budgets and forecast future growth.</li>
          <li>Identify areas where costs can be reduced.</li>
        </ul>
      </div>

      <div className="roi-form-section">
        <h2>🔢 Calculate Your ROI</h2>
        <form onSubmit={calculateROI} className="roi-form">
          <label>
            Initial Investment (KES):
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="Enter amount invested"
              required
            />
          </label>
          <label>
            Returns (KES):
            <input
              type="number"
              value={returns}
              onChange={(e) => setReturns(e.target.value)}
              placeholder="Enter amount earned"
              required
            />
          </label>
          <button type="submit">Calculate ROI</button>
        </form>

        {roi !== null && (
          <div className="roi-result">
            <h3>✅ Your ROI is: {roi}%</h3>
            {roi > 0 ? (
              <p className="positive">
                Great! Your investment is profitable 🎉
              </p>
            ) : (
              <p className="negative">
                ⚠️ Your project made a loss. Consider adjusting strategies.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="roi-details">
        <h2>📘 ROI Formula</h2>
        <p>
          <strong>ROI = (Net Profit ÷ Investment Cost) × 100</strong>
        </p>
        <p>
          Example: If you invested <b>KES 100,000</b> in poultry farming and
          earned <b>KES 140,000</b>, your ROI is:
        </p>
        <pre>(140,000 - 100,000) ÷ 100,000 × 100 = 40%</pre>
      </div>

      <div className="roi-tips">
        <h2>🌱 Tips to Improve ROI</h2>
        <ul>
          <li>Adopt modern farming techniques (irrigation, greenhouses).</li>
          <li>Use disease-resistant seeds and healthy breeds.</li>
          <li>Access better markets to sell at higher prices.</li>
          <li>Cut unnecessary expenses like overuse of fertilizers.</li>
          <li>Invest in renewable energy to reduce long-term costs.</li>
        </ul>
      </div>
    </div>
  );
};

export default ROICalculator;
