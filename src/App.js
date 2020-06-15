import React from 'react';
import FormQ from './formq';
import Scenario from './scenario';
import TestingSplit from './splitter';
import TestingSplit2 from './splitter2';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      scenarioSelect: 0, // 0 = make-your-own
      revealLongform: false, // set to true to see calculator open
      revealFinal: false, // reveal final math

      quickHighCount: 400,
      quickMediumCount: 400,

      undergrad: 800,
      grad: 200,
      residential: 50, // % of undergrads to dorms
      fallStudentsPct: 80, // % of students who re-enrolled
      fallInPersonPct: 100, // % of students coming in weekly
      studentCampusFrequency: 50,

      gradCountHigh: 60,
      gradCountMed: 0,

      normalFaculty: 0, // count of normal faculty
      fallFacultyPct: 50, // % of all faculty returning 1+/weekly to campus
      facultyCampusFrequency: 50, // % of fall faculty appearing in medium vs. high group

      normalStaff: 0,
      fallStaffPct: 50,
      staffCampusFrequency: 50, // %

      contractStaff: 0,
      contractCountHigh: 0,
      contractCountMed: 0,

      colleges: [],

      costPerTest: 25.00,

      semesterLength: 80,
      highTestFrequency: 3, // this can be a decimal; every N days
      mediumTestFrequency: 7, // this can be a decmimal; every N days
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
          residential: Math.min(100, 100 * (cols[headers.indexOf("Dorm capacity")] * 1) / (cols[headers.indexOf("Undergraduate enrollment")] * 1))
        });
      });
      c2.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      this.setState({ colleges: c2 });
    });
  }

  updateRawVal(key, origVal) {
    let ob = { revealFinal: false };
    ob[key] = origVal;

    if (key === "grad") {
      if (this.state.gradCountHigh + this.state.gradCountMed > origVal) {
        ob.gradCountHigh = 0;
        ob.gradCountMed = 0;
      }
    } else if (key === "contractStaff") {
      if (this.state.contractCountHigh + this.state.contractCountMed > origVal) {
        ob.contractCountHigh = 0;
        ob.contractCountMed = 0;
      }
    }
    this.setState(ob);
  }

  prefill(college_index) {
    let college = this.state.colleges[college_index],
        gradCounts = {
          gradCountHigh: this.state.gradCountHigh,
          gradCountMed: this.state.gradCountMed
        };
    if (gradCounts.gradCountHigh + gradCounts.gradCountMed > college.grad) {
      gradCounts.gradCountHigh = 0;
      gradCounts.gradCountMed = 0;
    }
    this.setState({
      ...gradCounts,
      undergrad: college.undergrad,
      grad: college.grad,
      fallStudentsPct: 100,
      residential: college.residential,
      revealFinal: false,
    });
  }

  preplan(plan_index) {
    if (plan_index * 1 === 0) {
      this.setState({
        scenarioSelect: 0,
        revealFinal: false,
      });
    } else if (plan_index * 1 === 1) {
      this.setState({
        fallStudentsPct: 70,
        fallInPersonPct: 80,
        studentCampusFrequency: 70,

        fallFacultyPct: 80,
        facultyCampusFrequency: 50,

        fallStaffPct: 60,
        staffCampusFrequency: 50,

        contractCountHigh: Math.min(this.state.contractStaff, 250),

        scenarioSelect: 1,
        revealFinal: false,
      });
    } else if (plan_index * 1 === 2) {
      this.setState({
        fallStudentsPct: 40,
        fallInPersonPct: 90,
        studentCampusFrequency: 45,

        fallFacultyPct: 60,
        facultyCampusFrequency: 30,

        fallStaffPct: 50,
        staffCampusFrequency: 40,

        contractCountHigh: Math.min(this.state.contractStaff, 100),

        scenarioSelect: 2,
        revealFinal: false,
      });
    } else if (plan_index * 1 === 3) {
      this.setState({
        fallStudentsPct: 85,
        fallInPersonPct: 90,
        studentCampusFrequency: 80,

        fallFacultyPct: 65,
        facultyCampusFrequency: 15,

        fallStaffPct: 25,
        staffCampusFrequency: 25,

        contractCountHigh: Math.min(this.state.contractStaff, 100),
        scenarioSelect: 3,
        revealFinal: false,
      });
    } else if (plan_index * 1 === 4) {
      this.setState({
        fallStudentsPct: 90,
        fallInPersonPct: 50,
        studentCampusFrequency: 50,

        fallFacultyPct: 50,
        facultyCampusFrequency: 40,

        fallStaffPct: 50,
        staffCampusFrequency: 30,

        contractCountHigh: 0,
        scenarioSelect: 4,
        revealFinal: false,
      });
    }
  }

  disableScenario() {
    return this.state.scenarioSelect * 1 !== 0;
  }

  render() {

    let highTestCount = (this.state.fallStudentsPct/100 * this.state.studentCampusFrequency/100 * this.state.undergrad
    + this.state.fallFacultyPct/100 * this.state.facultyCampusFrequency/100 * this.state.normalFaculty
    + this.state.fallStaffPct/100 * this.state.staffCampusFrequency/100 * this.state.normalStaff
    + this.state.gradCountHigh
    + this.state.contractCountHigh);
    let mediumTestCount = (this.state.fallStudentsPct/100 * (this.state.fallInPersonPct/100-this.state.studentCampusFrequency/100) * this.state.undergrad
    + this.state.fallFacultyPct/100 * (1-this.state.facultyCampusFrequency/100) * this.state.normalFaculty
    + this.state.fallStaffPct/100 * (1-this.state.staffCampusFrequency/100) * this.state.normalStaff
    + this.state.gradCountMed
    + this.state.contractCountMed);

    return (<div className="container">
      <div className="col-sm-12">
        <div style={{textAlign: 'center' }}>
          <nav className="navbar navbar-dark bg-primary">
            <h2>COVID-19 Testing Calculator</h2>
          </nav>

          <section className="qSection">
            <p style={{textAlign: 'left', padding: '10px'}}><strong>This is a scenario-building tool to help university leadership arrive at plans for COVID testing cohorts and
            frequency for the Fall 2020 semester.</strong>  Its intention is to help universities plan a bulk testing commitment in June,
            such as (but not exclusively) the testing service to be offered by the Broad Institute.</p>
          </section>

          <section className="qSection suggestions">
            <h4>Summary of modeling recommendations</h4>
            <p>Here&rsquo;s a quick review of suggested frequency for surveillance testing with isolation strategy, without assumptions on contact tracing.</p>
            <ul>
              <li>Rochelle Walensky’s team (Harvard Med) recommends Q3 (that is, every three days) testing in order to keep the total number of infections minimized while keeping costs in reasonable range.</li>
              <li>Peter Frazier’s group (Cornell operations research) recommends Q5 testing but does not consider exogenous shocks, may increase frequency when that parameter is added.</li>
              <li>The IDSS COVID Collaboration (contact: Peko Hosoi at MIT) finds that Q12 testing suffices for stability (i.e., to prevent exponential outbreak within campus) with R0 = 2 and 100% sensitivity, but this finding does not take into account total number of infections, only rate of growth. By contrast, R0 = 2.5 and 70% sensitivity leads to recommendation of Q5.6, still only taking growth rate into account. The group’s survey of SIR/MCMC/network models indicates that Q12 testing could result in over half of campus infected, while Q3 is likely under 1%.</li>
            </ul>
            <p><strong>The bottom line:</strong> a strategy where every individual is tested twice weekly would be in line with all available credible models. A weekly strategy is still extremely helpful for maintaining a steady and tolerably low infection rate on campus.</p>
          </section>
        </div>

        <div style={{ display: this.state.revealLongform ? "block" : "none" }}>
          <hr id="separator"></hr>

          <div className="qSection prefill">
            <h3>Load data for a university</h3>
            <br/>
            University &nbsp;&nbsp;
            <select onChange={e => this.prefill(e.target.value)}>
              {this.state.colleges.map((c, i) => {
                return <option key={i} value={i}>
                  {c.name}
                </option>
              })}
            </select>
            <br/>
            <small>Sources: HIFLD Open GeoData, 2017-2018; NCES IPEDS 2018</small>
            <br/>
            <br/>


            <h4>Students</h4>
            <FormQ
              id="undergrad"
              label="Usual undergraduate enrollment"
              value={this.state.undergrad}
              counts="students"
              onChange={val => this.updateRawVal('undergrad', val * 1)}
            />
            <FormQ
              id="grad"
              label="Usual graduate enrollment"
              value={this.state.grad}
              counts="students"
              onChange={val => this.updateRawVal('grad', val * 1)}
            />
            <FormQ
              id="residential"
              label="Usual residential percentage"
              value={this.state.residential}
              counts="%"
              onChange={val => this.updateRawVal('residential', Math.min(100, Math.max(0, val * 1)))}
            />
          </div>

          <div className="qSection prefill">
            <br/>
            <strong>Correct the numbers above to match actual values. Datasets may be out of date, may include multiple campuses, etc.</strong>
            <br/><br/>

            <h4>Faculty</h4>
            <FormQ
              id="faculty"
              label="Regular faculty"
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
              label="On-campus staff, contract (incl. part-time instructors)"
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

          <div className="qSection" style={{display: (this.state.scenarioSelect ? "block" : "block")}}>
            <br/>
            <h5>ENROLLED UNDERGRADUATE STUDENTS
              <br/>
              <em>Reminder: normal undergraduate enrollment is&nbsp;
                {(this.state.undergrad).toLocaleString()}
              </em>
            </h5>

            <FormQ
              id="fall"
              label="Projected student enrollment in fall"
              value={this.state.fallStudentsPct}
              source={this.state.undergrad}
              middleText="of normal enrollment ="
              counts="students"
              percent="%"
              onChange={val => this.updateRawVal('fallStudentsPct', val * 1)}
              help="This is the percent of normal student headcount you expect to enroll and pay tuition this fall. If total enrollment is projected at 80% of usual, put 80 in the first box."
            />

            <TestingSplit
              help={[
                "This is the percent of students enrolled in the fall that you think will come to campus at least 3 times a week. If you think 25% of enrolled students will come to campus 3+ times a week, enter 25 in the box above.  Use residency percentage as a guide.",
                "This is the percent of students enrolled in the fall that you think will come to campus 1-2 times a week. If you think 50% of enrolled students will come to campus 1-2 times a week, enter 50 in the box above.",
                "This is the percent of students enrolled in the fall that you think will be completely remote (coming to campus less than once a week). If you think 25% of enrolled students will rarely or never come to campus in person, enter 25 in the box above."
              ]}
              inPersonPct={this.state.fallInPersonPct}
              highFrequencyPct={this.state.studentCampusFrequency}
              showExplainer="true"
              onChange={(a, b) => this.setState({
                fallInPersonPct: a * 1,
                studentCampusFrequency: b * 1,
                revealFinal: false
              })}
            />

            <hr/>
            <h5>FACULTY</h5>
            <TestingSplit
              help={[
                "Student-facing faculty who are at higher risk for severe illness.",
                "Student-facing faculty not in the high test cohort",
                "Faculty who are not student-facing"
              ]}
              inPersonPct={this.state.fallFacultyPct}
              highFrequencyPct={this.state.facultyCampusFrequency}
              onChange={(a, b) => this.setState({
                fallFacultyPct: a * 1,
                facultyCampusFrequency: b * 1,
                revealFinal: false
              })}
            />

            <hr/>
            <h5>UNIVERSITY-EMPLOYED STAFF</h5>
            <TestingSplit
              help={[
                "Student-facing staff who are at higher risk for severe illness.",
                "Student-facing staff not in the high test cohort",
                "Staff who are not student-facing"
              ]}
              inPersonPct={this.state.fallStaffPct}
              highFrequencyPct={this.state.staffCampusFrequency}
              onChange={(a, b) => this.setState({
                fallStaffPct: a * 1,
                staffCampusFrequency: b * 1,
                revealFinal: false,
              })}
            />

            <hr/>

            <h5>GRADUATE STUDENTS</h5>
            <TestingSplit2
              help={[
                "How many graduate students will come to campus at least 3x/week?  For instance, grads who work in high-contact labs, or grads with heavy teaching.",
                "How many graduate students will come to campus 1-2 times/week?  For instance, grads with lighter teaching or who will attend a small number of in-person classes."
              ]}
              total={this.state.grad}
              plural="graduate students"
              highFreqCount={this.state.gradCountHigh}
              medFreqCount={this.state.gradCountMed}
              onChange={(a, b) => this.setState({
                gradCountHigh: a * 1,
                gradCountMed: b * 1,
                revealFinal: false
              })}
            />

            <hr/>

            <h5>CONTRACT STAFF</h5>
            <TestingSplit2
              help={[
                "How many contract staff will come to campus at least 3x/week?  For instance, dining hall and janitorial staff with heavy schedules.",
                "How many contract staff will come to campus 1-2 times/week?"
              ]}
              total={this.state.contractStaff}
              plural="contract staff"
              highFreqCount={this.state.contractCountHigh}
              medFreqCount={this.state.contractCountMed}
              onChange={(a, b) => this.setState({
                contractCountHigh: a * 1,
                contractCountMed: b * 1,
                revealFinal: false,
              })}
            />

          </div>

        </div>
        <div>
          <div className="qSection">
            <hr id="separator"></hr>
            <h4>{this.state.revealLongform ? "Final Calculator" : "Quick Calculator"}</h4>
          </div>
        </div>

        <div className="qSection cohorts">
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
                    this.state.revealLongform
                    ? Math.round(highTestCount)
                    : this.state.quickHighCount
                  }
                  onChange={(e) => {
                    this.setState({
                      quickHighCount: e.target.value * 1,
                      revealFinal: false,
                    })
                  }}
                  disabled={this.state.revealLongform}
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
                      highTestFrequency: e.target.value,
                      revealFinal: false,
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
                    this.state.revealLongform
                    ? Math.round(mediumTestCount)
                    : this.state.quickMediumCount
                  }
                  onChange={(e) => {
                    this.setState({
                      quickMediumCount: e.target.value * 1,
                      revealFinal: false,
                    })
                  }}
                  disabled={this.state.revealLongform}
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
                      mediumTestFrequency: e.target.value,
                      revealFinal: false,
                    })
                  }}
                required/>
                <div className="input-group-append">
                  <span className="input-group-text">days</span>
                </div>
              </div>
            </form>

            <div style={{ display: this.state.revealLongform ? "none" : "block" }}>
              Not sure how to get these numbers?&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-large btn-primary" onClick={e => this.setState({
                revealLongform: true,
                revealFinal: false,
              })}>Click here for scenario worksheet</button>
            </div>
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
          {this.state.revealFinal
            ? <div style={{marginLeft:"15%", marginRight: "15%"}}>
              <h4>Outcomes</h4>
              <div style={{color: 'red'}}>
                {["fallStudentsPct", "studentCampusFrequency", "undergrad",
                  "fallFacultyPct", "facultyCampusFrequency", "normalFaculty",
                  "fallStaffPct", "staffCampusFrequency", "normalStaff",
                  "gradCountHigh", "gradCountMed",
                  "contractCountHigh", "contractCountMed"
                ].map((key) => {
                  return (!isNaN(this.state[key] * 1)) ? null : "Non-numeric value for: " + key;
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
                {Math.round(
                  (this.state.revealLongform
                    ? (highTestCount / this.state.highTestFrequency + mediumTestCount / this.state.mediumTestFrequency)
                    : (this.state.quickHighCount / this.state.highTestFrequency + this.state.quickMediumCount / this.state.mediumTestFrequency)
                  )
                * this.state.costPerTest * this.state.semesterLength).toLocaleString()}</strong>
              </div>
          </div>
          : <button className="btn btn-large btn-info" onClick={e => this.setState({ revealFinal: true })}>Project Costs</button>
        }
        </div>
        <br/>
        <br/>
      </div>
    </div>);
  }
}

export default App;
