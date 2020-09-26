import { Injectable } from '@nestjs/common';
import { NotImplementedError } from '../../common';

@Injectable()
export class MockRepository<T> {
  find(obj?: any): Promise<T> { throw new NotImplementedError(); }
  findAndCount(obj?: any): Promise<T> { throw new NotImplementedError(); }
  findByIds(obj?: any): Promise<T> { throw new NotImplementedError(); }
  findOne(obj?: any): Promise<T> { throw new NotImplementedError(); }
  findOneOrFail(obj?: any): Promise<T> { throw new NotImplementedError(); }
  insert(obj?: any): Promise<T> { throw new NotImplementedError(); }
  query(obj?: any): Promise<T> { throw new NotImplementedError(); }
  delete(obj?: any): Promise<T> { throw new NotImplementedError(); }
  count(obj?: any): Promise<T> { throw new NotImplementedError(); }
  recover(obj?: any): Promise<T> { throw new NotImplementedError(); }
  save(obj?: any): Promise<T> { throw new NotImplementedError(); }
}
