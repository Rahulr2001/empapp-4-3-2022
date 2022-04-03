/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmptab = /* GraphQL */ `
  query GetEmptab($id: ID!) {
    getEmptab(id: $id) {
      id
      name
      email
      age
      address
      state
      city
      phone
      dob
      country
      leave {
        items {
          status
          leavename
          leavedate
          leavenote
          leavedays
          id
          createdAt
          updatedAt
          emptabLeaveId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmptabs = /* GraphQL */ `
  query ListEmptabs(
    $filter: ModelEmptabFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmptabs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        age
        address
        state
        city
        phone
        dob
        country
        leave {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeaveRequest = /* GraphQL */ `
  query GetLeaveRequest($id: ID!) {
    getLeaveRequest(id: $id) {
      status
      leavename
      leavedate
      leavenote
      leavedays
      id
      createdAt
      updatedAt
      emptabLeaveId
    }
  }
`;
export const listLeaveRequests = /* GraphQL */ `
  query ListLeaveRequests(
    $filter: ModelLeaveRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaveRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        status
        leavename
        leavedate
        leavenote
        leavedays
        id
        createdAt
        updatedAt
        emptabLeaveId
      }
      nextToken
    }
  }
`;
