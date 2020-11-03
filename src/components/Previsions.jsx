
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Previsions.css'
export default function Previsions(props) {
  const numbers = [1, 2, 3, 4];
  {
    numbers.map((number) => {
      const content = <div className="previsions">
        <h2>{props ?.city_info.name} </h2>
      </div>;
      return (
        content

      )
    })
  }
  return (
    <div className="previsions">
      <div className="prevision">
        <h2>{props ?.city_info.name} </h2>
        <p>{props ?.fcst_day_1.date}</p>
        <p>Température de {props ?.fcst_day_1.tmin} °C à {props ?.fcst_day_1.tmax}  </p>
        <p>Le temps est {props ?.fcst_day_1.condition}. <img src={props ?.fcst_day_1.icon} alt="" /></p>
      </div>
      <div className="prevision">
        <h2>{props ?.city_info.name} </h2>
        <p>{props ?.fcst_day_2.date}</p>
        <p>Température de {props ?.fcst_day_2.tmin} °C à {props ?.fcst_day_2.tmax}  </p>
        <p>Le temps est {props ?.fcst_day_2.condition}. <img src={props ?.fcst_day_2.icon} alt="" /></p>
      </div>
      <div className="prevision">
        <h2>{props ?.city_info.name} </h2>
        <p>{props ?.fcst_day_3.date}</p>
        <p>Température de {props ?.fcst_day_3.tmin} °C à {props ?.fcst_day_3.tmax}  </p>
        <p>Le temps est {props ?.fcst_day_3.condition}. <img src={props ?.fcst_day_3.icon} alt="" /></p>
      </div>
      <div className="prevision">
        <h2>{props ?.city_info.name} </h2>
        <p>{props ?.fcst_day_4.date}</p>
        <p>Température de {props ?.fcst_day_4.tmin} °C à {props ?.fcst_day_4.tmax}  </p>
        <p>Le temps est {props ?.fcst_day_4.condition}. <img src={props ?.fcst_day_4.icon} alt="" /></p>
      </div>
    </div>


  );

}
Previsions.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  day_long: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  humidity: PropTypes.number,
  tmp: PropTypes.number,
  condition: PropTypes.string,
  icon: PropTypes.string,

};
