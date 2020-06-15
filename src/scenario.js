import React from 'react'

export default function Scenario(props) {
  return <label style={{display: "block"}} className={"scenario " + (props.selected === props.id ? "select" : "")}>
    <input
      type="radio"
      name="scenario"
      onChange={e => props.onSelect(props.id)}
      checked={props.selected === props.id}
    />
    <strong>{props.headline}</strong>
  </label>
}
