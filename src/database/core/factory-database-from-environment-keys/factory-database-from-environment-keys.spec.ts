import { ConfigService } from "@nestjs/config"
import { Test, TestingModule } from "@nestjs/testing";
import { MockConfigService } from "../../..";
import { factoryDatabaseFromEnvironmentKey } from "./factory-database-from-environment-keys"

describe('factoryDatabaseFromEnvironmentKey', () => {
  let config: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: ConfigService, useClass: MockConfigService }]
    }).compile();

    config = module.get(ConfigService)
  })

  it('should be defined', () => {
    expect(factoryDatabaseFromEnvironmentKey).toBeDefined();
  });

  it('should return an oracle database if Oracle type is provided', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'oracle');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'oracle');
    expect(actual.type).toBe('oracle');
  });

  it('should return connectString property when an oracle database type is provided', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'oracle');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'oracle');
    expect(actual).toHaveProperty('connectString');
  });

  it('should return username property when an oracle database type is provided', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'oracle');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'oracle');
    expect(actual).toHaveProperty('username');
  });

  it('should return autoLoadEntities property set to true when the database type is oracle', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'oracle');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'oracle');
    expect(actual.autoLoadEntities).toBe(true);
  });

  it('should return password property when an oracle database type is provided', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'oracle');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'oracle');
    expect(actual).toHaveProperty('password');
  });

  it('should return a mongodb database if mongodb type is provided', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'mongodb');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'mongodb');
    expect(actual.type).toBe('mongodb');
  });

  it('should return the url property when the database type os mongodb', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'mongodb');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'mongodb');
    expect(actual).toHaveProperty('url');
  });

  it('should return the useUnifiedTopology set to true when database type is mongodb', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'mongodb');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'mongodb');
    expect(actual.useUnifiedTopology).toBe(true);
  });

  it('should return the useNewUrlParser property when an oracle database type is provided', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'mongodb');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'mongodb');
    expect(actual).toHaveProperty('useNewUrlParser');
  });

  it('should return the useNewUrlParser set to true when the database is mongodb', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'mongodb');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'mongodb');
    expect(actual.useNewUrlParser).toBe(true);
  });

  it('should return autoLoadEntities property set to true when the database type is mongodb', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'mongodb');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'mongodb');
    expect(actual.autoLoadEntities).toBe(true);
  });

  it('should return a postgres database if the type is postgres', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'postgres');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'postgres');
    expect(actual.type).toBe('postgres');
  });

  it('should return a url property when the database type is postgres', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'postgres');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'postgres');
    expect(actual).toHaveProperty('url');
  });

  it('should return autoLoadEntities property set to true when the database type is postgres', () => {
    jest.spyOn(config, 'get').mockImplementation((key: string): string => 'postgres');
    const actual = factoryDatabaseFromEnvironmentKey(config, 'postgres');
    expect(actual.autoLoadEntities).toBe(true);
  });
});
