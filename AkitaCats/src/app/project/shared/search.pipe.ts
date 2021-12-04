import { CATS } from '../state/cats.model';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPosts',
})
export class SearchPipe implements PipeTransform {
  transform(cats: CATS[], search = ''): CATS[] {
    if (!search.trim()) {
      return cats;
    }
    return cats.filter((cats) => {
      return cats.info.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
