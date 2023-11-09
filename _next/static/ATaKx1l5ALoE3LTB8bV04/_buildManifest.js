self.__BUILD_MANIFEST=function(e,s,a,t,n,i,o,r,l,c,d,u,g,p,b,h,f,m,v,k,j,x,w,y,_,R,q,E,I,B,D,F,N,S,z,C,O,A,L,M,T,U,W,P,G){return{__rewrites:{beforeFiles:[],afterFiles:[{source:"/learn/build-a-data-service-in-ballerina",destination:"/learn/resources/featured-scenarios/build-a-data-service-in-ballerina"},{source:"/learn/deploy-ballerina-on-kubernetes",destination:"/learn/resources/featured-scenarios/deploy-ballerina-on-kubernetes"},{source:"/learn/manage-data-persistence-with-bal-persist",destination:"/learn/resources/featured-scenarios/manage-data-persistence-with-bal-persist"},{source:"/learn/work-with-data-using-queries-in-ballerina",destination:"/learn/resources/featured-scenarios/work-with-data-using-queries-in-ballerina"},{source:"/learn/write-a-graphql-api-with-ballerina",destination:"/learn/resources/featured-scenarios/write-a-graphql-api-with-ballerina"},{source:"/learn/write-a-grpc-service-with-ballerina",destination:"/learn/resources/featured-scenarios/write-a-grpc-service-with-ballerina"},{source:"/learn/write-a-restful-api-with-ballerina",destination:"/learn/resources/featured-scenarios/write-a-restful-api-with-ballerina"},{source:"/learn/get-started",destination:"/learn/integration/get-started"},{source:j,destination:j},{source:"/learn/ballerina-specifications",destination:_},{source:"/learn/language-basics",destination:"/learn/resources/learn-the-language/language-basics"},{source:"/learn/language-walkthrough",destination:"/learn/resources/learn-the-language/language-walkthrough"},{source:"/learn/network-interaction",destination:"/learn/resources/learn-the-language/network-interaction"},{source:"/learn/concurrency",destination:"/learn/resources/learn-the-language/concurrency"},{source:"/learn/advanced-general-purpose-language-features",destination:"/learn/resources/learn-the-language/advanced-general-purpose-language-features"},{source:"/learn/data",destination:"/learn/resources/learn-the-language/data"},{source:"/learn/installation-options",destination:"/learn/get-started/installation-options"},{source:R,destination:"/learn/get-started/install-ballerina/set-up-ballerina"},{source:"/learn/openapi-tool",destination:"/learn/integration-tools/openapi-tool"},{source:"/learn/graphql-tool",destination:"/learn/integration-tools/graphql-tool"},{source:"/learn/asyncapi-tool",destination:"/learn/integration-tools/asyncapi-tool"},{source:"/learn/grpc-tool",destination:"/learn/integration-tools/grpc-tool"},{source:"/learn/strand-dump-tool",destination:"/learn/development-tutorials/troubleshoot-the-runtime/strand-dump-tool"},{source:"/learn/ballerina-profiler",destination:"/learn/development-tutorials/troubleshoot-the-runtime/ballerina-profiler"},{source:"/learn/edi-tool",destination:"/learn/integration-tools/edi-tool"},{source:"/learn/health-tool",destination:"/learn/integration-tools/health-tool"},{source:"/learn/ballerina-shell",destination:"/learn/integration-tools/ballerina-shell"},{source:"/learn/bal-persist-overview",destination:"/learn/development-tutorials/ballerina-persist/bal-persist-overview"},{source:"/learn/persist-cli-tool",destination:"/learn/development-tutorials/ballerina-persist/persist-cli-tool"},{source:"/learn/persist-model",destination:"/learn/development-tutorials/ballerina-persist/persist-model"},{source:"/learn/persist-client-api",destination:"/learn/development-tutorials/ballerina-persist/persist-client-api"},{source:"/learn/supported-data-stores",destination:"/learn/development-tutorials/ballerina-persist/supported-data-stores"},{source:"/learn/call-java-code-from-ballerina",destination:"/learn/development-tutorials/java-interoperability/call-java-code-from-ballerina"},{source:"/learn/the-bindgen-tool",destination:"/learn/development-tutorials/java-interoperability/the-bindgen-tool"},{source:"/learn/ballerina-ffi",destination:"/learn/development-tutorials/java-interoperability/ballerina-ffi"},{source:"/learn/debug-ballerina-programs",destination:"/learn/development-tutorials/test-document-the-code/debug-ballerina-programs"},{source:"/learn/generate-code-documentation",destination:"/learn/development-tutorials/test-document-the-code/generate-code-documentation"},{source:"/learn/manage-dependencies",destination:"/learn/development-tutorials/source-code-dependencies/manage-dependencies"},{source:"/learn/configure-a-sample-ballerina-service",destination:"/learn/development-tutorials/configurability/configure-a-sample-ballerina-service"},{source:"/learn/configure-values",destination:"/learn/development-tutorials/configurability/configure-values"},{source:"/learn/provide-values-to-configurable-variables",destination:"/learn/development-tutorials/configurability/provide-values-to-configurable-variables"},{source:"/learn/observe-ballerina-programs",destination:"/learn/development-tutorials/observability/observe-ballerina-programs"},{source:"/learn/observe-logs",destination:"/learn/development-tutorials/observability/observe-logs"},{source:"/learn/observe-metrics",destination:"/learn/development-tutorials/observability/observe-metrics"},{source:"/learn/observe-tracing",destination:"/learn/development-tutorials/observability/observe-tracing"},{source:"/learn/organize-ballerina-code",destination:"/learn/development-tutorials/source-code-dependencies/organize-ballerina-code"},{source:"/learn/publish-packages-to-ballerina-central",destination:"/learn/development-tutorials/ballerina-central/publish-packages-to-ballerina-central"},{source:"/learn/code-to-cloud-deployment",destination:"/learn/development-tutorials/run-in-the-cloud/code-to-cloud-deployment"},{source:"/learn/azure-functions",destination:"/learn/development-tutorials/run-in-the-cloud/azure-functions"},{source:"/learn/aws-lambda",destination:"/learn/development-tutorials/run-in-the-cloud/aws-lambda"},{source:"/learn/test-ballerina-code/:slug",destination:"/learn/development-tutorials/test-document-the-code/test-ballerina-code/:slug"},{source:"/learn/package-references",destination:"/learn/development-tutorials/source-code-dependencies/package-references"},{source:"/learn/cli-commands/",destination:"/learn/development-tutorials/build-and-run/cli-commands/"},{source:"/learn/update-tool/",destination:"/learn/development-tutorials/build-and-run/update-tool/"},{source:"/learn/ballerina-shell/",destination:"/learn/development-tutorials/build-and-run/ballerina-shell/"},{source:"/learn/style-guide/:slug",destination:"/learn/development-tutorials/source-code-dependencies/style-guide/:slug"},{source:"/learn/style-guide/coding-conventions/:slug",destination:"/learn/references/style-guide/coding-conventions/:slug"},{source:"/learn/graalvm-executable-overview",destination:"/learn/development-tutorials/build-a-graalvm-executable/graalvm-executable-overview"},{source:"/learn/build-the-executable-locally",destination:"/learn/development-tutorials/build-a-graalvm-executable/build-the-executable-locally"},{source:"/learn/build-the-executable-in-a-container",destination:"/learn/development-tutorials/build-a-graalvm-executable/build-the-executable-in-a-container"},{source:"/downloads/swan-lake-release-notes",destination:"/downloads/swan-lake-release-notes/2201.0.2"},{source:"/1.2/learn/",destination:"/1.2/learn/index.html"},{source:"/1.2/learn/api-docs/ballerina/",destination:"/1.2/learn/api-docs/ballerina/index.html"},{source:"/1.1/learn/",destination:"/1.1/learn/index.html"},{source:"/1.1/learn/api-docs/ballerina/",destination:"/1.1/learn/api-docs/ballerina/index.html"},{source:"/1.0/learn/",destination:"/1.0/learn/index.html"},{source:"/1.0/learn/api-docs/ballerina/",destination:"/1.0/learn/api-docs/ballerina/index.html"},{source:"/0.990/learn/api-docs/ballerina/",destination:"/0.990/learn/api-docs/ballerina/index.html"},{source:"/cookie-policy",destination:"/policies/cookie-policy"},{source:"/license-of-site",destination:"/policies/license-of-site"},{source:"/terms-of-service",destination:"/policies/terms-of-service"},{source:"/privacy-policy",destination:"/policies/privacy-policy"},{source:"/security-policy",destination:"/policies/security-policy"},{source:"/trademark-usage-policy",destination:"/policies/trademark-usage-policy"},{source:"/code-of-conduct",destination:"/policies/code-of-conduct"},{source:"/CODEOWNERS",destination:"/policies/CODEOWNERS"},{source:"/spec/lang/2022R2/",destination:"/spec/lang/2022R2/index.html"},{source:"/spec/lang/2022R1/",destination:"/spec/lang/2022R1/index.html"},{source:"/spec/lang/2021R1/",destination:"/spec/lang/2021R1/index.html"},{source:"/spec/lang/2020R1/",destination:"/spec/lang/2020R1/index.html"},{source:"/spec/lang/2019R3/",destination:"/spec/lang/2019R3/index.html"},{source:"/spec/lang/2019R2/",destination:"/spec/lang/2019R2/index.html"},{source:"/spec/lang/2019R1/",destination:"/spec/lang/2019R1/index.html"},{source:"/learn/supported-data-formats",destination:"/learn/integration/supported-data-formats"},{source:"/learn/supported-network-protocols",destination:"/learn/integration/supported-network-protocols"},{source:"/learn/pre-built-integrations",destination:q},{source:"/learn/pre-built-integrations/google-sheets-to-salesforce-integration",destination:E},{source:"/learn/pre-built-integrations/kafka-to-salesforce-integration",destination:I},{source:"/learn/pre-built-integrations/mysql-to-salesforce-integration",destination:B},{source:"/learn/pre-built-integrations/gmail-to-salesforce-integration",destination:D},{source:"/learn/pre-built-integrations/salesforce-to-twilio-integration",destination:F},{source:"/learn/pre-built-integrations/news-api-to-email-integration",destination:N},{source:"/learn/pre-built-integrations/github-to-email-integration",destination:S},{source:"/learn/pre-built-integrations/shopify-to-outlook-integration",destination:z},{source:"/learn/pre-built-integrations/google-drive-to-onedrive-integration",destination:C},{source:"/learn/pre-built-integrations/hubspot-contacts-to-google-contacts-integration",destination:O},{source:"/learn/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity",destination:A},{source:"/learn/integration-tutorials",destination:L},{source:"/learn/integration-tutorials/:slug",destination:"/learn/integration/integration-tutorials/:slug"}],fallback:[]},"/":["static/chunks/0c428ae2-88f4ebd913f16e8c.js",e,a,o,b,s,"static/chunks/2904-01bc9e2aa2c3eab1.js","static/css/4941c0b6b4324171.css","static/chunks/pages/index-41343cc4f161cfb5.js"],"/404":[e,s,p,"static/chunks/pages/404-5c658939ed19e313.js"],"/_error":["static/chunks/pages/_error-785557186902809b.js"],"/case-studies/[slug]":[i,e,t,n,r,d,s,u,p,"static/chunks/pages/case-studies/[slug]-8030093c7024b230.js"],"/community":[e,s,"static/css/6c35905c4959cb5b.css","static/chunks/pages/community-31bbaaea1a2b35f3.js"],"/community/active-proposals":[e,t,n,s,p,"static/chunks/pages/community/active-proposals-2615ae36a41e0098.js"],"/community/ballerina-newsletter":[e,s,M,"static/chunks/pages/community/ballerina-newsletter-c8365e5fbf47d264.js"],"/community/ballerina-tech-talk":[e,a,o,s,"static/css/897ea81fc2b1c9b9.css","static/chunks/pages/community/ballerina-tech-talk-a5625a4f9f43bc78.js"],"/community/events":[e,a,b,h,s,p,"static/chunks/pages/community/events-e04e82b1b888e119.js"],"/community/newsletter/[...slug]":[e,T,s,M,"static/chunks/pages/community/newsletter/[...slug]-f21b72d2e21cb97a.js"],"/community/resources":[e,a,b,h,s,"static/css/5eb2e70535b36f45.css","static/chunks/pages/community/resources-60a54a51c740eeac.js"],"/downloads":[e,s,"static/css/cf987da0d570abca.css","static/chunks/pages/downloads-249bee89245bfd09.js"],"/downloads/0.9.x-release-notes/[...slug]":[e,a,t,n,o,r,l,k,x,s,v,c,"static/chunks/pages/downloads/0.9.x-release-notes/[...slug]-f610ee62a69f7499.js"],"/downloads/1.0.x-release-notes/[...slug]":[e,a,t,n,o,r,l,k,x,s,v,c,"static/chunks/pages/downloads/1.0.x-release-notes/[...slug]-d9d4d29d3c87fc85.js"],"/downloads/1.1.x-release-notes/[...slug]":[e,a,t,n,o,r,l,k,x,s,v,c,"static/chunks/pages/downloads/1.1.x-release-notes/[...slug]-cbfc43b9dd61689a.js"],"/downloads/1.2.x-release-notes/[...slug]":[e,a,t,n,o,r,l,s,v,c,"static/chunks/pages/downloads/1.2.x-release-notes/[...slug]-feb2ae82ce246431.js"],"/downloads/archived":[e,a,o,s,p,"static/chunks/pages/downloads/archived-1d3d32636c50a43d.js"],"/downloads/installation-options":[i,e,t,n,r,d,U,s,u,p,"static/chunks/pages/downloads/installation-options-0755825736d6f9db.js"],"/downloads/swan-lake-release-notes/[...slug]":[e,a,t,n,o,r,l,s,v,c,"static/chunks/pages/downloads/swan-lake-release-notes/[...slug]-b09eea5f99f3dde4.js"],"/downloads/verify-ballerina-artifacts":[i,e,t,n,r,d,U,s,u,p,"static/chunks/pages/downloads/verify-ballerina-artifacts-adf128688f61080e.js"],"/hacktoberfest":[e,s,"static/css/cf2780ba7eb8d127.css","static/chunks/pages/hacktoberfest-f45be2e3d51fe73c.js"],"/learn":[e,s,"static/css/60a31c822b1aa0c2.css","static/chunks/pages/learn-ed9b4c0ba8437a72.js"],"/learn/by-example":[e,a,o,l,s,g,c,"static/chunks/pages/learn/by-example-a6dabff3f28cb069.js"],"/learn/by-example/[bbe]":[e,a,o,l,T,s,g,c,"static/chunks/pages/learn/by-example/[bbe]-af5519b0fa360a04.js"],"/learn/development-tutorials/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,m,c,"static/chunks/pages/learn/development-tutorials/[...slug]-06865f0e0f06038c.js"],"/learn/enterprise-integration-patterns":[w,e,s,y,"static/css/2244f805211a33e6.css","static/chunks/pages/learn/enterprise-integration-patterns-5a777567e4957a79.js"],"/learn/enterprise-integration-patterns/[pattern]":[i,e,t,k,"static/chunks/9316-e1b8d21350efa6f3.js",s,"static/css/ea7efca09c4f6305.css","static/chunks/pages/learn/enterprise-integration-patterns/[pattern]-86357eeb040bbe57.js"],"/learn/healthcare":[e,t,n,s,W,P,"static/chunks/pages/learn/healthcare-567b0213bca5ab14.js"],"/learn/integration/integration-tutorials":[w,e,s,y,G,"static/chunks/pages/learn/integration/integration-tutorials-156cb3fe11836900.js"],"/learn/integration/integration-tutorials/[slug]":[i,e,t,n,r,d,s,u,p,"static/chunks/pages/learn/integration/integration-tutorials/[slug]-5a9f0617dc3fd2b0.js"],"/learn/integration/pre-built-integrations":[w,e,s,y,G,"static/chunks/pages/learn/integration/pre-built-integrations-80787555b849dff9.js"],"/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity-bcc0d3dfbb13dd73.js"],"/learn/integration/pre-built-integrations/github-to-email-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/github-to-email-integration-84669154f6dd1eaf.js"],"/learn/integration/pre-built-integrations/gmail-to-salesforce-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/gmail-to-salesforce-integration-99b34bc7bc6e80b2.js"],"/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration-068a925c8dddc13a.js"],"/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration-14b3eb30318c494f.js"],"/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration-287a00eb502f9d66.js"],"/learn/integration/pre-built-integrations/kafka-to-salesforce-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/kafka-to-salesforce-integration-7868848346f29a00.js"],"/learn/integration/pre-built-integrations/mysql-to-salesforce-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/mysql-to-salesforce-integration-bed83166894296f3.js"],"/learn/integration/pre-built-integrations/news-api-to-email-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/news-api-to-email-integration-9f32dafa97fc0a48.js"],"/learn/integration/pre-built-integrations/salesforce-to-twilio-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/salesforce-to-twilio-integration-465bcfa823d4ea3c.js"],"/learn/integration/pre-built-integrations/shopify-to-outlook-integration":[i,e,a,b,h,f,s,p,"static/chunks/pages/learn/integration/pre-built-integrations/shopify-to-outlook-integration-c3d330cbdca9bc80.js"],"/learn/integration/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,m,c,"static/chunks/pages/learn/integration/[...slug]-bbeb59fa23bba3b7.js"],"/learn/integration-tools/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,m,c,"static/chunks/pages/learn/integration-tools/[...slug]-34a2e7039ff238be.js"],"/learn/references/ballerina-specifications":[i,e,a,t,n,o,r,l,d,s,u,g,m,c,"static/chunks/pages/learn/references/ballerina-specifications-f6e904c5b057d9db.js"],"/learn/resources/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,m,c,"static/chunks/pages/learn/resources/[...slug]-6928db13fb420ed5.js"],"/learn/vs-code-extension":[e,a,t,n,b,h,s,"static/css/5c19fcf755202ade.css","static/chunks/pages/learn/vs-code-extension-019ee71c3a64ff70.js"],"/learn/vs-code-extension/build-executables":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/build-executables-9ea68d16fd7b7675.js"],"/learn/vs-code-extension/configure-the-extension":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/configure-the-extension-8e2321867a53a809.js"],"/learn/vs-code-extension/debug-the-code/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/debug-the-code/[...slug]-6cf21f965212b9dc.js"],"/learn/vs-code-extension/deploy-with-wso2-choreo":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/deploy-with-wso2-choreo-ae50fb459d33a060.js"],"/learn/vs-code-extension/design-the-application/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/design-the-application/[...slug]-e8a08c693b5bf5a6.js"],"/learn/vs-code-extension/design-the-services/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/design-the-services/[...slug]-7a5ab5f5ddf0aa8e.js"],"/learn/vs-code-extension/get-started":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/get-started-576bfc51d2a9eeca.js"],"/learn/vs-code-extension/implement-the-code/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/implement-the-code/[...slug]-a654afe890d63d3e.js"],"/learn/vs-code-extension/license":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/license-6e3e9fa31cfe0668.js"],"/learn/vs-code-extension/notebooks":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/notebooks-a836e11b1e9ae50b.js"],"/learn/vs-code-extension/references/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/references/[...slug]-e007760b4fc56c81.js"],"/learn/vs-code-extension/release-notes/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/release-notes/[...slug]-b9f46cc19ca2b39a.js"],"/learn/vs-code-extension/run-a-program":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/run-a-program-12e47452a4ccce4d.js"],"/learn/vs-code-extension/test-the-code":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/test-the-code-d30cd4222bedad83.js"],"/learn/vs-code-extension/troubleshoot":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/troubleshoot-92242f4f75d36d0b.js"],"/learn/vs-code-extension/try-the-services/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/try-the-services/[...slug]-a0f67e6d4acfaea7.js"],"/learn/vs-code-extension/write-the-code/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,c,"static/chunks/pages/learn/vs-code-extension/write-the-code/[...slug]-4e2451563713ee70.js"],"/policies/[slug]":[i,e,t,n,r,d,s,u,p,"static/chunks/pages/policies/[slug]-878d585b5faa85fb.js"],"/spec/lang/draft":[e,"static/chunks/pages/spec/lang/draft-3e826f2667e74d96.js"],"/spec/[slug]":[e,t,n,"static/chunks/pages/spec/[slug]-d27fe4eb16ffd543.js"],"/usecases/ai":[e,a,t,n,b,h,s,"static/css/64df110820596619.css","static/chunks/pages/usecases/ai-3854e2753c341d2f.js"],"/usecases/b2b":[e,t,n,s,"static/css/2ebf9d6baf84c804.css","static/chunks/pages/usecases/b2b-d8e6c359c9b64a5e.js"],"/usecases/data-oriented-programming":[e,t,n,s,"static/css/76522d10d68fff14.css","static/chunks/pages/usecases/data-oriented-programming-b5cae15932c07ed9.js"],"/usecases/eda":[e,a,t,n,b,h,s,"static/css/c5ec23d33a222535.css","static/chunks/pages/usecases/eda-4f21a70750e4eece.js"],"/usecases/healthcare":[e,t,n,s,W,P,"static/chunks/pages/usecases/healthcare-6a6a1f459c1df09d.js"],"/usecases/integration":[e,t,n,s,"static/css/cb04a2bb7373c732.css","static/chunks/pages/usecases/integration-9fc25440efcd7911.js"],"/usecases/integration/ballerina-vs-apollo-for-graphql":[e,a,t,n,b,h,s,"static/css/8c1f2ee15c568d88.css","static/chunks/pages/usecases/integration/ballerina-vs-apollo-for-graphql-51a81802a8bff18d.js"],"/usecases/integration/ballerina-vs-java-for-data-oriented-programming":[e,a,t,n,b,h,s,"static/css/d933453da3a37990.css","static/chunks/pages/usecases/integration/ballerina-vs-java-for-data-oriented-programming-e4d76b1ffa4dc5ce.js"],"/usecases/microservices":[e,t,n,s,"static/css/a50d0b43c48751fe.css","static/chunks/pages/usecases/microservices-651ecb77366ebc0a.js"],"/why-ballerina/[...slug]":[i,e,a,t,n,o,r,l,d,s,u,g,m,c,"static/chunks/pages/why-ballerina/[...slug]-f684d7ca7c930100.js"],sortedPages:["/","/404","/_app","/_error","/case-studies/[slug]","/community","/community/active-proposals","/community/ballerina-newsletter","/community/ballerina-tech-talk","/community/events","/community/newsletter/[...slug]","/community/resources","/downloads","/downloads/0.9.x-release-notes/[...slug]","/downloads/1.0.x-release-notes/[...slug]","/downloads/1.1.x-release-notes/[...slug]","/downloads/1.2.x-release-notes/[...slug]","/downloads/archived","/downloads/installation-options","/downloads/swan-lake-release-notes/[...slug]","/downloads/verify-ballerina-artifacts","/hacktoberfest",R,"/learn/by-example","/learn/by-example/[bbe]","/learn/development-tutorials/[...slug]","/learn/enterprise-integration-patterns","/learn/enterprise-integration-patterns/[pattern]","/learn/healthcare",L,"/learn/integration/integration-tutorials/[slug]",q,A,S,D,C,E,O,I,B,N,F,z,"/learn/integration/[...slug]","/learn/integration-tools/[...slug]",_,"/learn/resources/[...slug]","/learn/vs-code-extension","/learn/vs-code-extension/build-executables","/learn/vs-code-extension/configure-the-extension","/learn/vs-code-extension/debug-the-code/[...slug]","/learn/vs-code-extension/deploy-with-wso2-choreo","/learn/vs-code-extension/design-the-application/[...slug]","/learn/vs-code-extension/design-the-services/[...slug]",j,"/learn/vs-code-extension/implement-the-code/[...slug]","/learn/vs-code-extension/license","/learn/vs-code-extension/notebooks","/learn/vs-code-extension/references/[...slug]","/learn/vs-code-extension/release-notes/[...slug]","/learn/vs-code-extension/run-a-program","/learn/vs-code-extension/test-the-code","/learn/vs-code-extension/troubleshoot","/learn/vs-code-extension/try-the-services/[...slug]","/learn/vs-code-extension/write-the-code/[...slug]","/policies/[slug]","/spec/lang/draft","/spec/[slug]","/usecases/ai","/usecases/b2b","/usecases/data-oriented-programming","/usecases/eda","/usecases/healthcare","/usecases/integration","/usecases/integration/ballerina-vs-apollo-for-graphql","/usecases/integration/ballerina-vs-java-for-data-oriented-programming","/usecases/microservices","/why-ballerina/[...slug]"]}}("static/chunks/9733-fbb4953a2fa6f36d.js","static/chunks/4564-48f98e5c795b6df7.js","static/chunks/2788-f448718f24cd41bf.js","static/chunks/8999-d460056eee862859.js","static/chunks/5530-3a0ee3d9119ba327.js","static/chunks/1bfc9850-521b3a596dcadac5.js","static/chunks/4862-e2437e8da187f366.js","static/chunks/2092-46b4be65607751ad.js","static/chunks/5607-3aea9a3f6aab5467.js","static/css/95db1c06d9f84932.css","static/chunks/3066-532e3a00a68674d9.js","static/chunks/5795-33d212dda376b7f1.js","static/chunks/7635-ee3000e211924800.js","static/css/ed928f4e0113510f.css","static/chunks/9645-1dbd6c674fad9b2f.js","static/chunks/1726-d958e891b50f9478.js","static/chunks/8623-91039dd08e163aa8.js","static/chunks/3394-dd9016c04a767893.js","static/chunks/9632-2b47547bd89b84a8.js","static/chunks/1722-03bbafc8fa1e1a19.js","/learn/vs-code-extension/get-started","static/chunks/3524-0d5c806cdf99d9cf.js","static/chunks/814c6784-111162b07dced70c.js","static/chunks/6020-c0223fdac3760897.js","/learn/references/ballerina-specifications","/learn","/learn/integration/pre-built-integrations","/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration","/learn/integration/pre-built-integrations/kafka-to-salesforce-integration","/learn/integration/pre-built-integrations/mysql-to-salesforce-integration","/learn/integration/pre-built-integrations/gmail-to-salesforce-integration","/learn/integration/pre-built-integrations/salesforce-to-twilio-integration","/learn/integration/pre-built-integrations/news-api-to-email-integration","/learn/integration/pre-built-integrations/github-to-email-integration","/learn/integration/pre-built-integrations/shopify-to-outlook-integration","/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration","/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration","/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity","/learn/integration/integration-tutorials","static/css/790da870dc874ef8.css","static/chunks/7856-6b9b8c6afb642797.js","static/chunks/6620-c6d6139e90f16885.js","static/chunks/6674-f3c21d6ef3fdabe8.js","static/css/3a0e16dc35ecd6b4.css","static/css/a865f6547ffd59ee.css"),self.__BUILD_MANIFEST_CB&&self.__BUILD_MANIFEST_CB();