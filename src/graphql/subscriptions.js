/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmptab = /* GraphQL */ `
  subscription OnCreateEmptab {
    onCreateEmptab {
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
export const onUpdateEmptab = /* GraphQL */ `
  subscription OnUpdateEmptab {
    onUpdateEmptab {
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
export const onDeleteEmptab = /* GraphQL */ `
  subscription OnDeleteEmptab {
    onDeleteEmptab {
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
export const onCreateLeaveRequest = /* GraphQL */ `
  subscription OnCreateLeaveRequest {
    onCreateLeaveRequest {
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
export const onUpdateLeaveRequest = /* GraphQL */ `
  subscription OnUpdateLeaveRequest {
    onUpdateLeaveRequest {
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
export const onDeleteLeaveRequest = /* GraphQL */ `
  subscription OnDeleteLeaveRequest {
    onDeleteLeaveRequest {
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
