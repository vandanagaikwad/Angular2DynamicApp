import { Injectable, EventEmitter } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";
import { Nav } from './nav';

@Injectable()
export class MenuItemsService {
	
	constructor(private http:Http) {
		
	}
	
	//private menuItems: Array<any> = [];
	public sharedObj: any = {};

	getMenus(): Observable<any>  {
		
		let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

		return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetDynamicMenu')
			.map(this.extractData)
	      	.catch(this.handleError);
	}

	  private extractData(res: Response) {
	    let body = res.json();
	    return body || [ ];
	  }

	private handleError (error: Response | any) {
	    // In a real world app, we might use a remote logging infrastructure
	    let errMsg: string;
	    if (error instanceof Response) {
	      const body = error.json() || '';
	      const err = body.error || JSON.stringify(body);
	      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    return Observable.throw(errMsg);
	}


	getDynamicForms(id: Object): Observable<any>  {
		
	   return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetFormContent?tableId='+id)
			.map(this.extractFormData)
	      	.catch(this.handleError);
	}

	  private extractFormData(res: Response) {
	    let body = res.json();
	    return body || { };
	  }

	getOrganizations(name: Object): Observable<any>{
		//return this.http.get('http://ccrws.evello.net/api/table/organisation')
		return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetViewData?tableName='+name)
			.map(this.extractFormData)
	      	.catch(this.handleError);
	}

	getDetails(obj: Object): Observable<any>{

		//return this.http.get('http://ccrws.evello.net/api/table/organisation')
		return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetTableData?tableName='+obj['name']+'&Id='+obj['id'])
			.map(this.extractFormData)
	      	.catch(this.handleError);
	}

	getForeignKeyElements(obj: Object): Observable<any>{

		return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetForeignKeyTable?tableName='+obj['tableName']+'&columnName='+obj['columnName']+'&id='+obj['id'])
			.map(this.extractFormData)
	      	.catch(this.handleError);
	}

	deleteRecords(obj: Object): Observable<any>{

		//return this.http.get('http://ccrws.evello.net/api/table/organisation')
		return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/DeleteTableRecord?tableName='+obj['table']+'&Id='+obj['row'])
			.map(this.extractFormData)
	      	.catch(this.handleError);
	}

	getFormElements(name: Object): Observable<any>  {
		
	   return this.http.get('http://192.168.43.234/CCR/api/DynamicForm/GetFormFieldList?tableName='+name)
			.map(this.extractFormData)
	      	.catch(this.handleError);
	}

	setUpdate(obj: Object): any {
		this.sharedObj = obj;
		return '200';
	}

	getUpdate(): Array<any> {
		return this.sharedObj;
	}

  	createForms(formData: Object): Observable<any>  {
	
      	let bodyString = JSON.stringify(formData);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post('http://192.168.43.234/CCR/api/DynamicForm/AddEditTableRecord', bodyString, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


	// already return a clone of the current state
	

}