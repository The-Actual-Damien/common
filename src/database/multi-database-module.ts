import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { factoryDatabaseFromEnvironmentKey } from "./core/factory-database-from-environment-keys/factory-database-from-environment-keys";

@Module({})
export class MultiDatabaseTypeOrmModule {
  static fromEnvironmentKeys(keys: Array<string>): Array<TypeOrmModule> | TypeOrmModule {
    const modules = keys.map(key => TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) =>
        factoryDatabaseFromEnvironmentKey(config, key),
      inject: [ConfigService],
      name: keys.length > 1 ? `${key.toLocaleLowerCase()}` : undefined
    }));

    return modules.length > 1 ? modules[0] : modules
  }
}