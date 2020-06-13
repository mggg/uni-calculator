<template>
  <div class="container">
    <div class="col-sm-12">
      <nav class="navbar navbar-dark bg-primary">
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

      <div class="qSection">
        <h4>Students</h4>
        <FormQ id="enrollment" label="Normal enrollment" counts="students"/>
        <FormQ id="dorms" label="Dormitory capacity" counts="beds"/>
        <FormQ id="fall" label="Projected Fall enrollment" counts="students"/>
      </div>

      <div class="qSection">
        <h4>Faculty</h4>
        <FormQ id="faculty" label="Normal faculty" counts="members"/>
        <FormQ id="studentfacing" label="Projected student-facing faculty in Fall" counts="%"/>
      </div>

      <div class="qSection">
        <h4>Staff</h4>
        <FormQ id="staff" label="On-campus staff, university-employed" counts="members"/>
        <FormQ id="contract" label="On-campus staff, contract" counts="members"/>
        <FormQ id="projectstaff" label="Projected on-campus staff in Fall" counts="%"/>
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

      <div style="background:#eee">
        <h4>Outcomes</h4>
        Total cost
        <br/>
        Cost per capita
      </div>

    </div>
  </div>
</template>

<script>
import FormQ from './FormQ'

export default {
  name: 'Calculator',
  components: {
    FormQ
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
h4 {
  text-align: left;
}
nav {
  background-color: #1E578A !important;
  color: #fff;
  padding-top: 15px;
  margin-bottom: 15px;
}
.qSection {
  width: 70%;
  margin-left: 15%;
}
</style>
