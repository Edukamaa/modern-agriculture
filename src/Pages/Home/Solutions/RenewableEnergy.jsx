import React from "react";
import "./RenewableEnergy.css";
import biogas1 from "../../../assets/biogas1.jpg";
import cows1 from "../../../assets/cows1.jpg";
import renewablee1 from "../../../assets/renewablee1.jpg";
import solar1 from "../../../assets/solar1.jpg";

const RenewableEnergy = () => {
  return (
    <div className="renewable-container">
      <h2 className="renewable-title">Renewable Energy in Agriculture</h2>
      <p className="renewable-intro">
        Renewable energy is transforming modern agriculture by providing clean,
        affordable, and sustainable power sources. Farmers can reduce costs,
        increase yields, and minimize environmental impact by embracing solar,
        wind, biogas, and other green technologies.
      </p>

      {/* Solar Energy */}
      <div className="renewable-section">
        <img src={solar1} alt="Solar Energy" className="renewable-image" />
        <div className="renewable-content">
          <h3>1. Solar Energy</h3>
          <p>
            Solar panels are widely used for irrigation pumps, greenhouse
            heating, water treatment, and powering farm equipment. They are
            especially effective in sunny regions with high electricity costs.
          </p>
          <p className="formula">
            Formula for Solar Energy: <br />
            <b>E = A × r × H × PR</b>
            <br />
            Where:  
            <ul>
              <li><b>E</b> = Energy (kWh)</li>
              <li><b>A</b> = Total panel area (m²)</li>
              <li><b>r</b> = Solar panel efficiency (%)</li>
              <li><b>H</b> = Average annual solar radiation (kWh/m²)</li>
              <li><b>PR</b> = Performance ratio (0.75–0.85)</li>
            </ul>
          </p>
          <p>
            Example: A 20 m² solar system with 18% efficiency in a region with
            1800 kWh/m²/year and PR=0.8 will produce:
          </p>
          <p className="calculation">
            E = 20 × 0.18 × 1800 × 0.8 = <b>5184 kWh/year</b>
          </p>
        </div>
      </div>

      {/* Biogas */}
      <div className="renewable-section">
        <img src={biogas1} alt="Biogas Plant" className="renewable-image" />
        <div className="renewable-content">
          <h3>2. Biogas Energy</h3>
          <p>
            Biogas is produced from animal manure, crop residues, and organic
            waste. Farmers use it for cooking, electricity, and heating barns.
            It reduces greenhouse gases and improves waste management.
          </p>
          <p className="formula">
            Formula for Biogas Production: <br />
            <b>V = Q × Ym × C</b>
            <br />
            Where:  
            <ul>
              <li><b>V</b> = Biogas volume (m³)</li>
              <li><b>Q</b> = Quantity of feedstock (kg/day)</li>
              <li><b>Ym</b> = Methane yield per kg (m³/kg)</li>
              <li><b>C</b> = Conversion efficiency</li>
            </ul>
          </p>
          <p>
            Example: 100 kg of cow dung/day × 0.04 m³/kg × 0.8 = <b>3.2 m³/day</b>
            biogas (enough to cook for a household).
          </p>
        </div>
      </div>

      {/* Wind Energy */}
      <div className="renewable-section">
        <img src={renewablee1} alt="Wind Turbines" className="renewable-image" />
        <div className="renewable-content">
          <h3>3. Wind Energy</h3>
          <p>
            Small wind turbines can power farms by pumping water, drying crops,
            or generating electricity. Best suited for areas with average wind
            speeds above 5 m/s.
          </p>
          <p className="formula">
            Formula for Wind Power: <br />
            <b>P = 0.5 × ρ × A × V³ × Cp</b>
            <br />
            Where:  
            <ul>
              <li><b>P</b> = Power output (W)</li>
              <li><b>ρ</b> = Air density (1.225 kg/m³)</li>
              <li><b>A</b> = Rotor swept area (m²)</li>
              <li><b>V</b> = Wind speed (m/s)</li>
              <li><b>Cp</b> = Power coefficient (max 0.59)</li>
            </ul>
          </p>
          <p>
            Example: A small turbine with 5 m rotor diameter at 6 m/s wind speed
            gives approx. <b>2.5 kW</b>.
          </p>
        </div>
      </div>

      {/* Biomass */}
      <div className="renewable-section">
        <img src={cows1} alt="Biomass Energy" className="renewable-image" />
        <div className="renewable-content">
          <h3>4. Biomass Energy</h3>
          <p>
            Biomass from crop residues (maize stalks, sugarcane bagasse, rice
            husks) can be used to produce bioethanol, biodiesel, or burned for
            electricity and heat.
          </p>
          <p className="formula">
            Formula for Biomass Energy Potential: <br />
            <b>E = M × CV × η</b>
            <br />
            Where:  
            <ul>
              <li><b>E</b> = Energy output (MJ)</li>
              <li><b>M</b> = Mass of biomass (kg)</li>
              <li><b>CV</b> = Calorific value (MJ/kg)</li>
              <li><b>η</b> = Conversion efficiency</li>
            </ul>
          </p>
          <p>
            Example: 200 kg of maize stalks × 17 MJ/kg × 0.25 = <b>850 MJ</b>.
          </p>
        </div>
      </div>

      <p className="renewable-conclusion">
        ✅ By combining solar, wind, biogas, and biomass, farmers can reduce
        energy costs, become self-sufficient, and even sell surplus electricity.
        The future of agriculture is green, sustainable, and powered by
        renewables.
      </p>
    </div>
  );
};

export default RenewableEnergy;
