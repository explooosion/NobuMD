import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charactorSearch'
})
export class CharactorSearchPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.group.indexOf(filter) !== -1);
  }

}
