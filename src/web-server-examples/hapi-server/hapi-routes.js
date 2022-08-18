const users = [
  {
    id: 1,
    name: "Aritra",
  },
  {
    id: 2,
    name: "Joy",
  },
];

export const usersRoute = {
  method: "GET",
  path: "/users",
  handler: async (req, h) => {
    return users;
  },
};

export const firstUser = {
  method: "GET",
  path: "/firstUser",
  handler: async (req, h) => {
    return users.filter((x) => x.id === 1);
  },
};
