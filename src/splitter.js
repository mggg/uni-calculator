import React from 'react'

export default function TestingSlider(props) {
  return <table>
    <tbody>
      <tr>
        <td>
          High test cohort
          <br/>
          <em>(on campus at least 3 times a week)</em>
        </td>
        <td>
          Medium test cohort
          <br/>
          <em>(on campus at 1-2 times a week)</em>
        </td>
        <td>
          Remote or occasional
        </td>
      </tr>
      <tr>
        <td>
          <form className="form-inline">
            <div className="percent-block">
              <input
                type="number"
                className="form-control percent-readout"
                min="0"
                max="100"
                value={props.highFrequencyPct}
                onChange={e => {
                  let inPerson = props.inPersonPct,
                      highFreqPct = Math.max(0, Math.min(100, e.target.value));
                  if (highFreqPct > inPerson) {
                    inPerson = highFreqPct;
                  }
                  props.onChange(inPerson, highFreqPct);
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">%</span>
              </div>
            </div>
          </form>
        </td>
        <td>
          <form className="form-inline">
            <div className="percent-block">
              <input
                type="number"
                className="form-control percent-readout"
                min="0"
                max="100"
                value={props.inPersonPct - props.highFrequencyPct}
                onChange={e => {
                  let inPerson = props.inPersonPct,
                      highFreqPct = inPerson - Math.max(0, Math.min(100, e.target.value));
                  if (highFreqPct < 0) {
                    inPerson = e.target.value;
                  }
                  props.onChange(inPerson, highFreqPct);
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">%</span>
              </div>
            </div>
          </form>
        </td>
        <td>
          <form className="form-inline">
            <div className="percent-block">
              <input
                type="number"
                className="form-control percent-readout"
                min="0"
                max="100"
                value={100 - props.inPersonPct}
                onChange={e => {
                  let inPerson = 100 - e.target.value,
                      highFreqPct = props.highFrequencyPct;
                  if (inPerson < highFreqPct) {
                    highFreqPct = inPerson;
                  }
                  props.onChange(inPerson, highFreqPct);
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">%</span>
              </div>
            </div>
          </form>
        </td>
      </tr>
      <tr>
        {props.help.map((r, i) => <td key={i}><small>{r}</small></td>)}
      </tr>
    </tbody>
  </table>
}
