import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../../common';
import { NotImplementedError } from '../../common';

@Injectable()
export class MockUseCase extends BaseUseCase {
  activate(input?: any): Promise<any> { throw new NotImplementedError(); }
}
