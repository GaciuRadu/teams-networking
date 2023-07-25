(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(36),t.b),l=i()(o()),u=c()(d);l.push([n.id,`html {\n  height: 100%;\n}\n\nh1 {\n  color: white;\n  margin: 5px 0;\n}\n\nh2 {\n  margin: 2px;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  flex-direction: row;\n  align-items: center;\n  background-image: url(${u});\n}\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  background-color: #e9f6f8;\n}\ntbody tr:nth-child(even) {\n  background: #f2f2f2;\n}\n\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\n\n#my-picture img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n\nbody > section {\n  flex: 1;\n  padding: 15px;\n}\n\n#header-info {\n  flex: 1;\n  padding: 10px;\n  text-shadow: 1px 1px 2px #000000;\n}\n\n#job-title {\n  color: #ffffff;\n  margin: 5px 0;\n  font-weight: 100;\n  font-size: 1.2em;\n}\n#header-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(45deg, #0798abfa, transparent);\n}\n\n.tbar {\n  display: flex;\n  align-items: stretch;\n  padding: 0 0 10px 0;\n}\n.tfill {\n  flex: 1;\n}\n\n#teamsTable {\n  border-collapse: collapse;\n  /* width: 100%; */\n  table-layout: fixed;\n}\n\n#teamsTable input[type="text"] {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#teamsTable th,\n#teamsTable td {\n  border: 1px solid #057988;\n  padding: 5px;\n  line-height: 29px;\n  /* word-break: break-all; */\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nth {\n  background-color: #0798ab;\n  color: white;\n}\n#teamTable th {\n  border-color: #057988;\n  color: white;\n}\n\n.table-actions {\n  width: 80px;\n}\n.action-btn {\n  cursor: pointer;\n  min-width: 34px;\n  height: 28px;\n  vertical-align: middle;\n}\n\n.edit-btn,\n.delete-btn {\n  color: #02638d;\n  cursor: pointer;\n  display: none;\n}\n#teamsTable tr:hover .edit-btn {\n  display: inline-block;\n}\n#teamsTable tr:hover .delete-btn {\n  display: inline-block;\n}\n.delete-btn:hover {\n  color: #b90303;\n}\n.edit-btn:hover {\n  color: #039903;\n}\n\nfooter {\n  padding: 5px;\n  background-color: #057988;\n  color: white;\n  text-align: center;\n}\nfooter a,\nfooter a:visited {\n  color: #f5f5f5;\n  vertical-align: top;\n  line-height: 20px;\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 0.2em;\n  transition: 0.5s;\n}\n`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},36:(n,e,t)=>{n.exports=t.p+"b65bb854f1ff13c46e6c.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h,b=[];function v(n){return document.querySelector(n)}function g(n,e){const t=n.map((n=>n.id===e?function(n){return`<tr>\n    <td></td>\n    <td>\n      <input value=${n.promotion} type="text" required name="promotion" placeholder="Enter promotion" />\n    </td>\n    <td>\n      <input value=${n.members} type="text" required name="members" placeholder="Enter members" />\n    </td>\n    <td>\n      <input value=${n.name} type="text" required name="name" placeholder="Enter project name" />\n    </td>\n    <td>\n      <input value=${n.url} type="text" required name="url" placeholder="Project URL" />\n    </td>\n    <td>\n      <button  type="submit" class="action-btn" title="Save">💾</button>\n      <button  type="reset"  class="action-btn" title="Cancel">✖</button>\n    </td>\n  </tr>`}(n):function(n){const e=n.url,t=e.startsWith("https://github.com/")?e.substring(19):e;return`<tr>\n    <td></td>\n    <td>${n.promotion}</td>\n    <td>${n.members}</td>\n    <td>${n.name}</td>\n    <td>\n      <a href="${e}" target="_blank"> ${t}  </a>        \n    </td>    \n    <td> \n      <button data-id="${n.id}" type="button" class="action-btn edit-btn" title="edit">✎</button> \n      <button data-id="${n.id}" type="button" class="action-btn delete-btn" title="delete">🗑️</button>\n          </td>\n  </tr>`}(n)));v("#teamsTable tbody").innerHTML=t.join(""),document.querySelectorAll("#teamsTable td").forEach((n=>{n.title=n.offsetWidth<n.scrolWidth?n.textContent:""}))}function y(){fetch("http://localhost:3000/teams-json").then((n=>n.json())).then((n=>{b=n,g(n)}))}function x(n){document.querySelectorAll("tfoot input").forEach((e=>{e.disabled=n}))}v("#teamsTable tbody").addEventListener("click",(n=>{var e;n.target.matches("button.delete-btn")?(e=n.target.dataset.id,fetch("http://localhost:3000/teams-json/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((n=>n.json()))).then((n=>{n.success&&y()})):n.target.matches("button.edit-btn")&&function(n){h=n,g(b,n),x(!0)}(n.target.dataset.id)})),y(),v("#search").addEventListener("input",(n=>{const e=n.target.value,t=function(n,e){return e=e.toLowerCase(),n.filter((n=>n.promotion.toLowerCase().includes(e)||n.members.toLowerCase().includes(e)||n.name.toLowerCase().includes(e)||n.url.toLowerCase().includes(e)))}(b,e);console.info("search",e,t),g(t)})),v("#teamsForm").addEventListener("submit",(function(n){n.preventDefault();const e={promotion:v((t=h?"tbody":"tfoot")+" input[name=promotion]").value,members:v(`${t} input[name=members]`).value,name:v(`${t} input[name=name]`).value,url:v(`${t} input[name=url]`).value};var t;h?(e.id=h,function(n){return fetch("http://localhost:3000/teams-json/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e).then((n=>{n.success&&(y(),x(!1),h="")}))):function(n){return fetch("http://localhost:3000/teams-json/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e).then((n=>{console.warn("created",n),n.success&&(y(),v("#teamsForm").reset())}))})),v("#teamsForm").addEventListener("reset",(n=>{h&&(g(b),x(!1),h="")}))})()})();