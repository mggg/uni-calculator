import React from 'react';
import FormQ from './formq';
import Scenario from './scenario';
import TestingSlider from './slider';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      scenarioSelect: 0, // 0 = make-your-own

      undergrad: 800,
      grad: 200,
      beds: 1000,
      fallStudents: 800, // count of students who re-enrolled
      fallInPerson: 800, // count of students coming in weekly
      studentCampusFrequency: 50,


      normalFaculty: 0, // count of normal faculty
      fallFaculty: 0, // count of fall faculty (appearing weekly or more)
      facultyCampusFrequency: 50, // this is a %

      normalStaff: 0,
      fallStaff: 0,
      staffCampusFrequency: 50, // %

      contractStaff: 0,
      fallContractStaff: 0,
      contractCampusFrequency: 50, // %

      colleges: [],

      costPerTest: 25.00,

      semesterLength: 80,
      highTestFrequency: 3, // this can be a decimal; every N days
      mediumTestFrequency: 7, // this can be a decmimal; every N days

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
          undergrad: cols[headers.indexOf("Undergraduate enrollment")] * 1,
          grad: cols[headers.indexOf("Graduate enrollment")] * 1,
          // enrollment: cols[headers.indexOf("Total enrollment")] * 1,
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
      undergrad: college.undergrad,
      grad: college.grad,
      fallStudents: college.undergrad + college.grad,
      beds: college.dorms,
    });
  }

  preplan(plan_index) {
    if (plan_index * 1 === 0) {
      this.setState({
        scenarioSelect: 0
      });
    } else if (plan_index * 1 === 1) {
      this.setState({
        fallStudents: (this.state.undergrad + this.state.grad) * 0.7,
        fallInPerson: (this.state.undergrad + this.state.grad) * 0.7 * 0.8,
        studentCampusFrequency: 7/8 * 100,
        facultyCampusFrequency: 5/8 * 100,
        staffCampusFrequency: 50,
        fallContractStaff: Math.min(this.state.fallContractStaff, 250),
        contractCampusFrequency: 100,
        scenarioSelect: 1
      });
    } else if (plan_index * 1 === 2) {
      this.setState({
        fallStudents: (this.state.undergrad + this.state.grad) * 0.4,
        fallInPerson: (this.state.undergrad + this.state.grad) * 0.4 * 0.9,
        studentCampusFrequency: 50,
        facultyCampusFrequency: 50,
        staffCampusFrequency: 80,
        fallContractStaff: Math.min(this.state.fallContractStaff, 250),
        contractCampusFrequency: 100,
        scenarioSelect: 2
      });
    } else if (plan_index * 1 === 3) {
      this.setState({
        fallStudents: (this.state.undergrad + this.state.grad) * 0.85,
        fallInPerson: (this.state.undergrad + this.state.grad) * 0.85 * 0.9,
        studentCampusFrequency: 8/9 * 100,
        facultyCampusFrequency: 16/65 * 100,
        staffCampusFrequency: 25,
        fallContractStaff: Math.min(this.state.fallContractStaff, 150),
        contractCampusFrequency: 100,
        scenarioSelect: 3
      });
    } else if (plan_index * 1 === 4) {
      this.setState({
        fallStudents: (this.state.undergrad + this.state.grad) * 0.9,
        fallInPerson: (this.state.undergrad + this.state.grad) * 0.9 * 0.5,
        studentCampusFrequency: 100,
        facultyCampusFrequency: 80,
        staffCampusFrequency: 60,
        fallContractStaff: 0,
        contractCampusFrequency: 0,
        scenarioSelect: 4
      });
    }
  }

  disableScenario() {
    if (this.state.scenarioSelect === 0) {
      return "false"
    } else {
      return "true"
    }
  }

  render() {
    return (<div className="container">
      <div className="col-sm-12">
        <div style={{textAlign: 'center' }}>
          <nav className="navbar navbar-dark bg-primary">
            <h2>COVID-19 Testing Calculator</h2>
          </nav>

          <section className="qSection">
            <h3>Description</h3>
            <p style={{textAlign: 'left'}}>This is a scenario-building tool to help university leadership arrive at plans for COVID testing cohorts and
            frequency for the Fall 2020 semester.  Its intention is to help universities plan a bulk testing commitment in June,
            such as (but not exclusively) the testing service to be offered by the Broad Institute.</p>
          </section>

          <section className="qSection suggestions">
            <h3>Summary of modeling recommendations</h3>
            <p>Quick review of suggested frequency for surveillance testing with isolation strategy, without assumptions on contact tracing.</p>
            <ul>
              <li>Rochelle Walensky’s team (Harvard Med) recommends Q3 (that is, every three days) testing in order to keep the total number of infections minimized while keeping costs in reasonable range.</li>
              <li>Peter Frazier’s group (Cornell operations research) recommends Q5 testing but does not consider exogenous shocks, may increase frequency when that parameter is added.</li>
              <li>The IDSS COVID Collaboration (contact: Peko Hosoi at MIT) finds that Q12 testing suffices for stability (i.e., to prevent exponential outbreak within campus) with R0 = 2 and 100% sensitivity, but this finding does not take into account total number of infections, only rate of growth. By contrast, R0 = 2.5 and 70% sensitivity leads to recommendation of Q5.6, still only taking growth rate into account. The group’s survey of SIR/MCMC/network models indicates that Q12 testing could result in over half of campus infected, while Q3 is likely under 1%.</li>
            </ul>
            <p><strong>Bottom line:</strong> a strategy where every individual is tested twice weekly would be in line with all available credible models. A weekly strategy is still extremely helpful for maintaining a steady and tolerably low infection rate on campus.</p>
          </section>
        </div>

        <hr id="separator"></hr>

        <div className="qSection prefill">
          <h3>Load data for a university</h3>
          <small>Source: HIFLD Open GeoData, 2017-2018</small>
          <br/>
          <small>One university may include multiple campuses</small>
          <br/>
          <br/>
          Pre-fill data&nbsp;&nbsp;
          <select onChange={e => this.prefill(e.target.value)}>
            {this.state.colleges.map((c, i) => {
              return <option key={i} value={i}>
                {c.name}
              </option>
            })}
          </select>
          <br/>
          <br/>


          <h4>Students</h4>
          <FormQ
            id="undergrad"
            label="Undergraduate enrollment"
            value={this.state.undergrad}
            counts="students"
            onChange={val => this.updateRawVal('undergrad', val * 1)}
          />
          <FormQ
            id="grad"
            label="Graduate enrollment"
            value={this.state.grad}
            counts="students"
            onChange={val => this.updateRawVal('grad', val * 1)}
          />
          <FormQ
            id="dorms"
            label="Dormitory capacity"
            value={this.state.beds}
            counts="beds"
            onChange={val => this.updateRawVal('beds', val * 1)}
          />
        </div>

        <div className="qSection prefill">
          <br/>
          <strong>Provide numbers of faculty and staff</strong>
          <br/><br/>

          <h4>Faculty</h4>
          <FormQ
            id="faculty"
            label="Normal faculty"
            value={this.state.normalFaculty}
            counts="members"
            onChange={val => this.updateRawVal('normalFaculty', val * 1)}
          />
        </div>

        <div className="qSection prefill">
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
        </div>

        <hr id="separator"></hr>

        <div className="qSection">
          <section>
            <h3>Scenarios</h3>
            <p>All parameters will be customizable below, but we begin with the assumption of
            an 80-day semester, which is a working hypothesis for many schools.</p>
            <p>We will build a HIGH testing cohort (those coming to campus at least 3 days per week)
            and a MEDIUM testing cohort (those coming to campus 1-2 days per week).
            Other testing should be handled by a LOW testing cohort which includes some occasional
            and some ad hoc testing, but we leave that out of this calculation because bulk
            testing options will probably not be available for low-testing/ad hoc group.</p>

            <Scenario
              id={1}
              selected={this.state.scenarioSelect}
              onSelect={this.preplan}
              headline="A large highly residential university."
              body="The student life is very campus-centric and there are a large number of grant-funded research labs that need staffing.  A large number of students are from overseas and are unlikely to be able to return to campus in person."
            />

            <Scenario
              id={2}
              selected={this.state.scenarioSelect}
              onSelect={this.preplan}
              headline="A large, less-residential university."
              body="In normal times, many students commute.  Larger number of part-time and adjunct-style instructional staff."
            />

            <Scenario
              id={3}
              selected={this.state.scenarioSelect}
              onSelect={this.preplan}
              headline="A medium university with graduate programs."
              body="This campus has a very limited number of adjunct-style instructional faculty. However, a substantial share of the tenure-stream faculty are electing for either all-virtual instruction or for hybrid teaching with one day per week on campus. The campus-employed staff can mostly work from home, and only a small number of staff are deemed essential for lab research operations."
            />

            <Scenario
              id={4}
              selected={this.state.scenarioSelect}
              onSelect={this.preplan}
              headline="A small college with very high residency rate and limited dormitory space,"
              body="so no feasible options for de-densification at full residency. A decision has been made to limit campus residency to first- and fourth-years, with all second- and third-years studying virtually."
            />

            <Scenario
              id={0}
              selected={this.state.scenarioSelect}
              onSelect={this.preplan}
              headline="Build Your Own Scenario"
              body=""
            />
          </section>
        </div>

        <br/>

        <div class="qSection" style={{display: (this.state.scenarioSelect ? "block" : "block")}}>
          <strong>In-depth parameter selection</strong>
          <br/>
          <br/>

          <FormQ
            id="fall"
            label="Projected student enrollment in fall"
            value={this.state.fallStudents}
            source={this.state.undergrad + this.state.grad}
            counts="students"
            percent="%"
            onChange={val => this.updateRawVal('fallStudents', val * 1)}
          />
          <FormQ
            id="fall"
            label="Projected weekly on-campus students"
            value={this.state.fallInPerson}
            source={this.state.fallStudents}
            counts="students"
            percent="%"
            disabled={this.disableScenario()}
            onChange={val => this.updateRawVal('fallInPerson', val * 1)}
          />

          <TestingSlider
            label="Student campus-visit frequency"
            value={this.state.studentCampusFrequency}
            onChange={e => this.setState({ studentCampusFrequency: e.target.value * 1 })}
          />

          <hr/>

          <FormQ
            id="studentfacing"
            label="Tenure-stream faculty on campus weekly in Fall"
            value={this.state.fallFaculty}
            source={this.state.normalFaculty}
            counts="members"
            percent="%"
            disabled={this.disableScenario()}
            onChange={val => this.updateRawVal('fallFaculty', val * 1)}
          />
          <TestingSlider
            label="Faculty campus-visit frequency"
            value={this.state.facultyCampusFrequency}
            onChange={e => this.setState({ facultyCampusFrequency: e.target.value * 1 })}
          />

          <hr/>

          <FormQ
            id="projectstaff"
            label="University-employed staff on campus weekly in Fall"
            value={this.state.fallStaff}
            source={this.state.normalStaff * 1}
            counts="members"
            percent="%"
            disabled={this.disableScenario()}
            onChange={val => this.updateRawVal('fallStaff', val)}
          />
          <TestingSlider
            label="Staff campus-visit frequency"
            value={this.state.staffCampusFrequency}
            onChange={e => this.setState({ staffCampusFrequency: e.target.value * 1 })}
          />

          <hr/>

          <FormQ
            id="contractstaff"
            label="Contract staff on campus weekly in Fall"
            value={this.state.fallContractStaff}
            source={this.state.contractStaff * 1}
            counts="members"
            percent="%"
            onChange={val => this.updateRawVal('fallContractStaff', val)}
          />
        </div>

        <hr id="separator"></hr>

        <div className="qSection cohorts">
          <h4>Testing</h4>
          When all groups are combined,
          <div>
            <label>High-testing cohort</label>
            <br/>
            <form className="form-inline" style={{display: 'inline-block'}}>
              <div style={{display: 'flex'}}>
                <input
                  type="number"
                  lang="en"
                  className="form-control"
                  min="0"
                  value={
                    Math.round((
                      this.state.fallInPerson * this.state.studentCampusFrequency
                      + this.state.fallFaculty * this.state.facultyCampusFrequency
                      + this.state.fallStaff * this.state.staffCampusFrequency
                      + this.state.fallContractStaff * this.state.contractCampusFrequency
                    ) / 100)
                  }
                  disabled="disabled"
                  required
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
                  type="number"
                  className="form-control"
                  min="0"
                  step="0.01"
                  value={this.state.highTestFrequency}
                  onChange={e => {
                    this.setState({
                      highTestFrequency: e.target.value
                    })
                  }}
                required/>
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
                  className="form-control"
                  min="0"
                  value={
                    Math.round((
                      this.state.fallInPerson * (100 - this.state.studentCampusFrequency)
                      + this.state.fallFaculty * (100 - this.state.facultyCampusFrequency)
                      + this.state.fallStaff * (100 - this.state.staffCampusFrequency)
                      + this.state.fallContractStaff * (100 - this.state.contractCampusFrequency)
                    ) / 100)
                  }
                  disabled="disabled"
                  required
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
                  type="number"
                  className="form-control"
                  min="0"
                  step=".01"
                  value={this.state.mediumTestFrequency}
                  onChange={e => {
                    this.setState({
                      mediumTestFrequency: e.target.value
                    })
                  }}
                required/>
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
                  min="0"
                  step=".01"
                  value={this.state.costPerTest}
                  onChange={e => {
                    this.setState({
                      costPerTest: e.target.value * 1
                    })
                  }}
                  required
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
                  min="0"
                  className="form-control"
                  value={this.state.semesterLength}
                  onChange={e => {
                    this.setState({
                      semesterLength: e.target.value * 1
                    })
                  }}
                  required
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
                    * this.state.semesterLength / this.state.highTestFrequency
                ).toFixed(2)}
                </strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                Cost per person for semester (medium-testing group)
                <strong>$
                {(this.state.costPerTest
                    * this.state.semesterLength / this.state.mediumTestFrequency
                ).toFixed(2)}</strong>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '85%'}}>
                Total cost
                <strong>$
                {Math.round(this.state.costPerTest * this.state.semesterLength / 100 * (

                  ((this.state.fallInPerson * (100 - this.state.studentCampusFrequency)
                  + this.state.fallFaculty * (100 - this.state.facultyCampusFrequency)
                  + this.state.fallStaff * (100 - this.state.staffCampusFrequency)
                  + this.state.fallContractStaff * (100 - this.state.contractCampusFrequency))
                  / this.state.mediumTestFrequency)

                  +

                  ((this.state.fallInPerson * this.state.studentCampusFrequency
                  + this.state.fallFaculty * this.state.facultyCampusFrequency
                  + this.state.fallStaff * this.state.staffCampusFrequency
                  + this.state.fallContractStaff * this.state.contractCampusFrequency)
                  / this.state.highTestFrequency)
                )).toLocaleString()}</strong>
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
