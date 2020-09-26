import { NotImplementedException } from "@nestjs/common";

export abstract class BaseUseCase {
  async activate(): Promise<any> { return await Promise.reject(new NotImplementedException()) }
}