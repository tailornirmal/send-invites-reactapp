export default function personReducer(state, action) {
  switch (action.type) {
    case "SELECT_PERSON":
      return [
        ...state,
        {
          userId: action.payload,
          isPersonSelected: true,
        },
      ];
    default:
      throw Error("Unknown action: " + action.type);
  }
}
