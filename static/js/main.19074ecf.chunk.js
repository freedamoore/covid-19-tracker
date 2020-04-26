(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c),s=(a(13),a(5)),o=a(3),i=a(4),u=a(7),m=a(6);a(14),a(15),a(16);var d=function(e){var t,a=e.title,n=e.count;return l.a.createElement("div",{className:"card-border"},l.a.createElement("div",{className:"card-container"},l.a.createElement("h2",null,a),l.a.createElement("p",null,(t=n,(t+="").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))))},h=function(e){var t=e.global,a=t.total_cases,n=t.total_deaths,c=t.total_affected_countries;return l.a.createElement("div",{className:"card-list"},l.a.createElement(d,{title:"Total Cases",count:a}),l.a.createElement(d,{title:"Total Deaths",count:n}),l.a.createElement(d,{title:"Countries Affected",count:c}))},E=(a(17),a(18),a(19),function(e){var t=e.countryName,a=e.countryCode,n=e.countryCases,c=e.countryDeaths,r=e.handleViewClick;return l.a.createElement("div",null,l.a.createElement("a",{href:"#popup",className:"timeline-button",onClick:function(){return r(a,t,n,c)}},"View"))});function f(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var v=function(e){var t=e.country,a=e.globalCases,n=e.globalDeaths,c=e.handleViewClick;return l.a.createElement("div",{className:"items"},l.a.createElement("div",{className:"item-block"},l.a.createElement("span",null,t.title)),l.a.createElement("div",{className:"item-block"},l.a.createElement("span",null,f(t.total_cases))),l.a.createElement("div",{className:"item-block"},l.a.createElement("span",null,f(t.total_deaths))),l.a.createElement("div",{className:"item-block"},l.a.createElement("span",null,(t.total_cases/a*100).toFixed(1),"%")),l.a.createElement("div",{className:"item-block"},l.a.createElement("span",null,(t.total_deaths/n*100).toFixed(1),"%")),l.a.createElement("div",{className:"item-block"},l.a.createElement(E,{countryName:t.title,countryCode:t.code,countryCases:t.total_cases,countryDeaths:t.total_deaths,handleViewClick:c})))},p=function(e){var t=e.global,a=t.total_cases,n=t.total_deaths;return l.a.createElement("div",{className:"stats-table"},l.a.createElement("div",{className:"item-headings"},l.a.createElement("div",{className:"header-block"},l.a.createElement("span",null,"Country")),l.a.createElement("div",{className:"header-block"},l.a.createElement("span",null,"Total Cases")),l.a.createElement("div",{className:"header-block"},l.a.createElement("span",null,"Total Deaths")),l.a.createElement("div",{className:"header-block"},l.a.createElement("span",null,"% of Global Cases")),l.a.createElement("div",{className:"header-block"},l.a.createElement("span",null,"% of Global Deaths")),l.a.createElement("div",{className:"header-block"},l.a.createElement("span",null,"Timeline"))),l.a.createElement("div",{className:"list-items"},e.countries.map((function(t){return l.a.createElement(v,{key:t.ourid,country:t,globalCases:a,globalDeaths:n,handleViewClick:e.handleViewClick})}))))},y=(a(20),function(e){var t=e.placeholder,a=e.handleChange;return l.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),b=(a(21),a(22),function(e){var t=e.date,a=e.statsData,n=e.countryCases,c=(e.countryDeaths,e.index),r=e.totalDays,s=e.highest;function o(e,t){return e>0&&t>0?Math.ceil(400*e/s):0}function i(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return l.a.createElement("div",{className:"stat-bar-container",style:{left:"".concat(c*(900/r),"px")}},l.a.createElement("div",{className:"stat-bar",style:{height:"".concat(o(a.new_daily_cases,n),"px")}},l.a.createElement("span",{className:"show-count"}," ",t," cases: ",i(a.new_daily_cases)," deaths: ",i(a.new_daily_deaths)),l.a.createElement("div",{className:"inner-stat-bar",style:{height:"".concat(o(a.new_daily_deaths,n),"px")}})),l.a.createElement("div",{className:"timeline-date"}," ",0===c?"Timeline First Case: ".concat(t):""))});function g(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var N=function(e){var t=e.timelineData,a=e.countryName,n=e.countryCases,c=e.countryDeaths,r=0;return l.a.createElement("div",{className:"popup",id:"popup"},l.a.createElement("div",{className:"popup__content"},l.a.createElement("a",{href:"#",className:"popup__close"},"\xd7"),l.a.createElement("h2",null,a),l.a.createElement("div",{className:"headings-box"},l.a.createElement("h3",{className:"headings-box-1"},"Total Cases: ",g(n)),l.a.createElement("h3",{className:"headings-box-2"},"Total Deaths: ",g(c))),l.a.createElement("div",null,t.map((function(e,t){"stat"!==e[0]&&(r=r<e[1].new_daily_cases?e[1].new_daily_cases:r)}))),l.a.createElement("div",{className:"stat-layout"},t.map((function(e,a){if("stat"!==e[0])return l.a.createElement(b,{key:e[0],date:e[0],statsData:e[1],countryCases:n,countryDeaths:c,index:a,totalDays:t.length,highest:r})}))),l.a.createElement("h4",null,"Hover over bar to see the number of cases for that day.")))},C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.handleViewClick=function(t,a,n,l){fetch("https://api.thevirustracker.com/free-api?countryTimeline="+t).then((function(e){return e.json()})).then((function(t){return e.setState({countryName:a,countryCases:n,countryDeaths:l,timelineData:Object.entries(t.timelineitems[0])})}))},e.state={global:[],countries:[],searchField:"",countryName:"",countryCases:"",countryDeaths:"",timelineData:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://api.thevirustracker.com/free-api?global=stats"),fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Promise.all([a.json(),n.json()])})).then((function(t){return e.setState({global:t[0].results[0],countries:Object.values(t[1].countryitems[0])})}))}},{key:"render",value:function(){var e=this.state,t=e.global,a=e.countries,n=e.searchField,c=e.timelineData,r=e.countryName,s=e.countryCases,o=e.countryDeaths,i=a.filter((function(e){return"undefined"!==typeof e.title?e.title.toLowerCase().includes(n.toLowerCase()):null}));return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Covid-19 Tracker"),l.a.createElement(h,{global:t})),l.a.createElement("div",{className:"sub-header"},l.a.createElement("h3",null,"Affected Countries"),l.a.createElement(y,{placeholder:"Search Countries",handleChange:this.handleChange})),l.a.createElement(p,{countries:i,global:t,handleViewClick:this.handleViewClick}),l.a.createElement("div",{className:"footer"},"Built by ",l.a.createElement("a",{href:"https://freedamoore.github.io/",target:"_blank"},"Freeda Moore")," for the ZTM coding_challenge-26 using the virus tracker API."),l.a.createElement(N,{timelineData:c,countryName:r,countryCases:s,countryDeaths:o}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.19074ecf.chunk.js.map