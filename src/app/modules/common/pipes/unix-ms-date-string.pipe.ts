import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixMsDateString'
})
export class UnixMsDateStringPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const date = new Date(value * 1000);

    return date.toDateString();
  }

}
