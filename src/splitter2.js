import React from 'react'

export default function TestingSlider2(props) {
  return <table>
    <tbody>
      <tr>
        <td></td>
        <td>High test cohort</td>
        <td>Medium test cohort</td>
      </tr>
      <tr>
        <td>
          <div style={{width: "200px"}}>
            Out of {props.total.toLocaleString()} {props.plural}:
          </div>
        </td>
        <td>
          <form className="form-inline">
            <div className="percent-block">
              <input
                type="number"
                className="form-control"
                min="0"
                max={props.total}
                value={props.highFreqCount}
                onChange={(e) => {
                  let groupMax = Math.min(props.total, e.target.value * 1),
                      medVal = props.medFreqCount;
                  if (groupMax + medVal > props.total) {
                    medVal = props.total - groupMax;
                  }
                  props.onChange(groupMax, medVal);
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">members</span>
              </div>
            </div>
          </form>
        </td>
        <td>
          <form className="form-inline">
            <div className="percent-block">
              <input
                type="number"
                className="form-control"
                min="0"
                max={props.total}
                value={props.medFreqCount}
                onChange={e => {
                  let groupMax = Math.min(props.total, e.target.value * 1),
                      highVal = props.highFreqCount;
                  if (groupMax + highVal > props.total) {
                    highVal = props.total - groupMax;
                  }
                  props.onChange(highVal, groupMax);
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">members</span>
              </div>
            </div>
          </form>
        </td>
      </tr>
      <tr>
        <td></td>
        {props.help.map((r, i) => <td key={i}><small>{r}</small></td>)}
      </tr>
    </tbody>
  </table>
}
