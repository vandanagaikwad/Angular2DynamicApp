import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'searchfilter',
    pure: false
})
@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
    
    
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(Object.keys(args).length !== 0){
        var itemArr = [];
        
        	items.filter(item => {
        		var arr = Object.keys(item.fields);

        		var index = arr.indexOf('primaryId');
            	arr.splice(index, 1);
        		for(var i=0; i<arr.length; i++){

        			if(item.fields[arr[i]].toLowerCase().indexOf(args['name']) !== -1){
        				itemArr.push(item);
        				break;
        			}
        		}
        		
        		//item.fields.name.indexOf(args.name) !== -1;
        	});
        	return itemArr;
        } else {
        	return items;
        }
        
    }
}