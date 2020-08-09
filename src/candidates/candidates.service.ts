import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { Candidate } from './interfaces/candidate.interface';

@Injectable()
export class CandidatesService {
  constructor(@Inject('CANDIDATE_MODEL') private readonly candidateModel: Model<Candidate>) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const createdCandidate = new this.candidateModel(createCandidateDto);
    return createdCandidate.save();
  }

  async findAll(): Promise<Candidate[]> {
    return this.candidateModel.find().exec();
  }

}
