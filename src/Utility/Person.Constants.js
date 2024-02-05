const PersonConstants = {
  availableEmployees: "Available Employees",

  // Actions
  selectPerson: "SELECT_PERSON",
  deSelectPerson: "DESELECT_PERSON",
  selectAllUser: "SELECT_ALL_USERS",
  deselectAllUser: "DESELECT_ALL_USERS",

  // API Endpoints

  fetchURL: "https://jsonplaceholder.typicode.com/users",
};

const availableMeetingRooms = [
  {
    id: 0,
    name: "No Room",
  },
  {
    id: 1,
    name: "Elon",
  },
  {
    id: 2,
    name: "Juck",
  },
  {
    id: 3,
    name: "Tesla",
  },
  {
    id: 4,
    name: "SpaceX",
  },
  {
    id: 5,
    name: "Twitter",
  },
];

export { PersonConstants, availableMeetingRooms };
