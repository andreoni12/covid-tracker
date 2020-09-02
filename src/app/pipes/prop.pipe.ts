import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';

@Pipe({
  name: 'prop'
})
export class PropPipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) { }

  transform(value: any): any {
    let transformedValue: any;

    if (value) {
      if (typeof (value) === 'number') {
        transformedValue = this.decimalPipe.transform(Number(value));
      } else if (typeof (value === 'string') && !value.includes('000Z')) {
        transformedValue = value;
      } else {
        transformedValue = this.datePipe.transform(value, 'dd/MM/yyyy');
      }
      return transformedValue;
    }
  }
}
