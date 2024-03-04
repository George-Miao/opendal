"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2804],{9989:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>j,frontMatter:()=>u,metadata:()=>p,toc:()=>x});var t=s(1527),r=s(2175);function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," scan"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," presign"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"root"}),": Set the work dir for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": Set the container name for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": Set the endpoint for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),": Set the region for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"access_key_id"}),": Set the access_key_id for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret_access_key"}),": Set the secret_access_key for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"security_token"}),": Set the security_token for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"default_storage_class"}),": Set the default storage_class for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"server_side_encryption"}),": Set the server_side_encryption for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"server_side_encryption_aws_kms_key_id"}),": Set the server_side_encryption_aws_kms_key_id for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"server_side_encryption_customer_algorithm"}),": Set the server_side_encryption_customer_algorithm for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"server_side_encryption_customer_key"}),": Set the server_side_encryption_customer_key for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"server_side_encryption_customer_key_md5"}),": Set the server_side_encryption_customer_key_md5 for backend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"disable_config_load"}),": Disable aws config load from env"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enable_virtual_host_style"}),": Enable virtual host style."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to [",(0,t.jsx)(n.code,{children:"S3Builder"}),"]'s public API docs for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"temporary-security-credentials",children:"Temporary security credentials"}),"\n",(0,t.jsx)(n.p,{children:"OpenDAL now provides support for S3 temporary security credentials in IAM."}),"\n",(0,t.jsxs)(n.p,{children:["The way to take advantage of this feature is to build your S3 backend with ",(0,t.jsx)(n.code,{children:"Builder::security_token"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"But OpenDAL will not refresh the temporary security credentials, please keep in mind to refresh those credentials in time."}),"\n",(0,t.jsx)(n.h2,{id:"server-side-encryption",children:"Server Side Encryption"}),"\n",(0,t.jsx)(n.p,{children:"OpenDAL provides full support of S3 Server Side Encryption(SSE) features."}),"\n",(0,t.jsx)(n.p,{children:"The easiest way to configure them is to use helper functions like"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["SSE-KMS: ",(0,t.jsx)(n.code,{children:"server_side_encryption_with_aws_managed_kms_key"})]}),"\n",(0,t.jsxs)(n.li,{children:["SSE-KMS: ",(0,t.jsx)(n.code,{children:"server_side_encryption_with_customer_managed_kms_key"})]}),"\n",(0,t.jsxs)(n.li,{children:["SSE-S3: ",(0,t.jsx)(n.code,{children:"server_side_encryption_with_s3_key"})]}),"\n",(0,t.jsxs)(n.li,{children:["SSE-C: ",(0,t.jsx)(n.code,{children:"server_side_encryption_with_customer_key"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If those functions don't fulfill need, low-level options are also provided:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use service managed kms key\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption="aws:kms"'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Use customer provided kms key\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption="aws:kms"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption_aws_kms_key_id="your-kms-key"'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Use S3 managed key\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption="AES256"'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Use customer key\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption_customer_algorithm="AES256"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption_customer_key="base64-of-your-aes256-key"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'server_side_encryption_customer_key_md5="base64-of-your-aes256-key-md5"'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After SSE have been configured, all requests send by this backed will attach those headers."}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html",children:"Protecting data using server-side encryption"})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h2,{id:"via-builder",children:"Via Builder"}),"\n",(0,t.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create s3 backend builder.\n    let mut builder = S3::default();\n    // Set the root for s3, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/path/to/dir");\n    // Set the bucket name. This is required.\n    builder.bucket("test");\n    // Set the region. This is required for some services, if you don\'t care about it, for example Minio service, just set it to "auto", it will be ignored.\n    builder.region("us-east-1");\n    // Set the endpoint.\n    //\n    // For examples:\n    // - "https://s3.amazonaws.com"\n    // - "http://127.0.0.1:9000"\n    // - "https://oss-ap-northeast-1.aliyuncs.com"\n    // - "https://cos.ap-seoul.myqcloud.com"\n    //\n    // Default to "https://s3.amazonaws.com"\n    builder.endpoint("https://s3.amazonaws.com");\n    // Set the access_key_id and secret_access_key.\n    //\n    // OpenDAL will try load credential from the env.\n    // If credential not set and no valid credential in env, OpenDAL will\n    // send request without signing like anonymous user.\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"s3-with-sse-c",children:"S3 with SSE-C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    // Enable SSE-C\n    builder.server_side_encryption_with_customer_key("AES256", "customer_key".as_bytes());\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"s3-with-sse-kms-and-aws-managed-kms-key",children:"S3 with SSE-KMS and aws managed kms key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n    \n    // Enable SSE-KMS with aws managed kms key\n    builder.server_side_encryption_with_aws_managed_kms_key();\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"s3-with-sse-kms-and-customer-managed-kms-key",children:"S3 with SSE-KMS and customer managed kms key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    // Enable SSE-KMS with customer managed kms key\n    builder.server_side_encryption_with_customer_managed_kms_key("aws_kms_key_id");\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"s3-with-sse-s3",children:"S3 with SSE-S3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse log::info;\nuse opendal::services::S3;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = S3::default();\n\n    // Setup builders\n    builder.root("/path/to/dir");\n    builder.bucket("test");\n    builder.region("us-east-1");\n    builder.endpoint("https://s3.amazonaws.com");\n    builder.access_key_id("access_key_id");\n    builder.secret_access_key("secret_access_key");\n\n    // Enable SSE-S3\n    builder.server_side_encryption_with_s3_key();\n\n    let op = Operator::new(builder)?.finish();\n    info!("operator: {:?}", op);\n\n    // Writing your testing code here.\n\n    Ok(())\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var o=s(5431),a=s(2860);function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"compatible-services",children:"Compatible Services"}),"\n",(0,t.jsx)(n.h3,{id:"aws-s3",children:"AWS S3"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"AWS S3"})," is the default implementations of s3 services. Only ",(0,t.jsx)(n.code,{children:"bucket"})," is required."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust,ignore",children:'builder.bucket("<bucket_name>");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"alibaba-object-storage-service-oss",children:"Alibaba Object Storage Service (OSS)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.alibabacloud.com/product/object-storage-service",children:"OSS"})," is a s3 compatible service provided by ",(0,t.jsx)(n.a,{href:"https://www.alibabacloud.com",children:"Alibaba Cloud"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To connect to OSS, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of oss, for example: ",(0,t.jsx)(n.code,{children:"https://oss-cn-hangzhou.aliyuncs.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name of oss."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["OSS provide internal endpoint for used at alibabacloud internally, please visit ",(0,t.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/object-storage-service/latest/regions-and-endpoints",children:"OSS Regions and endpoints"})," for more details."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"OSS only supports the virtual host style, users could meet errors like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Error>\n <Code>SecondLevelDomainForbidden</Code>\n <Message>The bucket you are attempting to access must be addressed using OSS third level domain.</Message>\n <RequestId>62A1C265292C0632377F021F</RequestId>\n <HostId>oss-cn-hangzhou.aliyuncs.com</HostId>\n</Error>\n'})}),"\n",(0,t.jsx)(n.p,{children:"In that case, please enable virtual host style for requesting."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust,ignore",children:'builder.endpoint("https://oss-cn-hangzhou.aliyuncs.com");\nbuilder.region("<region>");\nbuilder.bucket("<bucket_name>");\nbuilder.enable_virtual_host_style();\n'})}),"\n",(0,t.jsx)(n.h3,{id:"minio",children:"Minio"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://min.io/",children:"minio"})," is an open-source s3 compatible services."]}),"\n",(0,t.jsx)(n.p,{children:"To connect to minio, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of minio, for example: ",(0,t.jsx)(n.code,{children:"http://127.0.0.1:9000"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),': The region of minio. If you don\'t care about it, just set it to "auto", it will be ignored.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name of minio."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust,ignore",children:'builder.endpoint("http://127.0.0.1:9000");\nbuilder.region("<region>");\nbuilder.bucket("<bucket_name>");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"qingstor-object-storage",children:"QingStor Object Storage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.qingcloud.com/products/qingstor",children:"QingStor Object Storage"})," is a S3-compatible service provided by ",(0,t.jsx)(n.a,{href:"https://www.qingcloud.com/",children:"QingCloud"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To connect to QingStor Object Storage, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of QingStor s3 compatible endpoint, for example: ",(0,t.jsx)(n.code,{children:"https://s3.pek3b.qingstor.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scaleway-object-storage",children:"Scaleway Object Storage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.scaleway.com/en/object-storage/",children:"Scaleway Object Storage"})," is a S3-compatible and multi-AZ redundant object storage service."]}),"\n",(0,t.jsx)(n.p,{children:"To connect to Scaleway Object Storage, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of scaleway, for example: ",(0,t.jsx)(n.code,{children:"https://s3.nl-ams.scw.cloud"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),": The region of scaleway."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name of scaleway."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tencent-cloud-object-storage-cos",children:"Tencent Cloud Object Storage (COS)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://intl.cloud.tencent.com/products/cos",children:"COS"})," is a s3 compatible service provided by ",(0,t.jsx)(n.a,{href:"https://intl.cloud.tencent.com/",children:"Tencent Cloud"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To connect to COS, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of cos, for example: ",(0,t.jsx)(n.code,{children:"https://cos.ap-beijing.myqcloud.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name of cos."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"wasabi-object-storage",children:"Wasabi Object Storage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://wasabi.com/",children:"Wasabi"})," is a s3 compatible service."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Cloud storage pricing that is 80% less than Amazon S3."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To connect to wasabi, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of wasabi, for example: ",(0,t.jsx)(n.code,{children:"https://s3.us-east-2.wasabisys.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name of wasabi."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://wasabi-support.zendesk.com/hc/en-us/articles/360015106031",children:"What are the service URLs for Wasabi's different storage regions?"})," for more details."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cloudflare-r2",children:"Cloudflare R2"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://developers.cloudflare.com/r2/",children:"Cloudflare R2"})," provides s3 compatible API."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Cloudflare R2 Storage allows developers to store large amounts of unstructured data without the costly egress bandwidth fees associated with typical cloud storage services."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To connect to r2, we need to set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of r2, for example: ",(0,t.jsx)(n.code,{children:"https://<account_id>.r2.cloudflarestorage.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name of r2."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),": When you create a new bucket, the data location is set to Automatic by default. So please use ",(0,t.jsx)(n.code,{children:"auto"})," for region."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"batch_max_operations"}),": R2's delete objects will return ",(0,t.jsx)(n.code,{children:"Internal Error"})," if the batch is larger than ",(0,t.jsx)(n.code,{children:"700"}),". Please set this value ",(0,t.jsx)(n.code,{children:"<= 700"})," to make sure batch delete work as expected."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enable_exact_buf_write"}),": R2 requires the non-tailing parts size to be exactly the same. Please enable this option to avoid the error ",(0,t.jsx)(n.code,{children:"All non-trailing parts must have the same length"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"google-cloud-storage-xml-api",children:"Google Cloud Storage XML API"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/xml-api/overview",children:"Google Cloud Storage XML API"})," provides s3 compatible API."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"}),": The endpoint of Google Cloud Storage XML API, for example: ",(0,t.jsx)(n.code,{children:"https://storage.googleapis.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),": The bucket name."]}),"\n",(0,t.jsxs)(n.li,{children:["To access GCS via S3 API, please enable ",(0,t.jsx)(n.code,{children:'features = ["native-tls"]'})," in your ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," to avoid connection being reset when using ",(0,t.jsx)(n.code,{children:"rustls"}),". Tracking in ",(0,t.jsx)(n.a,{href:"https://github.com/seanmonstar/reqwest/issues/1809",children:"https://github.com/seanmonstar/reqwest/issues/1809"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ceph-rados-gateway",children:"Ceph Rados Gateway"}),"\n",(0,t.jsx)(n.p,{children:"Ceph supports a RESTful API that is compatible with the basic data access model of the Amazon S3 API."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, refer: ",(0,t.jsx)(n.a,{href:"https://docs.ceph.com/en/latest/radosgw/s3/",children:"https://docs.ceph.com/en/latest/radosgw/s3/"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const u={title:"S3"},h=void 0,p={id:"services/s3",title:"S3",description:"Aws S3 and compatible services (including minio, digitalocean space, Tencent Cloud Object Storage(COS) and so on) support.",source:"@site/docs/services/s3.mdx",sourceDirName:"services",slug:"/services/s3",permalink:"/docs/services/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/s3.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1709549459,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{title:"S3"},sidebar:"docs",previous:{title:"RocksDB",permalink:"/docs/services/rocksdb"},next:{title:"SFTP",permalink:"/docs/services/sftp"}},m={},x=[{value:"Via Config",id:"via-config",level:2}];function b(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Aws S3 and compatible services (including minio, digitalocean space, Tencent Cloud Object Storage(COS) and so on) support."}),"\n",(0,t.jsxs)(n.p,{children:["For more information about s3-compatible services, refer to ",(0,t.jsx)(n.a,{href:"#compatible-services",children:"Compatible Services"}),"."]}),"\n","\n",(0,t.jsx)(c,{components:e.components}),"\n",(0,t.jsx)(n.h2,{id:"via-config",children:"Via Config"}),"\n","\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(a.Z,{value:"rust",label:"Rust",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("bucket".to_string(), "test".to_string());\n    map.insert("region".to_string(), "us-east-1".to_string());\n    map.insert("endpoint".to_string(), "https://s3.amazonaws.com".to_string());\n    map.insert("access_key_id".to_string(), "access_key_id".to_string());\n    map.insert("secret_access_key".to_string(), "secret_access_key".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::S3, map)?;\n\n    Ok(())\n}\n'})})}),(0,t.jsx)(a.Z,{value:"node.js",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("s3", {\n    root: "/path/to/dir",\n    bucket: "test",\n    region: "us-east-1",\n    endpoint: "https://s3.amazonaws.com",\n    access_key_id: "access_key_id",\n    secret_access_key: "secret_access_key",\n  });\n}\n'})})}),(0,t.jsx)(a.Z,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("s3",\n    root="/path/to/dir",\n    bucket="test",\n    region="us-east-1",\n    endpoint="https://s3.amazonaws.com",\n    access_key_id="access_key_id",\n    secret_access_key="secret_access_key",\n)\n'})})})]}),"\n","\n","\n",(0,t.jsx)(d,{components:e.components})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},2860:(e,n,s)=>{s.d(n,{Z:()=>c});s(959);var t=s(6259);const r={tabItem:"tabItem_CbVR"};var i=s(1527);function c(e){let{children:n,hidden:s,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,c),hidden:s,children:n})}},5431:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(959),r=s(6259),i=s(2990),c=s(8903),o=s(3133),a=s(563),l=s(351),d=s(3026);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,c.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[c,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:s,groupId:r}),[x,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),j=(()=>{const e=l??x;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=s(3499);const j={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var _=s(1527);function k(e){let{className:n,block:s,selectedValue:t,selectValue:c,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),r=o[s].value;r!==t&&(l(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=x(e);return(0,_.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,_.jsx)(k,{...e,...n}),(0,_.jsx)(f,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,_.jsx)(g,{...e,children:u(e.children)},String(n))}},2175:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var t=s(959);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);