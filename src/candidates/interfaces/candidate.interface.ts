import { Document } from 'mongoose';

export interface Candidate extends Document {
  id?: string;
  name: string;
  noOfChallengesSolved: number;
  expertiseLevel: number;
  expertIn: any;
  totalVotes: number;
}
