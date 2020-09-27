import { Test, TestingModule } from '@nestjs/testing';
import { MockConfigService } from './mock-config.service';

describe('MockConfigService', () => {
  let instance: MockConfigService;

  beforeEach(() => {
    instance = new MockConfigService();
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it('should return an error on get invoke', () => {
    expect(instance.get).toThrowError('Mock Error');
  });
});