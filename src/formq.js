import React from 'react'

export default function FormQ(props) {
  return <form className="form-inline">
    <div className="form-group" style={{display: 'flex', justifyContent: 'space-between', paddingTop: "7px", paddingBottom: "7px"}}>
      <label htmlFor={props.id}>{props.label}</label>
      <div style={{display: 'flex'}}>
        {props.percent !== undefined ? <div className="percent-block">
          <input
            type="number"
            className="form-control percent-readout"
            min="0"
            max="100"
            value={Math.round(props.value / props.source * 100)}
            onChange={e => {
              let pct = Math.min(100, Math.max(0, e.target.value * 1));
              props.onChange(pct / 100 * props.source);
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text">%</span>
          </div>
        </div> : null}
        <input
          type="number"
          lang="en"
          className="form-control student-block"
          value={Math.round(props.value)}
          onChange={e => props.onChange(e.target.value)}
        />
        <div className="input-group-append">
          <span className="input-group-text">{props.counts}</span>
        </div>
      </div>
    </div>
  </form>
}
