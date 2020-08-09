import * as mongoose from 'mongoose';

export const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true},
  noOfChallengesSolved: { type: Number, required: true},
  expertiseLevel: { type: Number, required: true},
  expertIn: { type: Object, required: true},
  totalVotes: { type: Number, required: true},
});
