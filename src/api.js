import moment from "moment";

const apiKey = "1aa519799856cb357b11f7d31be7e1eb";
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=3844421&appid=${apiKey}&units=metric&lang=es`;

export function cargarClima() {
  return fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        const data = [];

        for (var i = 0; i < res.list.length; i = i + 8) {
          const clima = res.list[i];
          const d = {};
          // llenar el objeto d con dia, max, min e icono

          d.dia = moment.unix(clima.dt).format('ddd');
          d.max = clima.main.temp_max;
          d.min = clima.main.temp_min;
          d.icono = `http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`;

          data.push(d);
        }

        return data;
      });
}