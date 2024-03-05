"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1163],{6404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var s=n(1527),a=n(2175);function r(e){const t={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," rename"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"list"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," scan"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"presign"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"datadir"}),": Set the path to the sled data directory"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can refer to [",(0,s.jsx)(t.code,{children:"SledBuilder"}),"]'s docs for more information"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Sled;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Sled::default();\n    builder.datadir("/tmp/opendal/sled");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var i=n(5431),c=n(2860);const o={title:"Sled"},d=void 0,u={id:"services/sled",title:"Sled",description:"Sled service support.",source:"@site/docs/services/sled.mdx",sourceDirName:"services",slug:"/services/sled",permalink:"/docs/services/sled",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/sled.mdx",tags:[],version:"current",lastUpdatedBy:"Flash",lastUpdatedAt:1709640325,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"Sled"},sidebar:"docs",previous:{title:"SFTP",permalink:"/docs/services/sftp"},next:{title:"Sqlite",permalink:"/docs/services/sqlite"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Sled service support."}),"\n","\n",(0,s.jsx)(l,{components:e.components}),"\n",(0,s.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(c.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("datadir".to_string(), "/tmp/opendal/sled".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Sled, map)?;\n    Ok(())\n}\n'})})}),(0,s.jsx)(c.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("sled", {\n    datadir: "/tmp/opendal/sled",\n  });\n}\n'})})}),(0,s.jsx)(c.Z,{value:"python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("sled",\n  datadir="/tmp/opendal/sled",\n)\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>l});n(959);var s=n(6259);const a={tabItem:"tabItem_CbVR"};var r=n(1527);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,l),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(959),a=n(6259),r=n(2990),l=n(8903),i=n(3133),c=n(563),o=n(351),d=n(3026);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[o,u]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),x=(()=>{const e=o??b;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var v=n(1527);function j(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(o(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(k,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,v.jsx)(g,{...e,children:u(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var s=n(959);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);