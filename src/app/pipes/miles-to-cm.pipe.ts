import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthConversion'
})
export class MilesToCmPipe implements PipeTransform {

  transform(value: any, targetUnits:string): any {
    let input = parseFloat(value);
    
    if(!input){
      return "";
    }

    switch(targetUnits){
      case "km": return input * 1.60934;
      case "m" : return input * 1000 * 1.60934;
      case "cm": return input * 1000000 * 1.60934;
      default: throw new Error("Target unit not supported");
    }
  }

}
