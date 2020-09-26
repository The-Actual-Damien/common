import { Test, TestingModule } from '@nestjs/testing';
import { MockRepository } from './mock.repository';

import { NotImplementedError } from '../../common';

describe('MockRepository', () => {
  let repo: MockRepository<Error>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockRepository],
    }).compile();

    repo = module.get(MockRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should throw on find', () => {
    expect(repo.find).toThrowError(NotImplementedError);
  });

  it('should throw on findAndCount', () => {
    expect(repo.findAndCount).toThrowError(NotImplementedError);
  });

  it('should throw on findByIds', () => {
    expect(repo.findByIds).toThrowError(NotImplementedError);
  });

  it('should throw on findOne', () => {
    expect(repo.findOne).toThrowError(NotImplementedError);
  });

  it('should throw on findOneOrFail', () => {
    expect(repo.findOneOrFail).toThrowError(NotImplementedError);
  });

  it('should throw on save', () => {
    expect(repo.save).toThrowError(NotImplementedError);
  });

  it('should throw on insert', () => {
    expect(repo.insert).toThrowError(NotImplementedError);
  });

  it('should throw on delete', () => {
    expect(repo.delete).toThrowError(NotImplementedError);
  });

  it('should throw on count', () => {
    expect(repo.count).toThrowError(NotImplementedError);
  });

  it('should throw on query', () => {
    expect(repo.query).toThrowError(NotImplementedError);
  });

  it('should throw on recover', () => {
    expect(repo.recover).toThrowError(NotImplementedError);
  });
});
