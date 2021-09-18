import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from "@apollo/client";
import { loofahApiUrl, awsApiKey } from "../config/config";


const httpLink = new HttpLink({ uri: `${loofahApiUrl}` });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "x-api-key": awsApiKey
    }
  }));

  return forward(operation);
});

const AwsApiClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink)
  });

export default AwsApiClient;