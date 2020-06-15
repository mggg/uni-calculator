import React from 'react'

export default function TestingSlider(props) {
  return <div>
    <label>{props.label}: 1-2/week (medium testing) vs. 3+/week (high testing)</label>
    <br/>
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      onChange={props.onChange}
      value={props.value}
    />
    <span>&nbsp;&nbsp;&nbsp;{props.value.toFixed(1)}% high, {(100-props.value).toFixed(1)}% medium</span>
  </div>
}
