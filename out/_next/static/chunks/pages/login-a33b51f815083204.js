(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7106:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(9888)}])},9888:function(e,t,s){"use strict";s.r(t);var a=s(5893),r=s(9583),l=s(1163),o=s(7294),n=s(9669),i=s.n(n);t.default=function(e){e.t;var t=(0,o.useState)(""),s=t[0],n=t[1],c=(0,o.useState)(""),d=c[0],m=c[1],x=(0,o.useState)(""),u=x[0],h=x[1];return(0,a.jsx)("div",{className:"h-screen w-full",children:(0,a.jsxs)("div",{className:"grid h-screen p-0 grid-cols-1 m-0 lg:grid-cols-3 place-items-start place-content-stretch font-Oxygen",children:[(0,a.jsxs)("div",{className:"w-full col-span-2 p-0 m-0 relative h-full bg-white hidden mx-auto lg:flex flex-col gap-2 justify-center",children:[(0,a.jsx)("div",{className:"circle-shape-one"}),(0,a.jsx)("div",{className:"round-shape-three"}),(0,a.jsx)("img",{className:"absolute bottom-0 right-0 left-0 max-h-80 w-auto opacity-90",src:"blob.svg"}),(0,a.jsx)("img",{className:"mx-auto w-96 px-2",src:"cover.svg"}),(0,a.jsxs)("h1",{className:"mt-10 w-1/2 mx-auto text-center text-4xl tracking-wide font-extrabold font-Roboto text-secondary",children:["Satellite Based Farm Management System",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)("div",{className:"h-auto my-auto border-2 lg:mx-0 mx-auto w-auto flex flex-col justify-center rounded-lg ",children:[(0,a.jsxs)("div",{className:"sm:mx-auto bg-white sm:w-full sm:max-w-md rounded-t-2xl ",children:[(0,a.jsx)("img",{className:"mx-auto h-12 w-auto mt-14 px-2 ",src:"logo.png",alt:"Workflow"}),(0,a.jsx)("h2",{className:"mt-6 text-center text-2xl font-medium text-secondary",children:"Sign into your Account"})]}),(0,a.jsx)("div",{className:" bg-white sm:mx-auto overflow-auto sm:w-full sm:max-w-md",children:(0,a.jsx)("svg",{className:"w-full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,a.jsx)("path",{fill:"#7C9C3C","fill-opacity":"1",d:"M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})})}),(0,a.jsx)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md rounded-2xl",children:(0,a.jsxs)("div",{className:"bg-primary bg-opacity-9 py-4 px-6 sm:px-10 rounded-b-lg",children:[(0,a.jsxs)("div",{className:"relative mb-2",children:[(0,a.jsx)("input",{id:"email",name:"email",type:"text",className:" bg-transparent placeholder-transparent h-10 w-full text-white focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 ",placeholder:"email",onChange:function(e){return n(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"email",className:" left-0 -top-3.5 text-white text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whitw peer-focus:text-sm",children:"Email address"})]}),(0,a.jsxs)("div",{className:" mb-2",children:[(0,a.jsx)("input",{id:"password",name:"password",type:"password",className:" bg-transparent placeholder-transparent h-10 w-full text-white focus:border-lime-400 border-0 focus:ring-0 border-b-2 border-gray-200 ",placeholder:"Password",onChange:function(e){return m(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"Password",className:" left-0 -top-3.5 text-white text-md transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-whitw peer-focus:text-sm",children:"Password"}),(0,a.jsxs)("div",{className:"flex justify-center items-center my-2",children:[(0,a.jsx)("a",{href:"#",className:"border-2 border-white bg-gray-200 rounded-full p-3 mx-1 hover:bg-primary shadow-2xl",children:(0,a.jsx)(r.tBk,{className:"text-sm fill-blue-500 hover:fill-secondary"})}),(0,a.jsx)("a",{href:"#",className:"border-2 border-white bg-gray-200 rounded-full p-3 mx-1 hover:bg-primary shadow-2xl",children:(0,a.jsx)(r.ldW,{className:"text-sm fill-red-500 hover:fill-secondary"})})]}),(0,a.jsxs)("p",{className:"mt-2 text-center text-md font-normal text-secondary max-w",children:["Don't have an Account?",(0,a.jsx)("a",{href:"#",className:"font-medium text-secondary hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary mx-1 rounded focus:border-primary",children:"Sign Up."})]})]}),(0,a.jsxs)("span",{hidden:""===u,children:[(0,a.jsx)("small",{className:"text-red-800",children:u}),(0,a.jsx)("br",{})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-2xl bg-secondary text-lg font-medium text-white hover:bg-banner_background hover:text-secondary transition ease-in-out duration-500",onClick:function(){i().post("https://app.teamonetech.com/auth/token/login/",{username:s,password:d}).then((function(e){console.log(e),l.default.push("/dashboard")})).catch((function(e){console.log(e.message),h("Unable to Login. Check Credentials and try again")}))},children:"Sign In"})})]})})]})]})})}}},function(e){e.O(0,[445,669,774,888,179],(function(){return t=7106,e(e.s=t);var t}));var t=e.O();_N_E=t}]);