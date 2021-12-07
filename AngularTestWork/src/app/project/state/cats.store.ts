import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { CATS } from './cats.model';

export interface CatsState extends EntityState<CATS> {}

const createInitialState = {};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'cats' })
export class CatsStore extends EntityStore<CatsState> {
  constructor() {
    super(createInitialState);
  }
}
