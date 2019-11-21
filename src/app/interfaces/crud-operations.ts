import { Observable } from 'rxjs';

export interface CrudOperations<T,ID> {
  save(register: T): Observable<T>;
  update(id: ID, register: T): Observable<T>;
  findOne(id: ID): Observable<T>;
  findAll(): Observable<T[]>;
  delete(id: ID): Observable<any>;
}
