!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("grapesjs"),require("jQuery")):"function"==typeof define&&define.amd?define("grapesjs-components-farmer",["grapesjs","jQuery"],t):"object"==typeof exports?exports["grapesjs-components-farmer"]=t(require("grapesjs"),require("jQuery")):e["grapesjs-components-farmer"]=t(e.grapesjs,e.jQuery)}(window,function(e,t){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=0)}({0:function(e,t,a){e.exports=a("tjUo")},HFWD:function(e,t,a){var n;!function(){"use strict";var o,l={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};l.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},a=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(a,function(e){return t[e]||e}):""}},o=function(){return this||(0,eval)("this")}(),e.exports?e.exports=l:void 0===(n=function(){return l}.call(t,a,t,e))||(e.exports=n);var s={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},c=/$^/;function r(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}l.template=function(e,t,a){var n,i,p=(t=t||l.templateSettings).append?s.append:s.split,m=0,d=t.use||t.define?function e(t,a,n){return("string"==typeof a?a:a.toString()).replace(t.define||c,function(e,a,o,l){return 0===a.indexOf("def.")&&(a=a.substring(4)),a in n||(":"===o?(t.defineParams&&l.replace(t.defineParams,function(e,t,o){n[a]={arg:t,text:o}}),a in n||(n[a]=l)):new Function("def","def['"+a+"']="+l)(n)),""}).replace(t.use||c,function(a,o){t.useParams&&(o=o.replace(t.useParams,function(e,t,a,o){if(n[a]&&n[a].arg&&o){var l=(a+":"+o).replace(/'|\\/g,"_");return n.__exp=n.__exp||{},n.__exp[l]=n[a].text.replace(new RegExp("(^|[^\\w$])"+n[a].arg+"([^\\w$])","g"),"$1"+o+"$2"),t+"def.__exp['"+l+"']"}}));var l=new Function("def","return "+o)(n);return l?e(t,l,n):l})}(t,e,a||{}):e;d=("var out='"+(t.strip?d.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):d).replace(/'|\\/g,"\\$&").replace(t.interpolate||c,function(e,t){return p.start+r(t)+p.end}).replace(t.encode||c,function(e,t){return n=!0,p.startencode+r(t)+p.end}).replace(t.conditional||c,function(e,t,a){return t?a?"';}else if("+r(a)+"){out+='":"';}else{out+='":a?"';if("+r(a)+"){out+='":"';}out+='"}).replace(t.iterate||c,function(e,t,a,n){return t?(m+=1,i=n||"i"+m,t=r(t),"';var arr"+m+"="+t+";if(arr"+m+"){var "+a+","+i+"=-1,l"+m+"=arr"+m+".length-1;while("+i+"<l"+m+"){"+a+"=arr"+m+"["+i+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||c,function(e,t){return"';"+r(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),n&&(t.selfcontained||!o||o._encodeHTML||(o._encodeHTML=l.encodeHTMLSource(t.doNotSkipEncoded)),d="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+l.encodeHTMLSource.toString()+"("+(t.doNotSkipEncoded||"")+"));"+d);try{return new Function(t.varname,d)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+d),e}},l.compile=function(e,t){return l.template(e,null,t)}}()},TpXK:function(e,t,a){"use strict";a.r(t);var n=a("xeH2"),o=a.n(n);t.default=function(e,t){var a=e.Commands,n=e.Panels,l=e.getConfig(),s="sw-visibility",c="export-template",r="open-sm",i="open-layers",p="open-blocks",m="fullscreen",d="preview";l.showDevices=0;var u=t.textCleanCanvas||"Are you sure to clean the canvas?";a.add("set-device-desktop",function(e){return e.setDevice("Desktop")}),a.add("set-device-tablet",function(e){return e.setDevice("Tablet")}),a.add("set-device-mobile",function(e){return e.setDevice("Mobile portrait")}),a.add("canvas-clear",function(e){return confirm(u)&&e.runCommand("core:canvas-clear")}),n.getPanels().reset([{id:"commands",buttons:[{}]},{id:"options",buttons:[{id:s,command:s,context:s,active:1,className:"fa fa-square-o",attributes:{title:"Show Borders"}},{id:d,context:d,command:function(e){return e.runCommand(d)},className:"fa fa-eye",attributes:{title:"Preview"}},{id:m,command:m,context:m,className:"fa fa-arrows-alt",attributes:{title:"Fullscreen"}},{id:c,className:"fa fa-code",command:function(e){return e.runCommand(c)},attributes:{title:"Show code"}},{id:"undo",className:"fa fa-undo",command:function(e){return e.runCommand("core:undo")},attributes:{title:"Undo"}},{id:"redo",className:"fa fa-repeat",command:function(e){return e.runCommand("core:redo")},attributes:{title:"Redo"}},{id:"canvas-clear",className:"fa fa-trash",command:function(e){return e.runCommand("canvas-clear")},attributes:{title:"Clear canvas"}}]},{id:"views",buttons:[{id:r,command:r,className:"fa fa-paint-brush",attributes:{title:"Style Manager"}},{id:"open-tm",command:"open-tm",className:"fa fa-cog",attributes:{title:"Settings"}},{id:i,command:i,className:"fa fa-bars",attributes:{title:"Layers"}},{id:p,command:p,className:"fa fa-th-large",active:1,attributes:{title:"Blocks"}}]}]),n.addPanel({id:"devices-c"}).get("buttons").add([{id:"set-device-desktop",command:"set-device-desktop",className:"fa fa-desktop",active:1,attributes:{title:"Desktop"}},{id:"set-device-tablet",command:"set-device-tablet",className:"fa fa-tablet",attributes:{title:"Tablet"}},{id:"set-device-mobile",command:"set-device-mobile",className:"fa fa-mobile",attributes:{title:"Mobile"}}]),e.on("load",function(){var a=e.Panels,n=o()(e.getEl()),l=a.getButton("views","open-tm");l&&l.set("active",1);var s=a.getButton("views","open-sm");s&&s.set("active",1);var c=o()('<div class="gjs-sm-sector no-select">\n<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>\n<div class="gjs-sm-properties"></div></div>'),m=c.find(".gjs-sm-properties");m.append(n.find(".gjs-trt-traits")),n.find(".gjs-pn-views .fa-cog").hide(),n.find(".gjs-sm-sectors").before(c),c.find(".gjs-sm-title").on("click",function(){var e=m.get(0).style,t="none"===e.display;e.display=t?"block":"none"});var d=a.getButton("views",p);d&&d.set("active",1),t.showStylesOnChange&&e.on("component:selected",function(){var t=a.getButton("views",r),n=a.getButton("views",i);n&&n.get("active")||!e.getSelected()||t&&t.set("active",1)})})}},ZjPV:function(e,t,a){"use strict";a.r(t);var n=a("xeH2"),o=a.n(n);function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){s(e,t,a[t])})}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.TraitManager,n=e.DomComponents,s=(e.BlockManager,n.getType("default")),c=(n.getType("select"),s.model),r=s.view,i=(n.getType("text"),c.prototype.defaults.traits.concat([{type:"text",name:"name_attr",label:"Name",placeholder:"Enter a field name.."},{type:"text",name:"label_attr",label:"Label",placeholder:"Enter a field label.."}])),p=i.concat([{type:"text",name:"value_attr",label:"Value",changeProp:1,placeholder:"Enter a default value.."},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"pattern_attr",changeProp:1,label:"Pattern"},{type:"number",name:"min_attr",changeProp:1,label:"Min"},{type:"number",name:"max_attr",changeProp:1,label:"Max"}]);a.addType("option_attr",{events:{onchange:"onChange"},getInputEl:function(){if(!this.inputEl){var e=document.createElement("textarea");e.value=this.target.get("option_attr"),this.inputEl=e}return this.inputEl},onValueChange:function(){this.target.set("option_attr",this.model.get("value"))}});var m=c.extend({defaults:l({},c.prototype.defaults,{draggable:!0,droppable:!0,copyable:!1,label_attr:"Label"}),toHTML:function(){return this.genHtml()[0].outerHTML},getTraitValues:function(){var e=l({},this.attributes);return this.get("traits").each(function(t){var a=t.get("name");e[a]=t.get("value")||e[a]}),e},myInitDefaults:function(){var e=l({},this.attributes);this.get("traits").each(function(t){var a=t.get("name");a.indexOf("_attr")>0&&t.set("value",e[a])})},ensureNameAttr:function(e){var a=this.get("traits").where({name:"name_attr"})[0];if(a){var n=e.name_attr;if(!n)return n="".concat(t.formFieldsPrefix).concat(t.formNextId++),a.set("value",n),this.set("name_attr",n),!0}return!1},genHtml:function(){if(!this.view||!this.view.el){var e=document.createElement(this.attributes.tagName);return this.generateHtml(e,this.attributes.tagName)}return this.generateHtml(this.view.el,this.attributes.tagName)},generateHtml:function(e,a){var n=o()(e||this.view.el),l=this.getTraitValues(),s=s||this.get("tagName");if(t&&t.comps&&t.comps[s]){var c=t.comps[s].template;"function"==typeof c&&(this.ensureNameAttr(l)||(n.empty(),n.html(c(l||{}))))}return n}}),d=r.extend({onRender:function(){return this.model.genHtml&&this.model.genHtml(),this}});n.addType("comp_input",{model:m.extend({defaults:l({},m.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_input",type_attr:"text",traits:p.concat({type:"select",name:"type_attr",label:"Type",options:[{name:"Text",value:"text"},{name:"Password",value:"password"},{name:"Email",value:"email"},{name:"Number",value:"number"},{name:"URL",value:"url"},{name:"Phone",value:"tel"},{name:"Date",value:"date"},{name:"Date Time",value:"datetime-local"},{name:"Range",value:"range"},{name:"Color Picker",value:"color"}]}),classes:["comp_input"].concat(t.comps.comp_input.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:placeholder_attr",this.genHtml)}}),view:d}),n.addType("comp_select",{model:m.extend({defaults:l({},m.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_select",option_attr:"MN::Minnesota\nTX::Texas",label_attr:"Select",traits:[{type:"option_attr"},{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"checkbox",name:"multiple_attr",changeProp:1,label:"Multiple"}].concat(i),classes:["comp_select"].concat(t.comps.comp_select.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:multiple_attr",this.genHtml),this.listenTo(this,"change:option_attr",this.genHtml)}}),view:d}),n.addType("comp_textarea",{model:m.extend({defaults:l({},c.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_textarea",label_attr:"Message",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"number",name:"rows_attr",label:"Rows",changeProp:1,placeholder:"Enter field rows/line-height.."},{type:"number",name:"cols_attr",label:"Columns",changeProp:1,placeholder:"Enter field columns/width.."}].concat(i),classes:["comp_textarea"].concat(t.comps.comp_textarea.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:placeholder_attr",this.genHtml),this.listenTo(this,"change:cols_attr",this.genHtml),this.listenTo(this,"change:rows_attr",this.genHtml)}}),view:d}),n.addType("comp_file",{model:m.extend({defaults:l({},c.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_file",label_attr:"Choose file...",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"string",name:"accept_attr",label:"Accept",changeProp:1,placeholder:"image/jpeg, image/png, image/gif"}].concat(i),classes:["comp_file"].concat(t.comps.comp_file.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:placeholder_attr",this.genHtml),this.listenTo(this,"change:accept_attr",this.genHtml)}}),view:d}),n.addType("comp_checkbox",{model:m.extend({defaults:l({},m.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_checkbox",label_attr:"I accept the terms and use",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"}].concat(i),classes:["comp_checkbox"].concat(t.comps.comp_checkbox.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml)}}),view:d}),n.addType("comp_hidden",{model:m.extend({defaults:l({},m.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_hidden",traits:[{type:"text",name:"name_attr",label:"Name",changeProp:1,placeholder:"Enter a field name..."}],classes:["comp_hidden"].concat(t.comps.comp_hidden.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:name_attr",this.genHtml)}}),view:d}),n.addType("comp_submit",{model:m.extend({defaults:l({},m.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_submit",label_attr:"Send",traits:c.prototype.defaults.traits.concat([{type:"text",name:"label_attr",label:"Label",placeholder:"Enter a field label.."}]),classes:["comp_submit"].concat(t.comps.comp_submit.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml)}}),view:d}),n.addType("comp_row",{model:c.extend({defaults:l({},c.prototype.defaults,{tagName:"comp_row",draggable:!0,copyable:!1,droppable:"comp_col",classes:["comp_row"].concat(t.comps.comp_row.classes)})}),view:r}),n.addType("comp_col",{model:c.extend({defaults:l({},c.prototype.defaults,{tagName:"comp_col",draggable:"comp_row",droppable:!0,copyable:!1,classes:["comp_col"].concat(t.comps.comp_col.classes)})}),view:r}),n.addType("comp_recaptcha",{model:m.extend({defaults:l({},m.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_recaptcha",sitekey_attr:"sitekey",traits:c.prototype.defaults.traits.concat([{type:"text",name:"sitekey_attr",label:"Site key",placeholder:"e.g. sitekey"}]),classes:["comp_recaptcha"].concat(t.comps.comp_recaptcha.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:sitekey_attr",this.genHtml)}}),view:d})}},fvyM:function(e,t,a){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){o(e,t,a[t])})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.BlockManager,o=t.comps;o.blocks,o.blockCategories;t.resetBlocks&&a.getAll().reset();var l={category:t.categoryLabel};a.add("comp_col1").set(n({label:o.comp_col1.label,attributes:{class:"gjs-fonts gjs-f-b1"},content:{type:"comp_row",components:[{type:"comp_col",classes:o.comp_col1.classes.concat(o.comp_col.classes)}]}},l)),a.add("comp_col2").set(n({label:o.comp_col2.label,attributes:{class:"gjs-fonts gjs-f-b2"},content:{type:"comp_row",components:[{type:"comp_col",classes:o.comp_col2.classes.concat(o.comp_col.classes)},{type:"comp_col",classes:o.comp_col2.classes.concat(o.comp_col.classes)}]}},l)),a.add("comp_col3").set(n({label:o.comp_col3.label,attributes:{class:"gjs-fonts gjs-f-b3"},content:{type:"comp_row",components:[{type:"comp_col",classes:o.comp_col3.classes.concat(o.comp_col.classes)},{type:"comp_col",classes:o.comp_col3.classes.concat(o.comp_col.classes)},{type:"comp_col",classes:o.comp_col3.classes.concat(o.comp_col.classes)}]}},l)),a.add("comp_submit",n({label:'\n      <div style="color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    border: 1px solid transparent;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    margin-top: 12px;\n    margin-bottom: 16px;\n    width: 50px;">&nbsp;</div>\n      <div class="gjs-block-label">'.concat(o.comp_submit.label,"</div>\n    "),content:{type:"comp_submit"}},l)),a.add("comp_input",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_input.label,"</div>"),content:{type:"comp_input"}},l)),a.add("comp_textarea",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>\n      <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>\n      <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>\n      <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_textarea.label,"</div>"),content:{type:"comp_textarea"}},l)),a.add("comp_select",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>\n      <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>\n      <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_select.label,"</div>"),content:{type:"comp_select"}},l)),a.add("comp_file",n({label:o.comp_file.label,attributes:{class:"fa fa-file"},content:{type:"comp_file"}},l)),a.add("comp_checkbox",n({label:o.comp_checkbox.label,attributes:{class:"fa fa-check-square"},content:{type:"comp_checkbox"}},l)),a.add("comp_hidden",n({label:'<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_hidden.label,"</div>"),content:{type:"comp_hidden"}},l)),a.add("comp_text",n({label:o.comp_text.label,attributes:{class:"gjs-fonts gjs-f-text"},content:{type:"text",content:"Insert your text here",style:{padding:"10px"},activeOnRender:1}},l)),a.add("comp_image",n({label:o.comp_image.label,attributes:{class:"gjs-fonts gjs-f-image"},content:{style:{color:"black"},type:"image",activeOnRender:1}},l)),a.add("comp_map",n({label:o.comp_map.label,attributes:{class:"fa fa-map-o"},content:{type:"map",style:{height:"350px"}}},l)),a.add("comp_recaptcha",n({label:'\n      <image src="https://www.gstatic.com/recaptcha/api2/logo_48.png">\n      <br /><br />\n    <div class="gjs-block-label">'.concat(o.comp_recaptcha.label,"</div>"),content:{type:"comp_recaptcha"}},l))}},kYSa:function(t,a){t.exports=e},tjUo:function(e,t,a){"use strict";a.r(t);var n=a("xeH2"),o=a.n(n),l=a("HFWD"),s=a.n(l),c=a("kYSa"),r=a.n(c);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=r.a.plugins.add("grapesjs-components-farmer",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.Commands,l=(e.Panels,t.comps||{}),c={comp_input:{label:"Input",classes:"form-group",useTag:"div",template:"\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" class=\"form-control\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "},comp_select:{label:"Select",classes:"form-group",useTag:"div",template:'\n        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>\n        <select <%= it.multiple_attr ? \'multiple \' : \'\' %><%= it.required_attr ? \'required \' : \'\' %>class="form-control" name="<%=it.name_attr%>">\n          <option selected>-- Please select an option -- </option>\n          <%~ (it.option_attr + "").trim().split("\\n") :option %>\n          <% var msgProps = option.split(\'::\');\n          %> <option value="<%= msgProps[0]%>"><%= msgProps[1] || msgProps[0] %></option><%~%>\n        </select>\n      '},comp_file:{label:"File",classes:"custom-file",useTag:"div",template:"\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"file\" class=\"custom-file-input\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.accept_attr ? 'accept=\"' + it.accept_attr + '\"' : '' %> <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\" class=\"custom-file-label\"><%=it.label_attr%></label>\n      "},comp_textarea:{label:"Textarea",classes:"form-group",useTag:"div",template:"\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>class=\"form-control\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n      "},comp_checkbox:{label:"Checkbox",classes:"form-check",useTag:"div",template:'\n        <label for="<%=it.name_attr%>" class="form-check-label">\n          <input <%= it.required_attr ? \'required \' : \'\' %>type="checkbox" name="<%=it.name_attr%>" class="form-check-input" <%= it.value_attr ? \'value="\' + it.value_attr + \'"\' : \'\' %>/>\n          <%=it.label_attr%>\n        </label>\n      '},comp_hidden:{label:"Hidden Input",useTag:"div",template:"\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "},comp_submit:{label:"Submit Button",classes:"btn btn-primary btn-block",useTag:"button",template:"<%= it.label_attr %>"},comp_row:{label:"Row",useTag:"div",classes:"row"},comp_col:{label:"Column",useTag:"div",classes:"col"},comp_col1:{label:"1 Column",useTag:"div"},comp_col2:{label:"2 Columns",useTag:"div"},comp_col3:{label:"3 Columns",useTag:"div"},comp_text:{label:"Text"},comp_image:{label:"Image"},comp_map:{label:"Map"},comp_recaptcha:{label:"reCaptcha",classes:"form-group",template:'\n        <script src="https://www.google.com/recaptcha/api.js" async defer><\/script>\n        <div class="g-recaptcha" data-sitekey="<%= it.sitekey_attr %>"></div>\n      '}};for(var r in c){var p=c[r],m=l[r];if(m){for(var d in m)m[d]=m[d]||p[d];l[r]=m}else l[r]=p;l[r].classes=(l[r].classes||"").split(" ")}var u=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){i(e,t,a[t])})}return e}({formNextId:1,categoryLabel:"Basic",formFieldsPrefix:"field",showStylesOnChange:1,addResource:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"script",n=e.Canvas.getDocument(),o=n.head||n.getElementsByTagName("head")[0],l=document.createElement(a);"script"===a?l.src=t:"link"===a&&(l.rel="stylesheet",l.href=t),o.appendChild(l)}},t);u.comps=u.comps||l;var g=function(){var e=null;Object.keys(u.comps).forEach(function(t){var a=u.comps[t];a&&"string"==typeof a.template&&(e||(s.a.templateSettings={evaluate:/\<\%([\s\S]+?)\%\>/g,interpolate:/\<\%=([\s\S]+?)\%\>/g,encode:/\<\%!([\s\S]+?)\%\>/g,use:/\<\%#([\s\S]+?)\%\>/g,define:/\<\%##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\%\>/g,conditional:/\<\%\?(\?)?\s*([\s\S]*?)\s*\%\>/g,iterate:/\<\%~\s*(?:\%\>|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\%\>)/g,varname:"it",strip:!0,append:!0,selfcontained:!1},e=s.a),a.template=e.template(a.template))})};e.runCommand("prevent-default"),n.add("get-usable-html",{run:function(){var t=e.getHtml();for(var a in u.comps){var n=u.comps[a].useTag||"div";t=(t=(t=(t=t.replace(new RegExp("<"+a,"g"),"<"+n)).replace(new RegExp("</"+a+">","g"),"</"+n+">")).replace(new RegExp(' data-gjs-type="'.concat(a,'" '),"g")," ")).replace(new RegExp(' data-highlightable="1" ',"g")," ")}return t}}),a("ZjPV").default(e,u),a("fvyM").default(e,u),t.panel&&a("TpXK").default(e,u),e.on("load",function(){g(),setTimeout(function(){var t,a,n=e.Canvas.getDocument(),l=n.head||n.getElementsByTagName("head")[0],s="\nbody {\n  padding: 10px;\n}\n\ncomp_recaptcha,\ncomp_row,\ncomp_col,\ncomp_hidden {\n  min-height: 2rem !important;\n}\n\ncomp_row {\n  display: block;\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\ncomp_col {\n  min-width: 100px;\n}\n\ncomp_hidden, comp_recaptcha {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n",c=n.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=s:c.appendChild(n.createTextNode(s)),l.appendChild(c),t=e.Canvas.getBody(),a=t.ownerWindow,o()(t).click(function(e){var t=e||a.event;if("input"===((t.target||t.srcElement).tagName+"").toLowerCase())return t.preventDefault(),!1})},10)})})},xeH2:function(e,a){e.exports=t}})});
//# sourceMappingURL=index.js.map