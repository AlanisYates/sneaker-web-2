import { gql } from '@apollo/client';

export const GET_MEMBER_BY_ID = gql`
  query MemberById($memberByIdId: ID!) {
    memberById(id: $memberByIdId) {
      id
      firstName
      lastName
    }
  }
`;
