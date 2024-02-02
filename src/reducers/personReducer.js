export default function personReducer(state, action) {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case "SELECT_PERSON":
      return {
        ...state,
        selectedUser: [...state.selectedUser, action.payload],
      };

    default:
      return state;
  }
}
