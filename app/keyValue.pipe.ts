
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'keys'})
export class ToKeyValueListPipe implements PipeTransform {
  transform(value, args:string[]) : any {
  
    let keys = [];
	for (let key in value.fields) {
    
    	if(key !== 'primaryId'){
    		keys.push({key: key, value: value.fields[key]});
    	}
      
    }
    
    return keys;
  }
}