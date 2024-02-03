export default function personReducer(state, action) {
  console.log("action", action);
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
    case "DESELECT_PERSON":
      return {
        ...state,
        selectedUser: state.selectedUser.filter(
          (e) => e.id !== action.payload.id
        ),
      };
    case "SELECT_ALL_USERS":
      console.log("calling select user");
      return {
        ...state,
        isAllUserSelected: true,
        selectedUser: [...state.userList],
      };
    case "DESELECT_ALL_USERS":
      return {
        ...state,
        isAllUserSelected: false,
        selectedUser: [],
      };

    default:
      throw new Error("No action");
  }
}
