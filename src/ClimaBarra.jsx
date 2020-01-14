import React from "react";
import sun from "./iconos/039-sun.png";
import cloud from "./iconos/001-cloud.png";
import rain from "./iconos/003-rainy.png";
import Clima from "./Clima";
import "./ClimaBarra.css";

class ClimaBarra extends React.Component {
  
  // state = {};

  constructor(props) {
    super(props);

    this.state = {
      diaNuevo: 'Dom'
    };

    this.handleChange = this.handleChange.bind(this);
    this.onAgregar = this.onAgregar.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount ClimaBarra');
    const data = [
      { dia: "Jue", max: 35, min: 19, icono: sun },
      { dia: "Vie", max: 33, min: 18, icono: cloud },
      { dia: "Sab", max: 31, min: 22, icono: cloud },
      { dia: "Dom", max: 29, min: 15, icono: rain },
      { dia: "Lun", max: 34, min: 20, icono: sun }
    ];

    // NO modificar state directamente
    // this.state.data = data;

    this.setState({
      data: data
    });
  }

  handleChange(e) {
    this.setState({
      diaNuevo: e.target.value
    });
  }

  onAgregar() {
    const d = {
      dia: this.state.diaNuevo,
      max: 30,
      min: 15,
      icono: sun
    };

    const nuevoData = [...this.state.data, d];
    this.setState({
      data: nuevoData
    });
  }

  render() {
    console.log('render ClimaBarra');
    return (
      <div>
        <div>
          <input type="text" name="dia" value={this.state.diaNuevo} onChange={this.handleChange} />
          <button onClick={this.onAgregar}>Agregar</button>
        </div>
        <div className="clima-barra">
          {/* {data.map(function(d, index) {
                  return (
                    <Clima data={d} />
                  );
                })} */}

          {this.state.data && this.state.data.map((d, index) => <Clima key={index} data={d} />)}
        </div>
      </div>
    );
  }
}

export default ClimaBarra;