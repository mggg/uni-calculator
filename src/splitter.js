import React from 'react'

export default function TestingSlider(props) {
  return <table>
    <tbody>
      <tr>
        <td>
          High test cohort
          <br/>
          {props.showExplainer ? <em>(on campus at least 3 times a week)</em> : null}
        </td>
        <td>
          Medium test cohort
          <br/>
          {props.showExplainer ? <em>(on campus 1-2 times a week)</em> : null}
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
                  let inPerson = props.inPersonPct * 1,
                      highFreqPct = Math.min(100, Math.max(0, e.target.value * 1)),
                      currentMed = inPerson - props.highFrequencyPct * 1;
                  if (highFreqPct + currentMed < 100) {
                      inPerson = highFreqPct + currentMed;
                  } else {
                      inPerson = 100;
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
                  let inPerson = props.inPersonPct * 1,
                      highFreqPct = props.highFrequencyPct * 1,
                      medRequest = Math.min(100, Math.max(0, e.target.value * 1));
                  if (highFreqPct + medRequest < 100) {
                      inPerson = highFreqPct + medRequest;
                  } else {
                      inPerson = 100;
                      highFreqPct = 100 - medRequest;
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
                disabled
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
