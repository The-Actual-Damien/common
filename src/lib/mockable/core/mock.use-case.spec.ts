import { NotImplementedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MockInput } from './io/mock.input';
import { MockOutput } from './io/mock.output';

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

  it('should reject on activate', async () => {
    await useCase.activate(new MockInput()).catch(err => {
      expect(err).toBeDefined()
    })
  });

  it('should reject with a MockOutput object', async () => {
    await useCase.activate(new MockInput()).catch(err => {
      expect(err).toBeInstanceOf(MockOutput)
    })
  });
});