import React from "react";
import "./Clima.css";

function Clima(props) {
  console.log('componente Clima');
  return (
    <div className="clima">
      <div className="clima-dia">{props.data.dia}</div>
      <img src={props.data.icono} alt="icono clima" className="clima-icono" />
      <div>
        <span className="clima-max">{props.data.max}°</span>
        <span className="clima-min">{`${props.data.min}°`}</span>
      </div>
    </div>
  );
}

export default Clima;