import React from "react";
import Clima from "./Clima";
import { cargarClima } from "./api";

// const apiKey = "1aa519799856cb357b11f7d31be7e1eb";
// const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=3844421&appid=${apiKey}&units=metric&lang=es`;

class ClimaBarraApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
  
    cargarClima().then(data => {
      this.setState({
        data: data
      });
    });
    
    // fetch(apiUrl)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log('Response', res);

    //     const data = [];

    //     for (var i = 0; i < res.list.length; i = i + 8) {
    //       const clima = res.list[i];
    //       const d = {};
    //       // llenar el objeto d con dia, max, min e icono

    //       d.dia = 'Dia';
    //       d.max = clima.main.temp_max;
    //       d.min = clima.main.temp_min;
    //       d.icono = `http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`;

    //       data.push(d);
    //     }
    //    this.setState({ data: data });
    //   });
  }

  render() {
    return (
      <div>
        <div className="clima-barra">
          {this.state.data && this.state.data.map((d, index) => <Clima key={index} data={d} />)}
        </div>
      </div>
    );
  }
}

export default ClimaBarraApi;