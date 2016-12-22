import { Component, Input, Output, OnInit, HostBinding, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Headers, Http, Response } from '@angular/http';
import { Router }   from '@angular/router';

import { MenuItemsService } from './menuitems.service';

import { Key } from './key';

@Component({
  moduleId: module.id,
  selector: 'foreignkey-table',
  templateUrl: './foreignkey.html'
})
export class ForeignkeyComponent implements OnInit {
  
  @Input() keydata: Key;

  @Output() counterChange = new EventEmitter();

  status = '';
  errorMessage='';
  
  
  constructor( private http: Http,
        private route: ActivatedRoute,
        private location: Location,
        public _menuItems:MenuItemsService,
        private router: Router
    ) { 

    }  

   ngOnInit(): void {
    
    var obj = {};
    obj['tableName'] = this.keydata.tablename;
    obj['columnName'] = this.keydata.columnname;
    obj['id'] = this.keydata.tableid;

    var arr = [];
    var array = [];
    this._menuItems.getForeignKeyElements(obj)
    .subscribe(
    data => 
    {
      
      for(let i=0; i<data.length; i++) {

        for (let key in data[i].fields) {
       
          arr.push(data[i].fields[key]);
        }
        array.push(arr.join(" "));
        arr = [];
      }
      
      //array.push(arr.join(" "));
      if(array.length > 0) {
        this.counterChange.emit({
          value: array
        });
      }
      
      //this.status = this._menuItems.setKeyData(array);
             
    },
    error =>  {
      this.errorMessage = <any>error;
      console.log(error);
    });


   }

}