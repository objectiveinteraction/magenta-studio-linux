!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("electron")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("events")},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),i=n(1);
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=[];class l extends r.EventEmitter{constructor(e,t=375,n=600,r=!1,l=!1){super();const u=`${process.resourcesPath}/app/`;let c=void 0;l&&(c=s[0]),this.window=new o.BrowserWindow({width:t,height:n,show:!1,frame:r,titleBarStyle:"default",modal:l,parent:c,resizable:!1,fullscreenable:!1,backgroundThrottling:!1,webPreferences:{nodeIntegration:!0}}),this.window.loadFile(Object(i.resolve)(u,"build",e)),this.window.on("closed",()=>{this.emit("close");const e=s.indexOf(this.window);-1!==e&&s.splice(e,1)}),s.push(this.window),this.window.once("ready-to-show",()=>{this.window.show()})}show(){this.window.show()}hide(){this.window.hide()}dev(){this.window.webContents.openDevTools({mode:"detach"})}reload(){this.window.reload()}get webContents(){return this.window.webContents}}
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */o.app.on("ready",()=>{const e=new l("index.html");e.on("close",()=>o.app.quit());const t=[{submenu:[{label:"Debug",accelerator:"darwin"===process.platform?"Alt+Command+I":"Ctrl+Shift+I",click(){e.dev()}},{label:"Info",click(){new l("about.html",520,450,!0)}},{role:"quit"}]}];const n=o.Menu.buildFromTemplate(t);o.Menu.setApplicationMenu(n)}),o.ipcMain.on("popup",({sender:e},t)=>{!function(e){const t=new l("popup.html",480,200,!0,!0);t.webContents.on("did-finish-load",()=>{t.webContents.send("setup",e)})}(t),o.ipcMain.once("close-modal",(t,n)=>{e.send("close",n)})})}]);