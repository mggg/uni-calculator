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

      normalFaculty: 100,
      fallFaculty: 80,

      normalStaff: 50,
      contractStaff: 20,
      fallStaff: 70
    }

    this.updateRawVal = this.updateRawVal.bind(this);
  }

  updateRawVal(key, origVal) {
    let ob = {};
    ob[key] = origVal;
    this.setState(ob);
  }

  render() {
    return (<div className="container">
      <div className="col-sm-12">
        <nav className="navbar navbar-dark bg-primary">
          <h2>COVID-19 Testing Calculator</h2>
        </nav>
        <section>
          <h3>Description</h3>
          <p>This calculator provides cost estimates for university COVID testing plans.</p>
        </section>
        <section>
          <h3>University</h3>
          <select>
            <option>ABC</option>
          </select>
        </section>

        <div className="qSection">
          <h4>Students</h4>
          <FormQ
            id="enrollment"
            label="Normal enrollment"
            value={this.state.enrollment}
            counts="students"
            onChange={val => this.updateRawVal('enrollment', val)}
          />
          <FormQ
            id="dorms"
            label="Dormitory capacity"
            value={this.state.beds}
            counts="beds"
            onChange={val => this.updateRawVal('beds', val)}
          />
          <FormQ
            id="fall"
            label="Projected Fall enrollment"
            value={this.state.fallStudents}
            source={this.state.enrollment}
            counts="students"
            percent="%"
            onChange={val => this.updateRawVal('fallStudents', val)}
          />
        </div>

        <div className="qSection">
          <h4>Faculty</h4>
          <FormQ
            id="faculty"
            label="Normal faculty"
            value={this.state.normalFaculty}
            counts="members"
            onChange={val => this.updateRawVal('normalFaculty', val)}
          />
          <FormQ
            id="studentfacing"
            label="Projected student-facing faculty in Fall"
            value={this.state.fallFaculty}
            source={this.state.normalFaculty}
            counts="members"
            percent="%"
            onChange={val => this.updateRawVal('fallFaculty', val)}
          />
        </div>

        <div className="qSection">
          <h4>Staff</h4>
          <FormQ
            id="staff"
            label="On-campus staff, university-employed"
            value={this.state.normalStaff}
            counts="members"
            onChange={val => this.updateRawVal('normalStaff', val)}
          />
          <FormQ
            id="contract"
            label="On-campus staff, contract"
            value={this.state.contractStaff}
            counts="members"
            onChange={val => this.updateRawVal('contractStaff', val)}
          />
          <FormQ
            id="projectstaff"
            label="Projected on-campus staff in Fall"
            value={this.state.fallStaff}
            source={this.state.normalStaff + this.state.contractStaff}
            counts="members"
            percent="%"
            onChange={val => this.updateRawVal('fallStaff', val)}
          />
        </div>

        <div>
          <h4>Testing</h4>
          <div>
            High-testing cohort
          </div>
          <div>
            Medium-testing cohort
          </div>
          <div>
            Cost per test
          </div>
          <div>
            Semester length
          </div>
        </div>

        <div style={{background: '#eee'}}>
          <h4>Outcomes</h4>
          Total cost
          <br/>
          Cost per capita
        </div>

      </div>
    </div>);
  }
}

export default App;
