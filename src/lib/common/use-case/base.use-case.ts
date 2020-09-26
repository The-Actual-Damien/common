import { Injectable } from "@nestjs/common";
import { NotImplementedError } from "../error/not-implemented.error";

@Injectable()
export class BaseUseCase {
  async activate(): Promise<any> {
    return await Promise.reject(new NotImplementedError());
  }
}