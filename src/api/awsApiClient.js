import { ApolloClient, InMemoryCache } from "@apollo/client";
import { loofahApiUrl, awsApiKey } from "../config/config";

// Documentation on creating Apollo client with headers:
// https://www.apollographql.com/docs/react/networking/basic-http-networking/#customizing-request-headers
const AwsApiClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `${loofahApiUrl}`,
    headers: {
      "x-api-key": awsApiKey
    }
  });

export default AwsApiClient;