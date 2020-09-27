import { Module } from '@nestjs/common';
import { SwaggerConfigService } from './core/swagger-service/swagger.service';

@Module({
  exports: [SwaggerConfigService],
  providers: [SwaggerConfigService],
})
export class SwaggerConfigModule {}
