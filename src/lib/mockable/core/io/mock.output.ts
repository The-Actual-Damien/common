import { BaseOutput } from "../../../common";

export class MockOutput extends BaseOutput {
  constructor(errs?: Array<string>) {
    super(errs);
  }
}