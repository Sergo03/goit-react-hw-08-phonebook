(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{90:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(35),i=a(36),l=a(38),o=a(37),r=a(0),c=a(10),h=a(24),b=a(39),p=(a(50),a(1)),u={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},m=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,i=a.value;e.setState(Object(n.a)({},s,i))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,autoComplete:"off",children:[Object(p.jsxs)("label",{style:u.label,children:["Email",Object(p.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(p.jsxs)("label",{style:u.label,children:["Password",Object(p.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(p.jsx)(b.a,{type:"submit",variant:"primary",children:"Login"})]})]})}}]),a}(r.Component),d={onLogin:h.b};t.default=Object(c.b)(null,d)(m)}}]);
//# sourceMappingURL=5.facdd24f.chunk.js.map