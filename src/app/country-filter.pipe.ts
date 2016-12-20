import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: [{country:string}], country: string): any {
    if (value.length === 0) {
      return value;
    }
    let result = []
    for (let data of value) {
      if (data.country === country) {
        result.push(data);
      }
    }
    return result;
  }

}
