/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteEmptab = /* GraphQL */ `
  mutation DeleteEmptab(
    $input: DeleteEmptabInput!
    $condition: ModelEmptabConditionInput
  ) {
    deleteEmptab(input: $input, condition: $condition) {
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
export const deleteLeaveRequest = /* GraphQL */ `
  mutation DeleteLeaveRequest(
    $input: DeleteLeaveRequestInput!
    $condition: ModelLeaveRequestConditionInput
  ) {
    deleteLeaveRequest(input: $input, condition: $condition) {
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
export const createEmptab = /* GraphQL */ `
  mutation CreateEmptab(
    $input: CreateEmptabInput!
    $condition: ModelEmptabConditionInput
  ) {
    createEmptab(input: $input, condition: $condition) {
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
export const updateEmptab = /* GraphQL */ `
  mutation UpdateEmptab(
    $input: UpdateEmptabInput!
    $condition: ModelEmptabConditionInput
  ) {
    updateEmptab(input: $input, condition: $condition) {
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
export const createLeaveRequest = /* GraphQL */ `
  mutation CreateLeaveRequest(
    $input: CreateLeaveRequestInput!
    $condition: ModelLeaveRequestConditionInput
  ) {
    createLeaveRequest(input: $input, condition: $condition) {
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
export const updateLeaveRequest = /* GraphQL */ `
  mutation UpdateLeaveRequest(
    $input: UpdateLeaveRequestInput!
    $condition: ModelLeaveRequestConditionInput
  ) {
    updateLeaveRequest(input: $input, condition: $condition) {
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
