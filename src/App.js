import React from 'react';
import FormQ from './formq';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      enrollment: 1000,
      beds: 1000,
      fallStudents: 100,
      fallInPerson: 90,

      normalFaculty: 100,
      fallFaculty: 80,

      normalStaff: 50,
      contractStaff: 20,
      fallStaff: 70,
      colleges: [],

      costPerTest: 20.00,
      highTestPercent: 40,

      semesterLength: 110,
      highTestFrequency: 3,
      mediumTestFrequency: 7,

      reveal: false
    }

    this.updateRawVal = this.updateRawVal.bind(this);
    this.prefill = this.prefill.bind(this);
    this.preplan = this.preplan.bind(this);
  }

  componentDidMount() {
    fetch("/uni-calculator/college_vals.csv").then(res => res.text()).then((data) => {
      let c2 = [{name: " Select" }],
          rows = data.trim().split("\n"),
          headers = rows[0].trim().split(",");
      rows = rows.slice(1);

      rows.forEach((r) => {
        let cols = r.split(",");
        // "Name,,Quadrant,Carnegie Classification,Total enrollment,Undergraduate enrollment,Graduate enrollment,Endowment per full-time equivalent student,Dorm capacity"
        c2.push({
          name: cols[headers.indexOf("Name")],
          enrollment: cols[headers.indexOf("Total enrollment")] * 1,
          dorms: cols[headers.indexOf("Dorm capacity")] * 1
        });
      });
      c2.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      this.setState({ colleges: c2 });
    });
  }

  updateRawVal(key, origVal) {
    let ob = {};
    ob[key] = origVal;
    this.setState(ob);
  }

  prefill(college_index) {
    let college = this.state.colleges[college_index];
    this.setState({
      enrollment: college.enrollment,
      fallStudents: college.enrollment,
      beds: college.dorms,
    });
  }

  preplan(plan_index) {
    if (plan_index * 1 === 1) {
      this.setState({
        fallStudents: this.state.enrollment * 0.9,
        fallInPerson: this.state.enrollment * 0.9 * 0.5,
        highTestPercent: 1
      });
    } else if (plan_index * 1 === 2) {
      this.setState({
        fallStudents: this.state.enrollment * 0.85,
        fallInPerson: this.state.enrollment * 0.85 * 0.9,
        highTestPercent: 89
      });
    } else if (plan_index * 1 === 3) {
      this.setState({
        fallStudents: this.state.enrollment * 0.7,
        fallInPerson: this.state.enrollment * 0.7 * 0.8,
        highTestPercent: 88
      });
    }
  }

  render() {
    return (<div className="container">
      <div className="col-sm-12">
        <div style={{textAlign: 'center' }}>
          <nav className="navbar navbar-dark bg-primary">
            <h2>COVID-19 Testing Calculator</h2>
          </nav>
          <section>
            <h3>Description</h3>
            <p>This calculator provides cost estimates for university COVID testing plans.</p>
          </section>
          <h3>University</h3>
        </div>

        <div className="qSection">
          <h4>Students</h4>
          <section>
            &nbsp;&nbsp;Pre-fill data&nbsp;&nbsp;
            <select onChange={e => this.prefill(e.target.value)}>
              {this.state.colleges.map((c, i) => {
                return <option key={i} value={i}>
                  {c.name}
                </option>
              })}
            </select>
            <br/>
            <br/>
            &nbsp;&nbsp;Select scenario&nbsp;&nbsp;
            <select onChange={e => this.preplan(e.target.value)}>
              <option value="0">Pre-Select</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
          </section>
          <br/>
          <FormQ
            id="enrollment"
            label="Normal enrollment"
            value={this.state.enrollment}
            counts="students"
            onChange={val => this.updateRawVal('enrollment', val * 1)}
          />
          <FormQ
            id="dorms"
            label="Dormitory capacity"
            value={this.state.beds}
            counts="beds"
            onChange={val => this.updateRawVal('beds', val * 1)}
          />
          <FormQ
            id="fall"
            label="Projected Fall enrollment"
            value={this.state.fallStudents}
            source={this.state.enrollment}
            counts="students"
            percent="%"
            onChange={val => this.updateRawVal('fallStudents', val * 1)}
          />
          <FormQ
            id="fall"
            label="Projected on-campus enrollment"
            value={this.state.fallInPerson}
            source={this.state.fallStudents}
            counts="students"
            percent="%"
            onChange={val => this.updateRawVal('fallInPerson', val * 1)}
          />
        </div>

        <div className="qSection">
          <h4>Faculty</h4>
          <FormQ
            id="faculty"
            label="Normal faculty"
            value={this.state.normalFaculty}
            counts="members"
            onChange={val => this.updateRawVal('normalFaculty', val * 1)}
          />
          <FormQ
            id="studentfacing"
            label="Projected student-facing faculty in Fall"
            value={this.state.fallFaculty}
            source={this.state.normalFaculty}
            counts="members"
            percent="%"
            onChange={val => this.updateRawVal('fallFaculty', val * 1)}
          />
        </div>

        <div className="qSection">
          <h4>Staff</h4>
          <FormQ
            id="staff"
            label="On-campus staff, university-employed"
            value={this.state.normalStaff}
            counts="members"
            onChange={val => this.updateRawVal('normalStaff', val * 1)}
          />
          <FormQ
            id="contract"
            label="On-campus staff, contract"
            value={this.state.contractStaff}
            counts="members"
            onChange={val => this.updateRawVal('contractStaff', val * 1)}
          />
          <FormQ
            id="projectstaff"
            label="Projected on-campus staff in Fall"
            value={this.state.fallStaff}
            source={this.state.normalStaff * 1 + this.state.contractStaff * 1}
            counts="members"
            percent="%"
            onChange={val => this.updateRawVal('fallStaff', val)}
          />
        </div>

        <div className="qSection cohorts">
          <h4>Testing</h4>
          <div>
            <label>High-testing cohort</label>
            <br/>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control percent-readout"
                  value={this.state.highTestPercent}
                  onChange={e => {
                    this.setState({
                      highTestPercent: e.target.value * 1
                    })
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </form>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control"
                  value={
                    Math.round((this.state.fallStaff * 1 + this.state.fallFaculty * 1 + this.state.fallInPerson * 1)
                    * this.state.highTestPercent
                    / 100)
                  }
                  disabled="disabled"
                />
                <div className="input-group-append">
                  <span className="input-group-text">members</span>
                </div>
              </div>
            </form>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <div className="input-group-prepend">
                  <span className="input-group-text">every</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.highTestFrequency}
                  onChange={e => {
                    this.setState({
                      highTestFrequency: e.target.value
                    })
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">days</span>
                </div>
              </div>
            </form>
          </div>
          <div>
            <label>Medium-testing cohort</label>
            <br/>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control percent-readout"
                  value={100 - this.state.highTestPercent}
                  onChange={e => {
                    this.setState({
                      highTestPercent: 100 - (e.target.value * 1)
                    })
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </form>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control"
                  value={
                    Math.round((this.state.fallStaff * 1 + this.state.fallFaculty * 1 + this.state.fallInPerson * 1)
                    * (100 - this.state.highTestPercent)
                    / 100)
                  }
                  disabled="disabled"
                />
                <div className="input-group-append">
                  <span className="input-group-text">members</span>
                </div>
              </div>
            </form>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <div className="input-group-prepend">
                  <span className="input-group-text">every</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.mediumTestFrequency}
                  onChange={e => {
                    this.setState({
                      mediumTestFrequency: e.target.value
                    })
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">days</span>
                </div>
              </div>
            </form>
          </div>
          <hr/>
          <div style={{width:"60%", display:"flex", justifyContent: "space-between"}}>
            Cost per test
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control"
                  value={this.state.costPerTest}
                  onChange={e => {
                    this.setState({
                      costPerTest: e.target.value * 1
                    })
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">dollars</span>
                </div>
              </div>
            </form>
          </div>
          <div style={{width:"60%", display:"flex", justifyContent: "space-between"}}>
            Semester length
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control"
                  value={this.state.semesterLength}
                  onChange={e => {
                    this.setState({
                      semesterLength: e.target.value * 1
                    })
                  }}
                />
                <div className="input-group-append">
                  <span className="input-group-text">days</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div style={{background: '#eee', textAlign: 'center', paddingTop: "10px", paddingBottom: "15px"}}>
          {this.state.reveal
            ? <div style={{marginLeft:"15%", marginRight: "15%"}}>
              <h4>Outcomes</h4>
              <div style={{color: 'red'}}>
                {["semesterLength", "highTestFrequency", "costPerTest", "mediumTestFrequency", "fallStaff", "fallFaculty", "fallStudents", "fallInPerson"].map((key) => {
                  return (this.state[key] * 1) ? null : "Non-numeric value for: " + key;
                })}
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                Cost per person for semester (high-testing group)
                <strong>$
                {(this.state.costPerTest
                    // * this.state.highTestPercent / 100
                    // * (this.state.fallStaff + this.state.fallFaculty + this.state.fallStudents)
                    * this.state.semesterLength / this.state.highTestFrequency
                    // / this.state.fallStudents
                ).toFixed(2)}
                </strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                Cost per person for semester (medium-testing group)
                <strong>$
                {(this.state.costPerTest
                    // * (100 - this.state.highTestPercent) / 100
                    // * (this.state.fallStaff + this.state.fallFaculty + this.state.fallStudents)
                    * this.state.semesterLength / this.state.mediumTestFrequency
                    // / this.state.fallStudents
                ).toFixed(2)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                Total cost
                <strong>$
                {Math.round(this.state.costPerTest *
                    (
                      this.state.highTestPercent / 100 * this.state.semesterLength / this.state.highTestFrequency
                      +
                      (100 - this.state.highTestPercent) / 100 * this.state.semesterLength / this.state.mediumTestFrequency
                    )
                    * (this.state.fallStaff + this.state.fallFaculty + this.state.fallStudents)
                ).toLocaleString()}</strong>
              </div>
          </div>
          : <button className="btn btn-large btn-info" onClick={e => this.setState({ reveal: true })}>Estimate Costs</button>
        }
        </div>
        <br/>
        <br/>
      </div>
    </div>);
  }
}

export default App;
