"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[7289],{6614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var s=n(1527),i=n(2175);function r(e){const t={a:"a",code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"There two implementations of WebHDFS REST API:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Native via HDFS Namenode and Datanode, data are transferred between nodes directly."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-hdfs-httpfs/index.html",children:"HttpFS"})," is a gateway before hdfs nodes, data are proxied."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"scan"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(t.del,{children:"presign"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"differences-with-hdfs",children:"Differences with HDFS"}),"\n",(0,s.jsx)(t.p,{children:"[Hdfs][crate::services::Hdfs] is powered by HDFS's native java client. Users need to set up the HDFS services correctly. But webhdfs can access from HTTP API and no extra setup needed."}),"\n",(0,s.jsx)(t.h2,{id:"webhdfs-compatibility-guidelines",children:"WebHDFS Compatibility Guidelines"}),"\n",(0,s.jsx)(t.h3,{id:"file-creation-and-write",children:"File Creation and Write"}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.a,{href:"https://hadoop.apache.org/docs/r3.1.3/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#Create_and_Write_to_a_File",children:"File creation and write"})," operations,\nOpenDAL WebHDFS is optimized for Hadoop Distributed File System (HDFS) versions 2.9 and later.\nThis involves two API calls in webhdfs, where the initial ",(0,s.jsx)(t.code,{children:"put"})," call to the namenode is redirected to the datanode handling the file data.\nThe optional ",(0,s.jsx)(t.code,{children:"noredirect"})," flag can be set to prevent redirection. If used, the API response body contains the datanode URL, which is then utilized for the subsequent ",(0,s.jsx)(t.code,{children:"put"})," call with the actual file data.\nOpenDAL automatically sets the ",(0,s.jsx)(t.code,{children:"noredirect"})," flag with the first ",(0,s.jsx)(t.code,{children:"put"})," call. This feature is supported starting from HDFS version 2.9."]}),"\n",(0,s.jsx)(t.h3,{id:"multi-write-support",children:"Multi-Write Support"}),"\n",(0,s.jsxs)(t.p,{children:["OpenDAL WebHDFS supports multi-write operations by creating temporary files in the specified ",(0,s.jsx)(t.code,{children:"atomic_write_dir"}),".\nThe final concatenation of these temporary files occurs when the writer is closed.\nHowever, it's essential to be aware of HDFS concat restrictions for earlier versions,\nwhere the target file must not be empty, and its last block must be full. Due to these constraints, the concat operation might fail for HDFS 2.6.\nThis issue, identified as ",(0,s.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HDFS-6641",children:"HDFS-6641"}),", has been addressed in later versions of HDFS."]}),"\n",(0,s.jsx)(t.p,{children:"In summary, OpenDAL WebHDFS is designed for optimal compatibility with HDFS, specifically versions 2.9 and later."}),"\n",(0,s.jsx)(t.h2,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"root"}),": The root path of the WebHDFS service."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"endpoint"}),": The endpoint of the WebHDFS service."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"delegation"}),": The delegation token for WebHDFS."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"atomic_write_dir"}),": The tmp write dir of multi write for WebHDFS.Needs to be configured for multi write support."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Refer to [",(0,s.jsx)(t.code,{children:"Builder"}),"]'s public API docs for more information."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Webhdfs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Webhdfs::default();\n    // set the root for WebHDFS, all operations will happen under this root\n    //\n    // Note:\n    // if the root is not exists, the builder will automatically create the\n    // root directory for you\n    // if the root exists and is a directory, the builder will continue working\n    // if the root exists and is a folder, the builder will fail on building backend\n    builder.root("/path/to/dir");\n    // set the endpoint of webhdfs namenode, controlled by dfs.namenode.http-address\n    // default is http://127.0.0.1:9870\n    builder.endpoint("http://127.0.0.1:9870");\n    // set the delegation_token for builder\n    builder.delegation("delegation_token");\n    // set atomic_write_dir for builder\n    builder.atomic_write_dir(".opendal_tmp/");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var o=n(5431),l=n(2860);const d={title:"WebHDFS"},c=void 0,u={id:"services/webhdfs",title:"WebHDFS",description:"WebHDFS's REST API support.",source:"@site/docs/services/webhdfs.mdx",sourceDirName:"services",slug:"/services/webhdfs",permalink:"/docs/services/webhdfs",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/webhdfs.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1709549459,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{title:"WebHDFS"},sidebar:"docs",previous:{title:"WebDAV",permalink:"/docs/services/webdav"}},h={},p=[{value:"Via Config",id:"via-config",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/WebHDFS.html",children:"WebHDFS"}),"'s REST API support."]}),"\n","\n",(0,s.jsx)(a,{components:e.components}),"\n",(0,s.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  let mut map = HashMap::new();\n  map.insert("endpoint".to_string(), "http://127.0.0.1:9870".to_string());\n  map.insert("root".to_string(), "/path/to/dir".to_string());\n  map.insert("delegation".to_string(), "delegation_token".to_string());\n\n  let op: Operator = Operator::via_map(Scheme::Webhdfs, map)?;\n  Ok(())\n}\n'})})}),(0,s.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("webhdfs", {\n    endpoint: "http://127.0.0.1:9870",\n    root: "/path/to/dir",\n    delegation: "delegation_token",\n  });\n}\n'})})}),(0,s.jsx)(l.Z,{value:"python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("webhdfs",\n    endpoint="http://127.0.0.1:9870",\n    root="/path/to/dir",\n    delegation="delegation_token",\n)\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>a});n(959);var s=n(6259);const i={tabItem:"tabItem_CbVR"};var r=n(1527);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,a),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(959),i=n(6259),r=n(2990),a=n(8903),o=n(3133),l=n(563),d=n(351),c=n(3026);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,u]=f({queryString:n,groupId:i}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,c.Nk)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),x=(()=>{const e=d??b;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=n(1527);function v(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==s&&(d(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(959);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);