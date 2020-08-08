(this.webpackJsonpreactjs_phonebook=this.webpackJsonpreactjs_phonebook||[]).push([[0],{32:function(e,a,t){e.exports=t(54)},37:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),i=(t(37),t(38),t(9)),m=t(2),o=t(8),s=t(7),d=t(26),u=t(29),E=t.n(u),b=t(30),v=t(18),p=t(10),h={DELETE_CONTACT:"DELETE_CONTACT",ADD_CONTACT:"ADD_CONTACT",UPDATE_CONTACT:"UPDATE_CONTACT",SET_SEARCH:"SET_SEARCH"},N={contacts:[{id:1,name:"Ed Boon",phone:98912123456,email:"noobde@gmail.com",address:"Los Angles, CA",details:"get over here!"},{id:2,name:"Alejandro Gonzales Inarrito",phone:98912123467,email:"AlejandroGInarrito@gmail.com",address:"Mexico city, Mexico",details:"Working on my new title, not the revenant"},{id:3,name:"Jorgen Klopp",phone:98912123467,email:"JorgenKlopp@gmail.com",address:"Liverpool, England",details:"I'm coach of Liverpool FC"},{id:4,name:"Hanz Zimmer",phone:98912123467,email:"hansimmer@gmail.com",address:"Berlin, Germany",details:"Batman OST is my work"}],search:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case h.ADD_CONTACT:return Object(p.a)({},e,{contacts:[].concat(Object(v.a)(e.contacts),[n])});case h.DELETE_CONTACT:return Object(p.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==n}))});case h.UPDATE_CONTACT:return Object(p.a)({},e,{contacts:n});case h.SET_SEARCH:return Object(p.a)({},e,{search:n});default:return e}},f=Object(s.c)({contacts:C}),g={key:"root",storage:E.a},O=Object(d.a)(g,f),T=[b.logger],A=Object(s.d)(O,s.a.apply(void 0,T)),j=Object(d.b)(A);t(45);var y=function(e){var a=e.contact;return l.a.createElement("td",null,l.a.createElement(i.b,{to:"/contact/".concat(a.id)},l.a.createElement("div",{className:"ContactCard"},l.a.createElement("div",{className:"ContactCard-image"},l.a.createElement("img",{src:"https://api.adorable.io/avatars/256/Ali@adorable.png"+a.id,alt:"profile"})),l.a.createElement("div",{className:"ContactCard-name"},l.a.createElement("div",{className:"ContactCard-name--title"},a.name),l.a.createElement("div",{className:"ContactCard-name--subtitle"},a.phone)),l.a.createElement("div",null))))};t(47);var D=Object(o.b)(null,{setSearch:function(e){return{payload:e,type:h.SET_SEARCH}}})((function(e){var a=e.setSearch;return l.a.createElement("div",{className:"SearchBar"},l.a.createElement("input",{onChange:function(e){return a(e.target.value)},placeholder:"Search the contact ... "}))})),_=(t(48),t(4)),k=t(3);var S=Object(o.b)((function(e){return{contacts:e.contacts.contacts,search:e.contacts.search}}))((function(e){var a=e.contacts,t=e.search,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.phone.toString().includes(t)}));return l.a.createElement("div",{className:"ContactsContainer"},l.a.createElement("div",{className:"ContactsContainer-navbar"},l.a.createElement("div",{className:"navbar-photo"},l.a.createElement("img",{src:"https://api.adorable.io/avatars/256/Ali@adorable.png",alt:"profile"})),l.a.createElement("div",{className:"navbar-title"},"Phone Book"),l.a.createElement("div",{className:"navbar-btn"},l.a.createElement(i.b,{to:"/add"},l.a.createElement("button",null,l.a.createElement(k.a,{icon:_.h}))))),l.a.createElement(D,null),l.a.createElement("div",{className:"table-header"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Recents"),l.a.createElement("th",null,"Favorites"),l.a.createElement("th",null,"Missed"))))),l.a.createElement("div",{className:"table-body"},l.a.createElement("table",null,l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",null,l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{contact:e,key:e.id})))}))))))})),w=t(12),L=t(19);t(52);var x=Object(o.b)(null,{addContact:function(e){return{payload:e,type:h.ADD_CONTACT}}})((function(e){var a=e.addContact,t=Object(m.f)(),c=Object(n.useState)({id:"",name:"",phone:"",email:"",address:"",details:""}),r=Object(L.a)(c,2),o=r[0],s=r[1],d=function(e){var a=e.target,t=a.name,n=a.value;s(Object(p.a)({},o,Object(w.a)({},t,n)))},u=o.id,E=o.name,b=o.phone,v=o.email,h=o.address,N=o.details;return l.a.createElement("div",{className:"CreateContact"},l.a.createElement("div",{className:"CreateContact-navbar"},l.a.createElement("div",{className:"navbar-btn"},l.a.createElement(i.b,{to:"/"},l.a.createElement("button",null,l.a.createElement(k.a,{icon:_.c})))),l.a.createElement("div",{className:"navbar-title"},"Add Contact"),l.a.createElement("div",null)),l.a.createElement("div",{className:"CreateContact-header"},l.a.createElement("button",{className:"btn clear-btn",onClick:function(){s({id:"",name:"",phone:"",email:"",address:"",details:""})}},l.a.createElement(k.a,{icon:_.a})),l.a.createElement("button",{className:"btn add-btn",type:"submit",onClick:function(e){var n;e.preventDefault(),(n=Object(p.a)({},o)).name&&a(n),t.push("/")}},l.a.createElement(k.a,{icon:_.b}))),l.a.createElement("div",{className:"CreateContact-form"},l.a.createElement("div",{className:"form-inputs"},l.a.createElement("input",{type:"number",value:u,onChange:d,name:"id",placeholder:"ID"}),l.a.createElement("input",{type:"text",value:E,onChange:d,name:"name",placeholder:"Name"}),l.a.createElement("input",{type:"email",value:v,onChange:d,name:"email",placeholder:"Email"}),l.a.createElement("input",{type:"tel",value:b,onChange:d,name:"phone",placeholder:"Phone No."}),l.a.createElement("input",{type:"text",value:h,onChange:d,name:"address",placeholder:"Address ..."}),l.a.createElement("input",{type:"text",value:N,onChange:d,name:"details",placeholder:"details"}))))}));t(53);var B=Object(o.b)((function(e){return{contacts:e.contacts.contacts}}),{deleteContact:function(e){return{payload:e,type:h.DELETE_CONTACT}},updateContact:function(e){return{payload:e,type:h.UPDATE_CONTACT}}})((function(e){var a=e.contacts,t=e.deleteContact,c=e.updateContact,r=Object(m.f)(),o=Object(m.g)().id,s=Object(n.useState)(0),d=Object(L.a)(s,2),u=d[0],E=d[1],b=a.find((function(e){return+e.id===+o})),h=function(e,t){var n=Object(v.a)(a),l=e.target,r=l.name,i=l.value,m=Object(p.a)({},t,Object(w.a)({},r,i)),o=n.find((function(e){return e.id===t.id}));Object.keys(o).forEach((function(e){return o["".concat(e)]=m["".concat(e)]})),c(n)};return l.a.createElement("div",{className:"ContactDetails"},l.a.createElement("div",{className:"contactDetails-navbar"},l.a.createElement(i.b,{to:"/"},l.a.createElement("button",{className:"btn btn-nav btn-back"},l.a.createElement(k.a,{icon:_.c}))),u===b.id?l.a.createElement("tr",null,l.a.createElement("button",{className:"btn btn-nav btn-save",onClick:function(){return E(0)}},l.a.createElement(k.a,{icon:_.b}))):l.a.createElement("tr",null,l.a.createElement("button",{className:"btn btn-nav btn-edit",onClick:function(){return E(b.id)}},l.a.createElement(k.a,{icon:_.f})))),l.a.createElement("div",{className:"contactDetails-info"},l.a.createElement("div",{className:"contactDetails-info--image"},l.a.createElement("img",{src:"https://api.adorable.io/avatars/256/Ali@adorable.png"+b.id,alt:"profile"})),l.a.createElement("div",{className:"contactDetails-info--title"},u===b.id?l.a.createElement("input",{className:"input-info",name:"name",value:b.name,onChange:function(e){return h(e,b)}}):"".concat(b.name)),l.a.createElement("div",{className:"contactDetails-info--subtitle"},b.phone)),l.a.createElement("div",{className:"table-header"},l.a.createElement("table",null,l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{className:"btn btn-header btn-message"},l.a.createElement(k.a,{icon:_.d}))),l.a.createElement("th",null,l.a.createElement("button",{className:"btn btn-header btn-phone"},l.a.createElement(k.a,{icon:_.g}))),l.a.createElement("th",null,l.a.createElement("button",{className:"btn btn-header btn-video"},l.a.createElement(k.a,{icon:_.i}))),l.a.createElement("th",null,l.a.createElement("button",{className:"btn btn-header btn-mail"},l.a.createElement(k.a,{icon:_.e}))))))),l.a.createElement("div",{className:"table-body"},l.a.createElement("table",null,l.a.createElement("tbody",null,u===b.id?l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Mobile"),l.a.createElement("div",{className:"tr-subtitle__edit"},l.a.createElement("input",{name:"phone",value:b.phone,onChange:function(e){return h(e,b)}}))),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Email"),l.a.createElement("div",{className:"tr-subtitle__edit"},l.a.createElement("input",{name:"email",value:b.email,onChange:function(e){return h(e,b)}}))),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Address"),l.a.createElement("div",{className:"tr-subtitle__edit"},l.a.createElement("input",{name:"address",value:b.address,onChange:function(e){return h(e,b)}}))),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Description"),l.a.createElement("div",{className:"tr-subtitle__edit"},l.a.createElement("input",{name:"details",value:b.details,onChange:function(e){return h(e,b)}}))),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("button",{className:"btn btn-remove",onClick:function(){return function(e){t(e),r.push("/")}(b.id)}},"Remove"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Mobile"),l.a.createElement("div",{className:"tr-subtitle"},b.phone)),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Email"),l.a.createElement("div",{className:"tr-subtitle"},b.email)),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Address"),l.a.createElement("div",{className:"tr-subtitle"},b.address)),l.a.createElement("div",{className:"tr-icon"})),l.a.createElement("tr",null,l.a.createElement("div",{className:"tr-info"},l.a.createElement("div",{className:"tr-title"},"Description"),l.a.createElement("div",{className:"tr-subtitle"},b.details)),l.a.createElement("div",{className:"tr-icon"})))))))})),M=t(31);var P=function(){return l.a.createElement(o.a,{store:A},l.a.createElement(M.a,{loading:null,persistor:j},l.a.createElement(i.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/contact/:id"},l.a.createElement(B,null)),l.a.createElement(m.a,{exact:!0,path:"/add"},l.a.createElement(x,null)),l.a.createElement(m.a,{path:"/"},l.a.createElement(S,null))))))};function R(){return l.a.createElement(P,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.09dad6fa.chunk.js.map