import { gql } from '@apollo/client';

const navigations = gql`
  query Menus {
    menus(first: 10) {
      edges {
        node {
          name
          items {
            id
            name
          }
        }
      }
    }
  }
`;

export default {
  navigations,
};
