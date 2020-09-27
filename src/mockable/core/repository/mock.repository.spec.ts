import { NotImplementedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MockRepository } from './mock.repository';

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
    expect(repo.find).toThrowError(NotImplementedException);
  });

  it('should throw on findAndCount', () => {
    expect(repo.findAndCount).toThrowError(NotImplementedException);
  });

  it('should throw on findByIds', () => {
    expect(repo.findByIds).toThrowError(NotImplementedException);
  });

  it('should throw on findOne', () => {
    expect(repo.findOne).toThrowError(NotImplementedException);
  });

  it('should throw on findOneOrFail', () => {
    expect(repo.findOneOrFail).toThrowError(NotImplementedException);
  });

  it('should throw on save', () => {
    expect(repo.save).toThrowError(NotImplementedException);
  });

  it('should throw on insert', () => {
    expect(repo.insert).toThrowError(NotImplementedException);
  });

  it('should throw on delete', () => {
    expect(repo.delete).toThrowError(NotImplementedException);
  });

  it('should throw on count', () => {
    expect(repo.count).toThrowError(NotImplementedException);
  });

  it('should throw on query', () => {
    expect(repo.query).toThrowError(NotImplementedException);
  });

  it('should throw on recover', () => {
    expect(repo.recover).toThrowError(NotImplementedException);
  });
});
