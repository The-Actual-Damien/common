import { Injectable, NotImplementedException } from '@nestjs/common';
import { BaseUseCase } from '../../common';
import { MockInput } from './io/mock.input';
import { MockOutput } from './io/mock.output';

@Injectable()
export class MockUseCase extends BaseUseCase<MockInput, MockOutput> {
  async activate(input: MockInput): Promise<MockOutput> {
    const err = new NotImplementedException();
    return Promise.reject(new MockOutput([err.message]))
  }
}