import { Module } from '@nestjs/common';
import { MockRepository } from '.';

@Module({
  providers: [MockRepository],
  exports: [MockRepository],
})
export class MockableModule { }
