import { gql } from '@apollo/client';

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