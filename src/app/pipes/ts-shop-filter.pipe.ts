import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tsShopFilter'
})
export class TsShopFilterPipe implements PipeTransform {

  transform(array: any[], filters?: any): any[] {
    if (!filters || Object.keys(filters).length === 0) {
      return array;
    }
    if (Object.values(filters).filter((value) => value).length === 0) {
      return array;
    }
    return array.filter(elem => {
      let corresponds: boolean = true;
      for (const filter in filters) {
        corresponds = corresponds && String(elem[filter]).indexOf(filters[filter]) !== -1;
      }
      return corresponds;
    })
  }

}
