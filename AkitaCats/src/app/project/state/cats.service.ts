import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CATS, createCat } from './cats.model';
import { CatsQuery } from './cats.query';
import { CatsStore } from './cats.store';

@Injectable({providedIn:'root'})
export class CatsService{
    constructor(private catsStore:CatsStore,private catsQuery:CatsQuery){}
    
    

   

    getAll(){
    return this.catsQuery.selectAll$
     
    }
    getById(a){
        return this.catsQuery.selectEntity(a)
      }

    add(cats){
        const cat = createCat(cats)
        this.catsStore.add(cat)
    }
    remove(id){
        this.catsStore.remove(id)
    }
    changeLike({id,like}:CATS){
        this.catsStore.update(id,{like})
        
    }
    update(id,cats){
        this.catsStore.update(id, { info: cats});
    }

}