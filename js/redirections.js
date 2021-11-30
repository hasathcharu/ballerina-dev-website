let redirections = {
    // "/SOURCE (BROKEN) URL without trailing slash":"/DESTINATION (CORRECT) URL with slash"

    // Learn pages not available

    "/1.0/learn/keeping-ballerina-up-to-date":"/page-not-available.html",
    "/1.1/learn/calling-java-code-from-ballerina":"/page-not-available.html",
    "/1.0/learn/calling-java-code-from-ballerina":"/page-not-available.html",
    "/1.1/learn/deployment/aws-lambda/":"/page-not-available.html",
    "/1.0/learn/deployment/aws-lambda/":"/page-not-available.html",
    "/1.1/learn/deployment/azure-functions/":"/page-not-available.html",
    "/1.0/learn/deployment/azure-functions/":"/page-not-available.html",
    "/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/testing-quick-start":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/writing-tests":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/mocking":"/page-not-available.html",
    "/1.1/learn/testing-ballerina-code/executing-tests":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/testing-quick-start":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/writing-tests":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/mocking":"/page-not-available.html",
    "/1.0/learn/testing-ballerina-code/executing-tests":"/page-not-available.html",
    "/1.2/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/1.1/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/1.0/learn/structuring-ballerina-code/working-with-ballerina-modules/":"/page-not-available",
    "/learn/extending-with-compiler-extensions/":"/page-not-available.html",
    "/1.0/learn/how-to-keep-ballerina-up-to-date/":"/page-not-available.html",
    "/1.2/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.1/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/1.0/learn/deployment/code-to-cloud/":"/page-not-available.html",
    "/learn/user-guide/network-communication/http/http-clients/":"/learn/by-example/",
    "/learn/user-guide/network-communication/http/http-services/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/defining-the-service-interface/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/implementing-grpc-services-and-clients/implementing-grpc-services/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/implementing-grpc-services-and-clients/implementing-grpc-clients/":"/learn/by-example/",
    "/learn/user-guide/network-communication/grpc/performing-grpc-streaming/":"/learn/by-example/",
    "/learn/user-guide/network-communication/websocket/":"/learn/by-example/",
    "/learn/user-guide/network-communication/graphql/":"/learn/by-example/",
    "/learn/user-guide/data-and-events-processing/using-language-integrated-queries/":"/learn/by-example/",
    "/learn/user-guide/security/http-listener-authentication-and-authorization/":"/learn/by-example/",
    "/learn/user-guide/security/http-client-authentication/":"/learn/by-example/",
    "/learn/extending-with-compiler-extensions/":"/learn/by-example/",
    "/learn/tooling-guide/ballerina-shell/":"/learn/by-example/",
    "/learn/cli-documentation/update-tool/":"/learn/by-example/",
    "/learn/cli-documentation/openapi/":"/learn/by-example/",
    "/1.2/learn/ballerina-shell/":"/1.2/page-not-available.html",
    "/1.2/learn/language-walkthrough/":"/1.2/page-not-available.html",
    "/1.2/learn/visual-studio-code-extension/vs-code-commands/":"/1.2/page-not-available.html",
    "/1.2/learn/visual-studio-code-extension/configurations/":"/1.2/page-not-available.html",
    "/1.2/learn/why-ballerina/cloud-native/":"/1.2/page-not-available.html",
    "/1.2/learn/why-ballerina/flexibly-typed/":"/1.2/page-not-available.html",
    "/1.2/learn/why-ballerina/data-oriented/":"/1.2/page-not-available.html",
    "/1.2/learn/why-ballerina/graphical/":"/1.2/page-not-available.html",
    "/1.2/learn/why-ballerina/concurrent/":"/1.2/page-not-available.html",
    "/1.2/learn/why-ballerina/reliable-maintainable/":"/1.2/page-not-available.html",
    "/1.2/learn/testing-ballerina-code/testing-services-and-clients/":"/1.2/page-not-available.html",
    "/1.2/learn/making-ballerina-programs-configurable/defining-configurable-variables/":"/1.2/page-not-available.html",
    "/1.2/learn/making-ballerina-programs-configurable/providing-values-to-configurable-variables/":"/1.2/page-not-available.html",
    "/1.2/learn/making-ballerina-programs-configurable/trying-out-configurability":"/1.2/page-not-available.html",
    "/1.2/learn/observing-ballerina-programs/observing-your-application-with-choreo/":"/1.2/page-not-available.html",
    "/1.2/learn/running-ballerina-programs-in-the-cloud/code-to-cloud-deployment/":"/1.2/page-not-available.html",
    "/1.2/learn/running-ballerina-programs-in-the-cloud/code-to-cloud-samples/":"/1.2/page-not-available.html",
    "/1.2/learn/managing-dependencies/":"/1.2/page-not-available.html",
    "/1.2/learn/publishing-packages-to-ballerina-central/":"/1.2/page-not-available.html",
    "/1.2/learn/language-introduction/":"/1.2/page-not-available.html",

    // BBEs not available.
    "/1.1/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.0/learn/by-example/jdbc-streaming-big-dataset.html":"/page-not-available.html",
    "/1.1/learn/by-example/knative-deployment.html": "/page-not-available.html",
    "/1.0/learn/by-example/knative-deployment.html": "/page-not-available.html",
    "/1.1/learn/by-example/azure-functions-deployment.html": "/page-not-available.html",
    "/1.0/learn/by-example/azure-functions-deployment": "/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/azure.functions/index.html": "/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/azure.functions/index.html": "/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/knative/index.html": "/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/knative/index.html": "/page-not-available.html",
    "/learn/by-example/documentation.html":"/1.2/learn/by-example/basic-documentation.html",
    "/1.2/learn/by-example/documentation.html":"/1.2/learn/by-example/basic-documentation.html",
    "/1.2/learn/ballerina-streaming-reference/":"/1.2/learn/by-example/streams",
    "/learn/ballerina-streaming-reference/":"/learn/by-example/streams",
    "/1.1/learn/by-example/aws-lambda-deployment.html": "/1.1/learn/by-example/awslambda-deployment.html",
    "/1.0/learn/by-example/aws-lambda-deployment.html": "/1.0/learn/by-example/awslambda-deployment.html",
    "/1.2/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.1/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.0/learn/by-example/object-final-fields.html":"/page-not-available.html",
    "/1.2/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.1/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.0/learn/by-example/isolated-functions.html":"/page-not-available.html",
    "/1.2/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.1/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.0/learn/by-example/error-handling-in-single-place.html":"/page-not-available.html",
    "/1.2/learn/by-example/fail.html":"/page-not-available.html",
    "/1.1/learn/by-example/fail.html":"/page-not-available.html",
    "/1.0/learn/by-example/fail.html":"/page-not-available.html",
    "/learn/by-example/xa-transactions.html":"/page-not-available.html",
    "/learn/by-example/local-transactions-with-participants.html":"/page-not-available.html",
    "/learn/by-example/transactions-distributed.html":"/page-not-available.html",
    "/1.2/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.1/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.0/learn/by-example/readonly-objects.html":"/page-not-available.html",
    "/1.2/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.1/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/1.0/learn/by-example/websocket-cookie.html":"/page-not-available.html",
    "/learn/by-example/tracing.html":"/page-not-available.html",
    "/learn/by-example/counter-metrics.html":"/page-not-available.html",
    "/learn/by-example/gauge-metrics.html":"/page-not-available.html",
    "learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/1.1/learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/1.0/learn/by-example/http-client-data-binding.html":"/page-not-available.html",
    "/learn/by-example/http-filters.html":"/page-not-available",

    // BBE Updates

    "/learn/by-example/objects.html":"/learn/by-example/class-definition.html",
    "/learn/by-example/abstract-objects.html":"/learn/by-example/object-type.html",
    "/learn/by-example/anonymous-objects.html":"/learn/by-example/object-constructor-expression.html",
    "/learn/by-example/readonly-objects-and-fields.html":"/learn/by-example/readonly-objects.html",
    "/1.2/learn/by-example/introduction/":"/1.2/learn/by-example/",

    // API Docs not available

    "/learn/api-docs/ballerina/*/objects/*":"/learn/api-docs/ballerina/*/classes/*",
    "/1.2/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/1.1/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",
    "/1.0/learn/api-docs/ballerina/ftp/index.html":"/page-not-available.html",



}
