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
    case "DESELECT_PERSON":
      return {
        ...state,
        selectedUser: state.selectedUser.filter(
          (e) => e.id !== action.payload.id
        ),
      };
    case "SELECT_ALL_USERS":
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

    case "UPDATE_FORM_FIELD":
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };

    default:
      throw new Error("No action");
  }
}
