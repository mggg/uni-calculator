(this.webpackJsonpunicalc=this.webpackJsonpunicalc||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(3),r=a.n(s),c=(a(13),a(4)),i=a(5),u=a(1),o=a(7),m=a(6);function d(e){return l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"form-group",style:{display:"flex",justifyContent:"space-between",paddingTop:"7px",paddingBottom:"7px"}},l.a.createElement("label",{htmlFor:e.id},e.label),l.a.createElement("div",{style:{display:"flex"}},void 0!==e.percent?l.a.createElement("div",{className:"percent-block"},l.a.createElement("input",{type:"number",className:"form-control percent-readout",min:"0",max:"100",value:Math.round(e.value/e.source*100),onChange:function(t){var a=Math.min(100,Math.max(0,1*t.target.value));e.onChange(a/100*e.source)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%"))):null,l.a.createElement("input",{type:"number",lang:"en",className:"form-control student-block",min:"0",value:Math.round(e.value),onChange:function(t){return e.onChange(t.target.value)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},e.counts)))))}function f(e){return l.a.createElement("label",{className:"scenario "+(e.selected===e.id?"select":"")},l.a.createElement("input",{type:"radio",name:"scenario",onChange:function(t){return e.onSelect(e.id)},checked:e.selected===e.id}),l.a.createElement("strong",null,e.headline),e.body)}function p(e){return l.a.createElement("div",null,l.a.createElement("label",null,e.label,": 1-2/week (medium testing) vs. 3+/week (high testing)"),l.a.createElement("br",null),l.a.createElement("input",{type:"range",min:"0",max:"100",step:"1",onChange:e.onChange,value:e.value}),l.a.createElement("span",null,"\xa0\xa0\xa0",e.value.toFixed(1),"% high, ",(100-e.value).toFixed(1),"% medium"))}a(14);var h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={scenarioSelect:0,undergrad:800,grad:200,beds:1e3,fallStudents:800,fallInPerson:800,studentCampusFrequency:50,normalFaculty:100,fallFaculty:80,facultyCampusFrequency:50,normalStaff:50,fallStaff:50,staffCampusFrequency:50,contractStaff:20,fallContractStaff:20,contractCampusFrequency:50,colleges:[],costPerTest:20,semesterLength:80,highTestFrequency:3,mediumTestFrequency:7,reveal:!1},n.updateRawVal=n.updateRawVal.bind(Object(u.a)(n)),n.prefill=n.prefill.bind(Object(u.a)(n)),n.preplan=n.preplan.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/uni-calculator/college_vals.csv").then((function(e){return e.text()})).then((function(t){var a=[{name:" Select"}],n=t.trim().split("\n"),l=n[0].trim().split(",");(n=n.slice(1)).forEach((function(e){var t=e.split(",");a.push({name:t[l.indexOf("Name")],undergrad:1*t[l.indexOf("Undergraduate enrollment")],grad:1*t[l.indexOf("Graduate enrollment")],dorms:1*t[l.indexOf("Dorm capacity")]})})),a.sort((function(e,t){return e.name>t.name?1:-1})),e.setState({colleges:a})}))}},{key:"updateRawVal",value:function(e,t){var a={};a[e]=t,this.setState(a)}},{key:"prefill",value:function(e){var t=this.state.colleges[e];this.setState({undergrad:t.undergrad,grad:t.grad,fallStudents:t.undergrad+t.grad,beds:t.dorms})}},{key:"preplan",value:function(e){1*e===0?this.setState({scenarioSelect:0}):1*e===1?this.setState({fallStudents:.7*(this.state.undergrad+this.state.grad),fallInPerson:.7*(this.state.undergrad+this.state.grad)*.8,studentCampusFrequency:87.5,facultyCampusFrequency:62.5,staffCampusFrequency:50,fallContractStaff:250,contractCampusFrequency:100,scenarioSelect:1}):1*e===2?this.setState({fallStudents:.4*(this.state.undergrad+this.state.grad),fallInPerson:.4*(this.state.undergrad+this.state.grad)*.9,studentCampusFrequency:50,facultyCampusFrequency:50,staffCampusFrequency:80,fallContractStaff:250,contractCampusFrequency:100,scenarioSelect:2}):1*e===3?this.setState({fallStudents:.85*(this.state.undergrad+this.state.grad),fallInPerson:.85*(this.state.undergrad+this.state.grad)*.9,studentCampusFrequency:8/9*100,facultyCampusFrequency:16/65*100,staffCampusFrequency:25,fallContractStaff:150,contractCampusFrequency:100,scenarioSelect:3}):1*e===4&&this.setState({fallStudents:.9*(this.state.undergrad+this.state.grad),fallInPerson:.9*(this.state.undergrad+this.state.grad)*.5,studentCampusFrequency:100,facultyCampusFrequency:80,staffCampusFrequency:60,contractCampusFrequency:0,scenarioSelect:4})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},l.a.createElement("h2",null,"COVID-19 Testing Calculator")),l.a.createElement("section",{className:"qSection"},l.a.createElement("h3",null,"Description"),l.a.createElement("p",{style:{textAlign:"left"}},"This is a scenario-building tool to help university leadership arrive at plans for COVID testing cohorts and frequency for the Fall 2020 semester.  Its intention is to help universities plan a bulk testing commitment in June, such as (but not exclusively) the testing service to be offered by the Broad Institute.")),l.a.createElement("section",{className:"qSection"},l.a.createElement("h3",null,"Summary of modeling recommendations"),l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)))),l.a.createElement("hr",{id:"separator"}),l.a.createElement("div",{className:"qSection prefill"},l.a.createElement("h3",null,"Load data for a university"),l.a.createElement("small",null,"Source: HIFLD Open GeoData, 2017-2018"),l.a.createElement("br",null),l.a.createElement("small",null,"One university may include multiple campuses"),l.a.createElement("br",null),l.a.createElement("br",null),"Pre-fill data\xa0\xa0",l.a.createElement("select",{onChange:function(t){return e.prefill(t.target.value)}},this.state.colleges.map((function(e,t){return l.a.createElement("option",{key:t,value:t},e.name)}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Students"),l.a.createElement(d,{id:"undergrad",label:"Undergraduate enrollment",value:this.state.undergrad,counts:"students",onChange:function(t){return e.updateRawVal("undergrad",1*t)}}),l.a.createElement(d,{id:"grad",label:"Graduate enrollment",value:this.state.grad,counts:"students",onChange:function(t){return e.updateRawVal("grad",1*t)}}),l.a.createElement(d,{id:"dorms",label:"Dormitory capacity",value:this.state.beds,counts:"beds",onChange:function(t){return e.updateRawVal("beds",1*t)}})),l.a.createElement("div",{className:"qSection prefill"},l.a.createElement("br",null),l.a.createElement("strong",null,"Provide numbers of faculty and staff"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Faculty"),l.a.createElement(d,{id:"faculty",label:"Normal faculty",value:this.state.normalFaculty,counts:"members",onChange:function(t){return e.updateRawVal("normalFaculty",1*t)}})),l.a.createElement("div",{className:"qSection prefill"},l.a.createElement("h4",null,"Staff"),l.a.createElement(d,{id:"staff",label:"On-campus staff, university-employed",value:this.state.normalStaff,counts:"members",onChange:function(t){return e.updateRawVal("normalStaff",1*t)}}),l.a.createElement(d,{id:"contract",label:"On-campus staff, contract",value:this.state.contractStaff,counts:"members",onChange:function(t){return e.updateRawVal("contractStaff",1*t)}})),l.a.createElement("hr",{id:"separator"}),l.a.createElement("div",{className:"qSection"},l.a.createElement("section",null,l.a.createElement("h3",null,"Scenarios"),l.a.createElement("p",null,"All parameters will be customizable below, but we begin with the assumption of an 80-day semester, which is a working hypothesis for many schools."),l.a.createElement("p",null,"We will build a HIGH testing cohort (those coming to campus at least 3 days per week) and a MEDIUM testing cohort (those coming to campus 1-2 days per week). Other testing should be handled by a LOW testing cohort which includes some occasional and some ad hoc testing, but we leave that out of this calculation because bulk testing options will probably not be available for low-testing/ad hoc group."),l.a.createElement(f,{id:1,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A large highly residential university.",body:"The student life is very campus-centric and there are a large number of grant-funded research labs that need staffing.  A large number of students are from overseas and are unlikely to be able to return to campus in person."}),l.a.createElement(f,{id:2,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A large, less-residential university.",body:"In normal times, many students commute.  Larger number of part-time and adjunct-style instructional staff."}),l.a.createElement(f,{id:3,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A medium university with graduate programs.",body:"This campus has a very limited number of adjunct-style instructional faculty. However, a substantial share of the tenure-stream faculty are electing for either all-virtual instruction or for hybrid teaching with one day per week on campus. The campus-employed staff can mostly work from home, and only a small number of staff are deemed essential for lab research operations."}),l.a.createElement(f,{id:4,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"A small college with very high residency rate and limited dormitory space,",body:"so no feasible options for de-densification at full residency. A decision has been made to limit campus residency to first- and fourth-years, with all second- and third-years studying virtually."}),l.a.createElement(f,{id:0,selected:this.state.scenarioSelect,onSelect:this.preplan,headline:"Build Your Own Scenario",body:""}))),l.a.createElement("br",null),l.a.createElement("div",{class:"qSection",style:{display:(this.state.scenarioSelect,"block")}},l.a.createElement("strong",null,"In-depth parameter selection"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{id:"fall",label:"Projected student enrollment in fall",value:this.state.fallStudents,source:this.state.undergrad+this.state.grad,counts:"students",percent:"%",onChange:function(t){return e.updateRawVal("fallStudents",1*t)}}),l.a.createElement(d,{id:"fall",label:"Projected weekly on-campus campus",value:this.state.fallInPerson,source:this.state.fallStudents,counts:"students",percent:"%",onChange:function(t){return e.updateRawVal("fallInPerson",1*t)}}),l.a.createElement(p,{label:"Student campus-visit frequency",value:this.state.studentCampusFrequency,onChange:function(t){return e.setState({studentCampusFrequency:1*t.target.value})}}),l.a.createElement("hr",null),l.a.createElement(d,{id:"studentfacing",label:"Tenure-stream faculty on campus weekly in Fall",value:this.state.fallFaculty,source:this.state.normalFaculty,counts:"members",percent:"%",onChange:function(t){return e.updateRawVal("fallFaculty",1*t)}}),l.a.createElement(p,{label:"Faculty campus-visit frequency",value:this.state.facultyCampusFrequency,onChange:function(t){return e.setState({facultyCampusFrequency:1*t.target.value})}}),l.a.createElement("hr",null),l.a.createElement(d,{id:"projectstaff",label:"University-employed staff on campus weekly in Fall",value:this.state.fallStaff,source:1*this.state.normalStaff,counts:"members",percent:"%",onChange:function(t){return e.updateRawVal("fallStaff",t)}}),l.a.createElement(p,{label:"Staff campus-visit frequency",value:this.state.staffCampusFrequency,onChange:function(t){return e.setState({staffCampusFrequency:1*t.target.value})}}),l.a.createElement("hr",null),l.a.createElement(d,{id:"contractstaff",label:"Contract staff on campus weekly in Fall",value:this.state.fallContractStaff,source:1*this.state.contractStaff,counts:"members",percent:"%",onChange:function(t){return e.updateRawVal("fallContractStaff",t)}}),l.a.createElement(p,{label:"Contract staff campus-visit frequency",value:this.state.contractCampusFrequency,onChange:function(t){return e.setState({contractCampusFrequency:1*t.target.value})}})),l.a.createElement("hr",{id:"separator"}),l.a.createElement("div",{className:"qSection cohorts"},l.a.createElement("h4",null,"Testing"),"When all groups are combined,",l.a.createElement("div",null,l.a.createElement("label",null,"High-testing cohort"),l.a.createElement("br",null),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control percent-readout",min:"0",value:Math.round((this.state.fallInPerson*this.state.studentCampusFrequency+this.state.fallFaculty*this.state.facultyCampusFrequency+this.state.fallStaff*this.state.staffCampusFrequency+this.state.fallContractStaff*this.state.contractCampusFrequency)/(this.state.fallInPerson+this.state.fallFaculty+this.state.fallStaff+this.state.fallContractStaff)*10)/10,disabled:!0,required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%")))),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control",min:"0",value:Math.round((this.state.fallInPerson*this.state.studentCampusFrequency+this.state.fallFaculty*this.state.facultyCampusFrequency+this.state.fallStaff*this.state.staffCampusFrequency+this.state.fallContractStaff*this.state.contractCampusFrequency)/100),disabled:"disabled",required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"members")))),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"every")),l.a.createElement("input",{type:"number",className:"form-control",min:"0",step:"0.01",value:this.state.highTestFrequency,onChange:function(t){e.setState({highTestFrequency:t.target.value})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"days"))))),l.a.createElement("div",null,l.a.createElement("label",null,"Medium-testing cohort"),l.a.createElement("br",null),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",min:"0",className:"form-control percent-readout",value:Math.round(1e3-(this.state.fallInPerson*this.state.studentCampusFrequency+this.state.fallFaculty*this.state.facultyCampusFrequency+this.state.fallStaff*this.state.staffCampusFrequency+this.state.fallContractStaff*this.state.contractCampusFrequency)/(this.state.fallInPerson+this.state.fallFaculty+this.state.fallStaff+this.state.fallContractStaff)*10)/10,disabled:"disabled",required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"%")))),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control",min:"0",value:Math.round((this.state.fallInPerson*(100-this.state.studentCampusFrequency)+this.state.fallFaculty*(100-this.state.facultyCampusFrequency)+this.state.fallStaff*(100-this.state.staffCampusFrequency)+this.state.fallContractStaff*(100-this.state.contractCampusFrequency))/100),disabled:"disabled",required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"members")))),l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"every")),l.a.createElement("input",{type:"number",className:"form-control",min:"0",step:".01",value:this.state.mediumTestFrequency,onChange:function(t){e.setState({mediumTestFrequency:t.target.value})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"days"))))),l.a.createElement("hr",null),l.a.createElement("div",{style:{width:"60%",display:"flex",justifyContent:"space-between"}},"Cost per test",l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",className:"form-control",min:"0",step:".01",value:this.state.costPerTest,onChange:function(t){e.setState({costPerTest:1*t.target.value})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"dollars"))))),l.a.createElement("div",{style:{width:"60%",display:"flex",justifyContent:"space-between"}},"Semester length",l.a.createElement("form",{className:"form-inline",style:{display:"inline-block"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"number",lang:"en",min:"0",className:"form-control",value:this.state.semesterLength,onChange:function(t){e.setState({semesterLength:1*t.target.value})},required:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},"days")))))),l.a.createElement("div",{style:{background:"#eee",textAlign:"center",paddingTop:"10px",paddingBottom:"15px"}},this.state.reveal?l.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},l.a.createElement("h4",null,"Outcomes"),l.a.createElement("div",{style:{color:"red"}},["semesterLength","highTestFrequency","costPerTest","mediumTestFrequency","fallStaff","fallFaculty","fallStudents","fallInPerson"].map((function(t){return 1*e.state[t]?null:"Non-numeric value for: "+t}))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},"Cost per person for semester (high-testing group)",l.a.createElement("strong",null,"$",(this.state.costPerTest*this.state.semesterLength/this.state.highTestFrequency).toFixed(2))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},"Cost per person for semester (medium-testing group)",l.a.createElement("strong",null,"$",(this.state.costPerTest*this.state.semesterLength/this.state.mediumTestFrequency).toFixed(2))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"85%"}},"Total cost",l.a.createElement("strong",null,"$",Math.round(this.state.costPerTest*this.state.semesterLength/100*((this.state.fallInPerson*(100-this.state.studentCampusFrequency)+this.state.fallFaculty*(100-this.state.facultyCampusFrequency)+this.state.fallStaff*(100-this.state.staffCampusFrequency)+this.state.fallContractStaff*(100-this.state.contractCampusFrequency))/this.state.mediumTestFrequency+(this.state.fallInPerson*this.state.studentCampusFrequency+this.state.fallFaculty*this.state.facultyCampusFrequency+this.state.fallStaff*this.state.staffCampusFrequency+this.state.fallContractStaff*this.state.contractCampusFrequency)/this.state.highTestFrequency)).toLocaleString()))):l.a.createElement("button",{className:"btn btn-large btn-info",onClick:function(t){return e.setState({reveal:!0})}},"Estimate Costs")),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.728a65c5.chunk.js.map