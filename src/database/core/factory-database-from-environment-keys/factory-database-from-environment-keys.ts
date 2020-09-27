import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const factoryPostgresConfiguration =
  (config: ConfigService, key: string): TypeOrmModuleOptions => ({
    type: 'postgres',
    url: config.get(`${key}_URL`),
    synchronize: config.get(`${key}_SYNCHRONIZE`) === 'true',
    autoLoadEntities: true
  })

const factoryMongoConfiguration =
  (config: ConfigService, key: string): TypeOrmModuleOptions => ({
    type: 'mongodb',
    url: config.get(`${key}_URL`),
    synchronize: config.get(`${key}_SYNC`) === 'true' && config.get('NODE_ENV') === 'development',
    autoLoadEntities: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

const factoryOracleConfiguration =
  (config: ConfigService, key: string): TypeOrmModuleOptions => ({
    type: 'oracle',
    connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${config.get(`${key}_HOST`)})(PORT=${config.get(`${key}_PORT`)}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${config.get(`${key}_DATABASE`)})))`,
    username: config.get(`${key}_USERNAME`),
    password: config.get(`${key}_PASSWORD`),
    synchronize: config.get(`${key}_SYNC`) === 'true' && config.get('NODE_ENV') === 'development',
    autoLoadEntities: true
  })

const factories = {
  postgres: factoryPostgresConfiguration,
  mongodb: factoryMongoConfiguration,
  oracle: factoryOracleConfiguration
}

export const factoryDatabaseFromEnvironmentKey =
  (config: ConfigService, key: string) => {
    const dbType = config.get(`${key}_TYPE`);
    return factories[dbType](config, key);
  }