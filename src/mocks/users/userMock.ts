export const userMock = {
  id: 1,
  name: 'Bruno Futema',
  email: 'bruno.futema@devstream.com.br',
  birthDate: new Date(1996, 12, 28),
  profile: {
    id: 1,
    name: 'Administrador',
    alias: 'SUPER_ADMIN',
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  projects: [
    {
      id: 1,
      name: 'Devstream',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    },
    {
      id: 2,
      name: 'Leads Center',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    },
  ],
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};
