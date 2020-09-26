import { NotImplementedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { MockUseCase } from './mock.use-case';

describe('MockUseCase', () => {
  let useCase: MockUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockUseCase],
    }).compile();

    useCase = module.get(MockUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should throw on activate', () => {
    expect(useCase.activate).toThrowError(NotImplementedException);
  });
});