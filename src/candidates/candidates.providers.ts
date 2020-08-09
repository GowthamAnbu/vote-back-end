import { Mongoose } from 'mongoose';
import { CandidateSchema } from './schemas/candidate.schema';

export const candidatesProviders = [
  {
    provide: 'CANDIDATE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Candidate', CandidateSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
