import React from "react";
import "./Markets.css";

const Markets = () => {
  return (
    <div className="markets-container">
      <h1 className="markets-title">Agricultural Markets</h1>
      <p className="markets-intro">
        Understanding agricultural markets is key to maximizing profitability.
        Farmers and agribusinesses must balance domestic needs with
        opportunities in international markets. By monitoring demand, seasonal
        trends, and trade policies, stakeholders can make informed decisions
        that improve returns and sustainability.
      </p>

      {/* Domestic Markets */}
      <section className="markets-section">
        <h2>Domestic Markets</h2>
        <p>
          The domestic market provides a stable foundation for agricultural
          producers. Farmers can directly supply households, schools,
          supermarkets, and processing factories. In Kenya (and Africa broadly),
          staple crops like maize, beans, potatoes, and rice remain in high
          demand year-round. However, pricing fluctuates depending on rainfall,
          harvest cycles, and transport availability.
        </p>
        <ul>
          <li>
            <strong>High Demand Periods:</strong> December–March (dry season,
            less production, higher prices).
          </li>
          <li>
            <strong>Low Demand Periods:</strong> Immediately after harvest (June
            – September) when supply is high and prices fall.
          </li>
          <li>
            <strong>Opportunities:</strong> Value addition (flour, animal feeds,
            packaged vegetables) increases margins even in low-price seasons.
          </li>
        </ul>
      </section>

      {/* Foreign/Export Markets */}
      <section className="markets-section">
        <h2>Foreign & Export Markets</h2>
        <p>
          Export markets provide farmers with access to premium prices, but they
          require strict quality standards and certifications. Fresh produce,
          coffee, tea, flowers, and avocados dominate Kenya’s agricultural
          exports. Emerging opportunities exist in nuts, organic produce, and
          processed foods.
        </p>
        <ul>
          <li>
            <strong>Top Export Crops:</strong> Tea, coffee, avocados, cut
            flowers, macadamia, mangoes.
          </li>
          <li>
            <strong>Export Standards:</strong> GAP (Good Agricultural Practices),
            organic certification, traceability (blockchain increasingly used).
          </li>
          <li>
            <strong>High-Peak Months:</strong> European winter (November –
            February) sees high demand for fresh vegetables and flowers.
          </li>
        </ul>
      </section>

      {/* Seasonal Market Variations */}
      <section className="markets-section">
        <h2>Seasonal Variations & Peak Trends</h2>
        <p>
          Agricultural prices move in cycles. Farmers who align production with
          off-peak demand maximize profits. For example, poultry meat and eggs
          rise in December due to festive seasons, while vegetables peak in
          January–March due to scarcity. Export markets for fruits and flowers
          peak during European and Middle Eastern winter months.
        </p>
        <ul>
          <li>
            <strong>Poultry & Meat:</strong> Peak in December (festive demand).
          </li>
          <li>
            <strong>Vegetables:</strong> January–March (scarcity pushes prices
            up).
          </li>
          <li>
            <strong>Milk:</strong> Lower prices in rainy season (May–July, more
            pasture).
          </li>
          <li>
            <strong>Grains:</strong> Best sold 2–3 months after harvest when
            household stocks reduce.
          </li>
        </ul>
      </section>

      {/* Profit Maximization */}
      <section className="markets-section">
        <h2>Strategies for Maximizing Profits</h2>
        <p>
          To succeed in both domestic and foreign markets, farmers should not
          only grow crops but also think strategically. Observing supply-demand
          cycles, adding value, and using technology can make a huge difference.
        </p>
        <ul>
          <li>
            <strong>Market Timing:</strong> Store grains in warehouses and sell
            when prices rise rather than immediately after harvest.
          </li>
          <li>
            <strong>Cooperatives:</strong> Farmers pooling resources sell in
            bulk at better prices and reduce transport costs.
          </li>
          <li>
            <strong>Digital Platforms:</strong> Use apps and online platforms to
            connect directly with buyers, avoiding middlemen.
          </li>
          <li>
            <strong>Export Partnerships:</strong> Link with exporters to access
            international buyers who pay premium rates.
          </li>
          <li>
            <strong>Value Addition:</strong> Milling, drying, packaging, and
            branding products significantly improve margins.
          </li>
        </ul>
      </section>

      {/* Future Market Trends */}
      <section className="markets-section">
        <h2>Future Market Trends</h2>
        <p>
          The future of agricultural trade lies in technology, sustainability,
          and global demand for traceable, organic, and climate-smart products.
          Farmers who adapt early will benefit most.
        </p>
        <ul>
          <li>
            <strong>Organic Farming:</strong> Growing demand in Europe, USA, and
            Asia.
          </li>
          <li>
            <strong>Climate-Smart Agriculture:</strong> Crops resilient to
            drought and floods will dominate.
          </li>
          <li>
            <strong>Agri-Tech Platforms:</strong> E-commerce and mobile apps
            enabling farmers to sell directly to global buyers.
          </li>
          <li>
            <strong>Blockchain & Traceability:</strong> Buyers want proof of
            origin and safety of products.
          </li>
          <li>
            <strong>Export Diversification:</strong> Beyond tea & coffee,
            growing interest in nuts, herbs, and processed foods.
          </li>
        </ul>
      </section>

      <footer className="markets-footer">
        <p>
          By observing market cycles, diversifying crops and livestock, and
          embracing innovation, farmers can consistently improve income while
          securing long-term sustainability.
        </p>
      </footer>
    </div>
  );
};

export default Markets;
