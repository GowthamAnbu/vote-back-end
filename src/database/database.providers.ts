import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://temp-user:EQZAlsYlhJmKEodc@cluster0.ucdfb.mongodb.net/cats?retryWrites=true&w=majority'),
  },
];
