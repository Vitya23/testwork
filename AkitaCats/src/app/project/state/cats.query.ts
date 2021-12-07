import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CatsState, CatsStore } from './cats.store';

@Injectable({ providedIn: 'root' })
export class CatsQuery extends QueryEntity<CatsState> {
  selectAll$ = this.selectAll();

  constructor(protected store: CatsStore) {
    super(store);
  }
}
