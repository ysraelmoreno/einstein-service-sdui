import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      mongoose.connect('mongodb://root:example@localhost:27017', {
        dbName: 'content',
        authMechanism: 'DEFAULT',
      }),
  },
];
