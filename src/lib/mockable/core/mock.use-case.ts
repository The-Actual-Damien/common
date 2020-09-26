import { Injectable, NotImplementedException } from '@nestjs/common';
import { BaseUseCase } from '../../common';

@Injectable()
export class MockUseCase extends BaseUseCase {
  activate(input?: any): Promise<any> { throw new NotImplementedException(); }
}
