
import { gql } from 'graphql-tag';

const typeDefs = gql`
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumnail: String
        lenght: Int
        modulesCount: Int
    }
    type Author {
        id: ID!
        name: String!
        photo: String
      }
      type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
      }
`;

export default typeDefs