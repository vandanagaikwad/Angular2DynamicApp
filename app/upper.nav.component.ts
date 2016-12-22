import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { MenuItemsService } from './menuitems.service';


@Component({
    moduleId: module.id,
    selector: 'upper-nav',
    templateUrl: './sNav.html'
})
export class UpperNavComponent {
public navmenu:any;
public errorMessage:any;
    constructor(
        private router: Router,
        public _menuItems:MenuItemsService
    ) { 
        
    }
}