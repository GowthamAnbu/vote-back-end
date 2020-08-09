import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidatesService } from './candidates.service';
import { Candidate } from './interfaces/candidate.interface';
import { get } from 'http';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post('/create')
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    this.candidatesService.create(createCandidateDto);
  }

  @Get('get')
  async findAll(): Promise<Candidate[]> {
    return this.candidatesService.findAll();
  }

}
