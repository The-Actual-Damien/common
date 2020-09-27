import { Module } from '@nestjs/common';
import { MockRepository } from '.';
import { MockConfigService } from './core/config-service/mock-config.service';
import { MockUseCase } from './core/use-case/mock.use-case';

@Module({
  providers: [MockRepository, MockUseCase, MockConfigService],
  exports: [MockRepository, MockUseCase, MockConfigService],
})
export class MockableModule {}
