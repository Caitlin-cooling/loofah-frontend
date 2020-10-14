import { gql } from 'apollo-boost';

export const GET_CRAFTS_QUERY = gql`
  query GetCrafts {
    crafts {
        id
        title
        description
        leads
        slackChannels
        devServicesPage
    }
  }
`;