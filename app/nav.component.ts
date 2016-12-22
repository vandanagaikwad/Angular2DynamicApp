import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { MenuItemsService } from './menuitems.service';

import { Nav } from './nav';

const NAV: Nav[] = [];

@Component({
    moduleId: module.id,
    selector: 'my-nav',
    templateUrl: './nav.html'
})
export class NavComponent {
public navmenu:any;
public errorMessage:any;
    constructor(
        private router: Router,
        public _menuItems:MenuItemsService
    ) { 
        this._menuItems.getMenus()
          .subscribe(
            data => 
            {
              this.navmenu = data.menuList;
             
            },
            error =>  {
              this.errorMessage = <any>error;
            });
    }

    

    gotoList(nav: any): void {
        let link = ['/list', nav.name];
        this.router.navigate(link);
    }
}