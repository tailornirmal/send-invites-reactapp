export default function InvitessReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FORM_FIELD": {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    case "SUBMIT":
    case "RESET":
    default:
      throw Error;
  }
}
