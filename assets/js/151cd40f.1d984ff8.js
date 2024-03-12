"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[3702],{3919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=n(1527),s=n(2175);function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,r.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,r.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",disabled:!0})," list"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," batch"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"root"}),": Set the work directory for this backend."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"credentials-related",children:"Credentials related"}),"\n",(0,r.jsx)(t.h4,{id:"just-provide-access-token-temporary",children:"Just provide Access Token (Temporary)"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"access_token"}),": set the access_token for this backend.\nPlease notice its expiration."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term",children:"Or provide Client ID and Client Secret and refresh token (Long Term)"}),"\n",(0,r.jsx)(t.p,{children:"If you want to let OpenDAL to refresh the access token automatically,\nplease provide the following fields:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"refresh_token"}),": set the refresh_token for dropbox api"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"client_id"}),": set the client_id for dropbox api"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"client_secret"}),": set the client_secret for dropbox api"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"OpenDAL is a library, it cannot do the first step of OAuth2 for you.\nYou need to get authorization code from user by calling Dropbox's authorize url\nand exchange it for refresh token."}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to ",(0,r.jsx)(t.a,{href:"https://www.dropbox.com/developers/reference/oauth-guide",children:"Dropbox OAuth2 Guide"}),"\nfor more information."]}),"\n",(0,r.jsxs)(t.p,{children:["You can refer to [",(0,r.jsx)(t.code,{children:"DropboxBuilder"}),"]'s docs for more information"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::raw::OpWrite;\nuse opendal::services::Dropbox;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Dropbox::default();\n    builder.root("/opendal");\n    builder.access_token("<token>");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var i=n(5431),l=n(2860);const c={title:"Dropbox"},d=void 0,u={id:"services/dropbox",title:"Dropbox",description:"Dropbox services support.",source:"@site/docs/services/dropbox.mdx",sourceDirName:"services",slug:"/services/dropbox",permalink:"/docs/services/dropbox",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/dropbox.mdx",tags:[],version:"current",lastUpdatedBy:"Horus",lastUpdatedAt:1710232683,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"Dropbox"},sidebar:"docs",previous:{title:"DashMap",permalink:"/docs/services/dashmap"},next:{title:"Etcd",permalink:"/docs/services/etcd"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function b(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.dropbox.com/",children:"Dropbox"})," services support."]}),"\n","\n",(0,r.jsx)(o,{components:e.components}),"\n",(0,r.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Dropbox, map)?;\n    Ok(())\n}\n'})})}),(0,r.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("dropbox", {\n    root: "/path/to/dir",\n    access_token: "your_access_token",\n  });\n}\n'})})}),(0,r.jsx)(l.Z,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("dropbox",\n  root="/path/to/dir",\n  access_token="your_access_token",\n)\n'})})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var r=n(6259);const s={tabItem:"tabItem_CbVR"};var a=n(1527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(959),s=n(6259),a=n(2990),o=n(8903),i=n(3133),l=n(563),c=n(351),d=n(3026);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=b({queryString:n,groupId:s}),[x,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=n(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=n(1527);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(k,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(959);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);