// Person Related Actions

function setUsers(dispatch, payload) {
  dispatch({
    type: "SET_USERS",
    payload: payload,
  });
}

function selectUser() {}

function deselectUser() {}

function selectAllUsers() {}

export { setUsers, selectUser, deselectUser, selectAllUsers };
