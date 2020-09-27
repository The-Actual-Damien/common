import { ConfigService } from "@nestjs/config"
import { Test, TestingModule } from "@nestjs/testing";
import { MockConfigService } from "../../..";
import { SwaggerConfigService } from "./swagger.service";

describe('SwaggerService', () => {
  let config: ConfigService;
  let service: SwaggerConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: ConfigService, useClass: MockConfigService },
        SwaggerConfigService
      ]
    }).compile();

    config = module.get(ConfigService);
    service = module.get(SwaggerConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});