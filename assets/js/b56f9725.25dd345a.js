"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[217],{4958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=n(1527),a=n(2175);function r(e){const t={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"write"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"create_dir"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"delete"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"copy"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"rename"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"scan"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," presign"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"root"}),": Set the work directory for backend"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"endpoint"}),": Customizable endpoint setting"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can refer to [",(0,s.jsx)(t.code,{children:"IpfsBuilder"}),"]'s docs for more information"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Ipfs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // create backend builder\n    let mut builder = Ipfs::default();\n\n    // set the endpoint for OpenDAL\n    builder.endpoint("https://ipfs.io");\n    // set the root for OpenDAL\n    builder.root("/ipfs/QmPpCt1aYGb9JWJRmXRUnmJtVgeFFTJGzWFYEEX7bo9zGJ");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var l=n(5431),o=n(2860);const c={title:"IPFS"},u=void 0,d={id:"services/ipfs",title:"IPFS",description:"IPFS file system support based on IPFS HTTP Gateway.",source:"@site/docs/services/ipfs.mdx",sourceDirName:"services",slug:"/services/ipfs",permalink:"/docs/services/ipfs",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/ipfs.mdx",tags:[],version:"current",lastUpdatedBy:"Anurag Naik",lastUpdatedAt:1710319101,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"IPFS"},sidebar:"docs",previous:{title:"Hugging Face",permalink:"/docs/services/huggingface"},next:{title:"IPMFS",permalink:"/docs/services/ipmfs"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["IPFS file system support based on ",(0,s.jsx)(t.a,{href:"https://docs.ipfs.tech/concepts/ipfs-gateway/",children:"IPFS HTTP Gateway"}),"."]}),"\n","\n",(0,s.jsx)(i,{components:e.components}),"\n",(0,s.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(o.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  let mut map = HashMap::new();\n  map.insert("endpoint".to_string(), "https://ipfs.io".to_string());\n  map.insert("root".to_string(), "/ipfs/QmPpCt1aYGb9JWJRmXRUnmJtVgeFFTJGzWFYEEX7bo9zGJ".to_string());\n\n  let op: Operator = Operator::via_map(Scheme::Ipfs, map)?;\n  Ok(())\n}\n'})})}),(0,s.jsx)(o.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("ipfs", {\n    endpoint: "https://ipfs.io",\n    root: "/ipfs/QmPpCt1aYGb9JWJRmXRUnmJtVgeFFTJGzWFYEEX7bo9zGJ",\n  });\n}\n'})})}),(0,s.jsx)(o.Z,{value:"python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("ipfs",\n    endpoint="https://ipfs.io",\n    root="/ipfs/QmPpCt1aYGb9JWJRmXRUnmJtVgeFFTJGzWFYEEX7bo9zGJ",\n)\n'})})})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>i});n(959);var s=n(6259);const a={tabItem:"tabItem_CbVR"};var r=n(1527);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,i),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(959),a=n(6259),r=n(2990),i=n(8903),l=n(3133),o=n(563),c=n(351),u=n(3026);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),x=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=n(1527);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==s&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(959);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);