import React from "react";
import "./AgriInputs.css";
import { FaSeedling, FaTractor, FaFlask, FaWrench, FaWarehouse, FaTree } from "react-icons/fa";

const AgriInputs = () => {
  return (
    <section className="agriInputs">
      <div className="container">
        <h2 className="title">Agricultural Inputs & Resources</h2>
        <p className="subtitle">
          Access to the right agricultural inputs is the foundation of successful farming. 
          From seeds to technology, here’s a breakdown of essential inputs that modern farmers rely on.
        </p>

        <div className="inputsGrid">
          <div className="inputCard">
            <FaSeedling className="icon" />
            <h3>Quality Seeds</h3>
            <p>
              Improved seed varieties increase yields, resist pests, and adapt to climate change.
              Hybrid and GMO seeds can significantly improve production efficiency.
            </p>
          </div>

          <div className="inputCard">
            <FaFlask className="icon" />
            <h3>Fertilizers & Soil Nutrition</h3>
            <p>
              Balanced fertilizers, organic compost, and bio-fertilizers enrich the soil, 
              ensuring optimal plant health and higher crop productivity.
            </p>
          </div>

          <div className="inputCard">
            <FaTractor className="icon" />
            <h3>Farm Machinery</h3>
            <p>
              Tractors, planters, and harvesters save time, reduce labor costs, and improve efficiency 
              in large and small-scale farms alike.
            </p>
          </div>

          <div className="inputCard">
            <FaWrench className="icon" />
            <h3>Tools & Equipment</h3>
            <p>
              From irrigation pumps to greenhouse kits, the right tools make farm work easier 
              and enhance production sustainability.
            </p>
          </div>

          <div className="inputCard">
            <FaWarehouse className="icon" />
            <h3>Storage & Processing</h3>
            <p>
              Post-harvest losses can be minimized by proper storage facilities, silos, 
              cold rooms, and processing units for value addition.
            </p>
          </div>

          <div className="inputCard">
            <FaTree className="icon" />
            <h3>Sustainable Inputs</h3>
            <p>
              Eco-friendly inputs like organic pesticides, renewable energy, and agroforestry practices 
              ensure long-term environmental balance.
            </p>
          </div>
        </div>

        <p className="closingNote">
          Modern agriculture thrives on a smart combination of traditional methods and advanced inputs. 
          Farmers should prioritize sustainable and cost-effective inputs for long-term success.
        </p>
      </div>
    </section>
  );
};

export default AgriInputs;
