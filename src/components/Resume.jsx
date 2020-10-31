
import React, { Component } from 'react'
import Compass from './Compass'
import PropTypes from 'prop-types'
import './Resume.css'

export default function Resume(props) {


  return (
    <div>
      <h1>{props ?.city_info.name} <span>{props ?.city_info.country}</span></h1>

      <p>La météo du {props ?.fcst_day_0.day_long} {props ?.fcst_day_0.date}</p>
      <p>Le temps est humide à {props ?.current_condition.humidity} %</p>
      <p>Le température est de {props ?.current_condition.tmp} °C</p>
      <p>Le temps est {props ?.current_condition.condition}. <img src={props ?.current_condition.icon} alt="" /></p>
      <p className="vent">Direction du vent  <Compass direction={props ?.current_condition.wnd_dir} /></p>


    </div>

  );

}
Resume.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  day_long: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  humidity: PropTypes.number,
  tmp: PropTypes.number,
  condition: PropTypes.string,
  icon: PropTypes.string,

};
