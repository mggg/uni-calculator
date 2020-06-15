(this.webpackJsonpunicalc=this.webpackJsonpunicalc||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),i=(a(13),a(4)),c=a(5),o=a(1),u=a(6),m=a(7);function d(e){return l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"form-group",style:{display:"flex",justifyContent:"space-between",paddingTop:"7px",paddingBottom:"7px"}},l.a.createElement("label",{htmlFor:e.id},e.label),l.a.createElement("div",{style:{display:"flex"}},void 0!==e.percent?l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control percent-readout",min:"0",max:"100",value:1*e.value.toFixed(1),onChange:function(t){var a=Math.min(100,Math.max(0,1*t.target.value));e.onChange(a)},disabled:e.disabled}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%")),e.middleText?l.a.createElement("span",{className:"middleText",style:{fontSize:"10pt"}},e.middleText):null):null,l.a.createElement("input",{type:"number",lang:"en",className:"form-control student-block",min:"0",value:void 0!==e.percent?Math.round(e.value/100*e.source):Math.round(e.value),onChange:function(t){if(void 0!==e.percent){var a=1*(t.target.value/e.source*100).toFixed(1);e.onChange(a)}else e.onChange(t.target.value)},disabled:e.disabled}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},e.counts)))),e.help?l.a.createElement("small",null,e.help):null)}function h(e){return l.a.createElement("label",{style:{display:"block"},className:"scenario "+(e.selected===e.id?"select":"")},l.a.createElement("input",{type:"radio",name:"scenario",onChange:function(t){return e.onSelect(e.id)},checked:e.selected===e.id}),l.a.createElement("strong",null,e.headline))}function p(e){return l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"High test cohort",l.a.createElement("br",null),l.a.createElement("em",null,"(on campus at least 3 times a week)")),l.a.createElement("td",null,"Medium test cohort",l.a.createElement("br",null),l.a.createElement("em",null,"(on campus at 1-2 times a week)")),l.a.createElement("td",null,"Remote or occasional")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control percent-readout",min:"0",max:"100",value:e.highFrequencyPct,onChange:function(t){var a=e.inPersonPct,n=Math.max(0,Math.min(100,t.target.value));n>a&&(a=n),e.onChange(a,n)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%"))))),l.a.createElement("td",null,l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control percent-readout",min:"0",max:"100",value:e.inPersonPct-e.highFrequencyPct,onChange:function(t){var a=e.inPersonPct,n=a-Math.max(0,Math.min(100,t.target.value));n<0&&(a=t.target.value),e.onChange(a,n)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%"))))),l.a.createElement("td",null,l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control percent-readout",min:"0",max:"100",value:100-e.inPersonPct,onChange:function(t){var a=100-t.target.value,n=e.highFrequencyPct;a<n&&(n=a),e.onChange(a,n)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%")))))),l.a.createElement("tr",null,e.help.map((function(e,t){return l.a.createElement("td",{key:t},l.a.createElement("small",null,e))})))))}function f(e){return l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,"High test cohort"),l.a.createElement("td",null,"Medium test cohort")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{style:{width:"200px"}},"Out of ",e.total.toLocaleString()," ",e.plural,":")),l.a.createElement("td",null,l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control",min:"0",max:e.total,value:e.highFreqCount,onChange:function(t){var a=Math.min(e.total,1*t.target.value),n=e.medFreqCount;a+n>e.total&&(n=e.total-a),e.onChange(a,n)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"members"))))),l.a.createElement("td",null,l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control",min:"0",max:e.total,value:e.medFreqCount,onChange:function(t){var a=Math.min(e.total,1*t.target.value),n=e.highFreqCount;a+n>e.total&&(n=e.total-a),e.onChange(n,a)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"members")))))),l.a.createElement("tr",null,l.a.createElement("td",null),e.help.map((function(e,t){return l.a.createElement("td",{key:t},l.a.createElement("small",null,e))})))))}a(14);var g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={scenarioSelect:0,revealLongform:!1,revealFinal:!1,quickHighCount:400,quickMediumCount:400,undergrad:800,grad:200,residential:50,fallStudentsPct:80,fallInPersonPct:100,studentCampusFrequency:50,gradCountHigh:60,gradCountMed:0,normalFaculty:0,fallFacultyPct:50,facultyCampusFrequency:50,normalStaff:0,fallStaffPct:50,staffCampusFrequency:50,contractStaff:0,contractCountHigh:0,contractCountMed:0,colleges:[],costPerTest:25,semesterLength:80,highTestFrequency:3,mediumTestFrequency:7},n.updateRawVal=n.updateRawVal.bind(Object(o.a)(n)),n.prefill=n.prefill.bind(Object(o.a)(n)),n.preplan=n.preplan.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/uni-calculator/college_vals.csv").then((function(e){return e.text()})).then((function(t){var a=[{name:" Select"}],n=t.trim().split("\n"),l=n[0].trim().split(",");(n=n.slice(1)).forEach((function(e){var t=e.split(",");a.push({name:t[l.indexOf("Name")],undergrad:1*t[l.indexOf("Undergraduate enrollment")],grad:1*t[l.indexOf("Graduate enrollment")],residential:Math.min(100,1*t[l.indexOf("Dorm capacity")]*100/(1*t[l.indexOf("Undergraduate enrollment")]))})})),a.sort((function(e,t){return e.name>t.name?1:-1})),e.setState({colleges:a})}))}},{key:"updateRawVal",value:function(e,t){var a={revealFinal:!1};a[e]=t,this.setState(a)}},{key:"prefill",value:function(e){var t=this.state.colleges[e];this.setState({undergrad:t.undergrad,grad:t.grad,fallStudentsPct:100,residential:t.residential,revealFinal:!1})}},{key:"preplan",value:function(e){1*e===0?this.setState({scenarioSelect:0,revealFinal:!1}):1*e===1?this.setState({fallStudentsPct:70,fallInPersonPct:80,studentCampusFrequency:70,fallFacultyPct:80,facultyCampusFrequency:50,fallStaffPct:60,staffCampusFrequency:50,contractCountHigh:Math.min(this.state.contractStaff,250),scenarioSelect:1,revealFinal:!1}):1*e===2?this.setState({fallStudentsPct:40,fallInPersonPct:90,studentCampusFrequency:45,fallFacultyPct:60,facultyCampusFrequency:30,fallStaffPct:50,staffCampusFrequency:40,contractCountHigh:Math.min(this.state.contractStaff,100),scenarioSelect:2,revealFinal:!1}):1*e===3?this.setState({fallStudentsPct:85,fallInPersonPct:90,studentCampusFrequency:80,fallFacultyPct:65,facultyCampusFrequency:15,fallStaffPct:25,staffCampusFrequency:25,contractCountHigh:Math.min(this.state.contractStaff,100),scenarioSelect:3,revealFinal:!1}):1*e===4&&this.setState({fallStudentsPct:90,fallInPersonPct:50,studentCampusFrequency:50,fallFacultyPct:50,facultyCampusFrequency:40,fallStaffPct:50,staffCampusFrequency:30,contractCountHigh:0,scenarioSelect:4,revealFinal:!1})}},{key:"disableScenario",value:function(){return 1*this.state.scenarioSelect!==0}},{key:"render",value:function(){var e=this,t=this.state.fallStudentsPct/100*this.state.studentCampusFrequency/100*this.state.undergrad+this.state.fallFacultyPct/100*this.state.facultyCampusFrequency/100*this.state.normalFaculty+this.state.fallStaffPct/100*this.state.staffCampusFrequency/100*this.state.normalStaff+this.state.gradCountHigh+this.state.contractCountHigh,a=this.state.fallStudentsPct/100*(1-this.state.studentCampusFrequency/100)*this.state.undergrad+this.state.fallFacultyPct/100*(1-this.state.facultyCampusFrequency/100)*this.state.normalFaculty+this.state.fallStaffPct/100*(1-this.state.staffCampusFrequency/100)*this.state.normalStaff+this.state.gradCountMed+this.state.contractCountMed;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},l.a.createElement("h2",null,"COVID-19 Testing Calculator")),l.a.createElement("section",{className:"qSection"},l.a.createElement("p",{style:{textAlign:"left",padding:"10px"}},l.a.createElement("strong",null,"This is a scenario-building tool to help university leadership arrive at plans for COVID testing cohorts and frequency for the Fall 2020 semester."),"  Its intention is to help universities plan a bulk testing commitment in June, such as (but not exclusively) the testing service to be offered by the Broad Institute.")),l.a.createElement("section",{className:"qSection suggestions"},l.a.createElement("h4",null,"Summary of modeling recommendations"),l.a.createElement("p",null,"Here\u2019s a quick review of suggested frequency for surveillance testing with isolation strategy, without assumptions on contact tracing."),l.a.createElement("ul",null,l.a.createElement("li",null,"Rochelle Walensky\u2019s team (Harvard Med) recommends Q3 (that is, every three days) testing in order to keep the total number of infections minimized while keeping costs in reasonable range."),l.a.createElement("li",null,"Peter Frazier\u2019s group (Cornell operations research) recommends Q5 testing but does not consider exogenous shocks, may increase frequency when that parameter is added."),l.a.createElement("li",null,"The IDSS COVID Collaboration (contact: Peko Hosoi at MIT) finds that Q12 testing suffices for stability (i.e., to prevent exponential outbreak within campus) with R0 = 2 and 100% sensitivity, but this finding does not take into account total number of infections, only rate of growth. By contrast, R0 = 2.5 and 70% sensitivity leads to recommendation of Q5.6, still only taking growth rate into account. The group\u2019s survey of SIR/MCMC/network models indicates that Q12 testing could result in over half of campus infected, while Q3 is likely under 1%.")),l.a.createElement("p",null,l.a.createElement("strong",null,"The bottom line:")," a strategy where every individual is tested twice weekly would be in line with all available credible models. A weekly strategy is still extremely helpful for maintaining a steady and tolerably low infection rate on campus."))),l.a.createElement("div",{style:{display:this.state.revealLongform?"block":"none"}},l.a.createElement("hr",{id:"separator"}),l.a.createElement("div",{className:"qSection prefill"},l.a.createElement("h3",null,"Load data for a university"),l.a.createElement("br",null),"University \xa0\xa0",l.a.createElement("select",{onChange:function(t){return e.prefill(t.target.value)}},this.state.colleges.map((function(e,t){return l.a.createElement("option",{key:t,value:t},e.name)}))),l.a.createElement("br",null),l.a.createElement("small",null,"Source: HIFLD Open GeoData, 2017-2018"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Students"),l.a.createElement(d,{id:"undergrad",label:"Usual undergraduate enrollment",value:this.state.undergrad,counts:"students",onChange:function(t){return e.updateRawVal("undergrad",1*t)}}),l.a.createElement(d,{id:"grad",label:"Usual graduate enrollment",value:this.state.grad,counts:"students",onChange:function(t){return e.updateRawVal("grad",1*t)}}),l.a.createElement(d,{id:"residential",label:"Usual residential percentage",value:this.state.residential,counts:"%",onChange:function(t){return e.updateRawVal("residential",Math.min(100,Math.max(0,1*t)))}})),l.a.createElement("div",{className:"qSection prefill"},l.a.createElement("br",null),l.a.createElement("strong",null,"Correct the numbers above to match actual values. Datasets may be out of date, may include multiple campuses, etc."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Faculty"),l.a.createElement(d,{id:"faculty",label:"Regular faculty",value:this.state.normalFaculty,counts:"members",onChange:function(t){return e.updateRawVal("normalFaculty",1*t)}})),l.a.createElement("div",{className:"qSection prefill"},l.a.createElement("h4",null,"Staff"),l.a.createElement(d,{id:"staff",label:"On-campus staff, university-employed",value:this.state.normalStaff,counts:"members",onChange:function(t){return e.updateRawVal("normalStaff",1*t)}}),l.a.createElement(d,{id:"contract",label:"On-campus staff, contract (incl. part-time instructors)",value:this.state.contractStaff,counts:"members",onChange:function(t){return e.updateRawVal("contractStaff",1*t)}})),l.a.createElement("hr",{id:"separator"}),l.a.createElement("div",{className:"qSection"},l.a.createElement("section",null,l.a.createElement("h3",null,"Scenarios"),l.a.createElement("p",null,"All parameters will be customizable below, but we begin with the assumption of an 80-day semester, which is a working hypothesis for many schools."),l.a.createElement("p",null,"We will build a HIGH testing cohort (those coming to campus at least 3 days per week) and a MEDIUM testing cohort (those coming to campus 1-2 days per week). Other testing should be handled by a LOW testing cohort which includes some occasional and some ad hoc testing, but we leave that out of this calculation because bulk testing options will probably not be available for low-testing/ad hoc group."),l.a.createElement(h,{id:1,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A large highly residential university.",body:"The student life is very campus-centric and there are a large number of grant-funded research labs that need staffing.  A large number of students are from overseas and are unlikely to be able to return to campus in person."}),l.a.createElement(h,{id:2,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A large, less-residential university.",body:"In normal times, many students commute.  Larger number of part-time and adjunct-style instructional staff."}),l.a.createElement(h,{id:3,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A medium university with graduate programs.",body:"This campus has a very limited number of adjunct-style instructional faculty. However, a substantial share of the tenure-stream faculty are electing for either all-virtual instruction or for hybrid teaching with one day per week on campus. The campus-employed staff can mostly work from home, and only a small number of staff are deemed essential for lab research operations."}),l.a.createElement(h,{id:4,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A small college with very high residency rate and limited dormitory space,",body:"so no feasible options for de-densification at full residency. A decision has been made to limit campus residency to first- and fourth-years, with all second- and third-years studying virtually."}),l.a.createElement(h,{id:0,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"Build Your Own Scenario",body:""}))),l.a.createElement("br",null),l.a.createElement("div",{className:"qSection",style:{display:(this.state.scenarioSelect,"block")}},l.a.createElement("br",null),l.a.createElement(d,{id:"fall",label:"Projected student enrollment in fall",value:this.state.fallStudentsPct,source:this.state.undergrad+this.state.grad,middleText:"of normal enrollment =",counts:"students",percent:"%",onChange:function(t){return e.updateRawVal("fallStudentsPct",1*t)},help:"This is the percent of normal student headcount you expect to enroll and pay tuition this fall. If total enrollment is projected at 80% of usual, put 80 in the first box."}),l.a.createElement("h5",null,"ENROLLED UNDERGRADUATE STUDENTS",l.a.createElement("br",null),l.a.createElement("em",null,"Reminder: normal undergraduate enrollment is\xa0",(this.state.undergrad+this.state.grad).toLocaleString())),l.a.createElement(p,{help:["This is the percent of students enrolled in the fall that you think will come to campus at least 3 times a week. If you think 25% of enrolled students will come to campus 3+ times a week, enter 25 in the box above.  Use residency percentage as a guide.","This is the percent of students enrolled in the fall that you think will come to campus 1-2 times a week. If you think 50% of enrolled students will come to campus 1-2 times a week, enter 50 in the box above.","This is the percent of students enrolled in the fall that you think will be completely remote (coming to campus less than once a week). If you think 25% of enrolled students will rarely or never come to campus in person, enter 25 in the box above."],inPersonPct:this.state.fallInPersonPct,highFrequencyPct:this.state.studentCampusFrequency,onChange:function(t,a){return e.setState({fallInPersonPct:1*t,studentCampusFrequency:1*a,revealFinal:!1})}}),l.a.createElement("hr",null),l.a.createElement("h5",null,"FACULTY"),l.a.createElement(p,{help:["Student-facing faculty who are at higher risk for severe illness.","Student-facing faculty not in the high test cohort","Faculty who are not student-facing"],inPersonPct:this.state.fallFacultyPct,highFrequencyPct:this.state.facultyCampusFrequency,onChange:function(t,a){return e.setState({fallFacultyPct:1*t,facultyCampusFrequency:1*a,revealFinal:!1})}}),l.a.createElement("hr",null),l.a.createElement("h5",null,"UNIVERSITY-EMPLOYED STAFF"),l.a.createElement(p,{help:["Student-facing staff who are at higher risk for severe illness.","Student-facing staff not in the high test cohort","Staff who are not student-facing"],inPersonPct:this.state.fallStaffPct,highFrequencyPct:this.state.staffCampusFrequency,onChange:function(t,a){return e.setState({fallStaffPct:1*t,staffCampusFrequency:1*a,revealFinal:!1})}}),l.a.createElement("hr",null),l.a.createElement("h5",null,"GRADUATE STUDENTS"),l.a.createElement(f,{help:["How many graduate students will come to campus at least 3x/week?  For instance, grads who work in high-contact labs, or grads with heavy teaching.","How many graduate students will come to campus 1-2 times/week?  For instance, grads with lighter teaching or who will attend a small number of in-person classes."],total:this.state.grad,plural:"graduate students",highFreqCount:this.state.gradCountHigh,medFreqCount:this.state.gradCountMed,onChange:function(t,a){return e.setState({gradCountHigh:1*t,gradCountMed:1*a,revealFinal:!1})}}),l.a.createElement("hr",null),l.a.createElement("h5",null,"CONTRACT STAFF"),l.a.createElement(f,{help:["How many contract staff will come to campus at least 3x/week?  For instance, dining hall and janitorial staff with heavy schedules.","How many contract staff will come to campus 1-2 times/week?"],total:this.state.contractStaff,plural:"contract staff",highFreqCount:this.state.contractCountHigh,medFreqCount:this.state.contractCountMed,onChange:function(t,a){return e.setState({contractCountHigh:1*t,contractCountMed:1*a,revealFinal:!1})}}))),l.a.createElement("div",null,l.a.createElement("div",{className:"qSection"},l.a.createElement("hr",{id:"separator"}),l.a.createElement("h4",null,"Quick Calculator"))),l.a.createElement("div",{className:"qSection cohorts"},l.a.createElement("div",null,l.a.createElement("label",null,"High-testing cohort"),l.a.createElement("br",null),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control",min:"0",value:this.state.revealLongform?Math.round(t):this.state.quickHighCount,onChange:function(t){e.setState({quickHighCount:1*t.target.value,revealFinal:!1})},disabled:this.state.revealLongform,required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"members")))),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"every")),l.a.createElement("input",{type:"number",className:"form-control",min:"0",step:"0.01",value:this.state.highTestFrequency,onChange:function(t){e.setState({highTestFrequency:t.target.value,revealFinal:!1})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"days"))))),l.a.createElement("div",null,l.a.createElement("label",null,"Medium-testing cohort"),l.a.createElement("br",null),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control",min:"0",value:this.state.revealLongform?Math.round(a):this.state.quickMediumCount,onChange:function(t){e.setState({quickMediumCount:1*t.target.value,revealFinal:!1})},disabled:this.state.revealLongform,required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"members")))),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"every")),l.a.createElement("input",{type:"number",className:"form-control",min:"0",step:".01",value:this.state.mediumTestFrequency,onChange:function(t){e.setState({mediumTestFrequency:t.target.value,revealFinal:!1})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"days")))),l.a.createElement("div",{style:{display:this.state.revealLongform?"none":"block"}},"Not sure how to get these numbers?\xa0\xa0\xa0\xa0",l.a.createElement("button",{className:"btn btn-large btn-primary",onClick:function(t){return e.setState({revealLongform:!0,revealFinal:!1})}},"Click here for scenario worksheet"))),l.a.createElement("hr",null),l.a.createElement("div",{style:{width:"60%",display:"flex",justifyContent:"space-between"}},"Cost per test",l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control",min:"0",step:".01",value:this.state.costPerTest,onChange:function(t){e.setState({costPerTest:1*t.target.value})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"dollars"))))),l.a.createElement("div",{style:{width:"60%",display:"flex",justifyContent:"space-between"}},"Semester length",l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",min:"0",className:"form-control",value:this.state.semesterLength,onChange:function(t){e.setState({semesterLength:1*t.target.value})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"days")))))),l.a.createElement("div",{style:{background:"#eee",textAlign:"center",paddingTop:"10px",paddingBottom:"15px"}},this.state.revealFinal?l.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},l.a.createElement("h4",null,"Outcomes"),l.a.createElement("div",{style:{color:"red"}},["fallStudentsPct","studentCampusFrequency","undergrad","fallFacultyPct","facultyCampusFrequency","normalFaculty","fallStaffPct","staffCampusFrequency","normalStaff","gradCountHigh","gradCountMed","contractCountHigh","contractCountMed"].map((function(t){return isNaN(1*e.state[t])?"Non-numeric value for: "+t:null}))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},"Cost per person for semester (high-testing group)",l.a.createElement("strong",null,"$",(this.state.costPerTest*this.state.semesterLength/this.state.highTestFrequency).toFixed(2))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},"Cost per person for semester (medium-testing group)",l.a.createElement("strong",null,"$",(this.state.costPerTest*this.state.semesterLength/this.state.mediumTestFrequency).toFixed(2))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"85%"}},"Total cost",l.a.createElement("strong",null,"$",Math.round((this.state.revealLongform?t/this.state.highTestFrequency+a/this.state.mediumTestFrequency:this.state.quickHighCount/this.state.highTestFrequency+this.state.quickMediumCount/this.state.mediumTestFrequency)*this.state.costPerTest*this.state.semesterLength).toLocaleString()))):l.a.createElement("button",{className:"btn btn-large btn-info",onClick:function(t){return e.setState({revealFinal:!0})}},"Project Costs")),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ef177fe1.chunk.js.map