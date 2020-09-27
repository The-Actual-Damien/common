import { INestApplication, Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerConfigService {
  constructor(private readonly config: ConfigService) { }
  addSwagger(app: INestApplication, prefix: string = 'APP') {
    const options = new DocumentBuilder()
      .setTitle(this.config.get(`${prefix}_TITLE`))
      .setDescription(this.config.get(`${prefix}_DESCRIPTION`))
      .setVersion(this.config.get(`${prefix}_VERSION`))
      .build();

    const docs = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(this.config.get(`${prefix}_DOCS`), app, docs);
  }
}