
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function Resume(props) {


  return (
    <div>
      <h1>{props ?.city_info.name}</h1>
      <p>{props ?.city_info.country}</p>
      <p>Nous sommes le {props ?.fcst_day_0.day_long} {props ?.fcst_day_0.date}</p>
      <p>Le temps est humide à {props ?.current_condition.humidity} %</p>
      <p>Le température est de {props ?.current_condition.tmp} °C</p>
      <p>Le temps est {props ?.current_condition.condition}.</p>
      <img src={props ?.current_condition.icon} alt="" />
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
