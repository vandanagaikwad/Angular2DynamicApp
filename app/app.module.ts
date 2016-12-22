import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule  }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng2BootstrapModule, AlertModule, DropdownModule, TypeaheadModule  } from 'ng2-bootstrap/ng2-bootstrap';
//import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';

import { AppComponent }   from './app.component';
import { NavComponent }   from './nav.component';
import { ListComponent }  from './list.component';
import { DetailsComponent } from './details.component';
import { AddComponent } from './add.component';
import { UpperNavComponent } from './upper.nav.component';
import { FormComponent }  from './form.component';
import { MenuItemsService } from './menuitems.service';
import { SanitizeHtml } from './sanitize-html.pipe';
import { ToKeyValueListPipe } from './keyValue.pipe';
import { SearchFilterPipe } from './search.pipe';
import { NotificationsService } from './notifications.service';
import { DropdownDirective } from './dropdown.directive';
import { TypeaheadDirective } from './typeahead.directive';
import { DropdownToggle } from './dropdown.toggle';
import { ForeignkeyComponent } from './foreignkey.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

//import { DropdownMultiselectModule } from 'ng2-dropdown-multiselect';

import { DynamicComponentModuleFactory } from "angular2-dynamic-component/index";

@NgModule({
  imports: [
      BrowserModule,
      SimpleNotificationsModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      Ng2BootstrapModule,
      TypeaheadModule,
      AlertModule,
      DropdownModule,
      ChartsModule,
     // DropdownMultiselectModule,
      DynamicComponentModuleFactory.buildModule([
          FormsModule
      ]),
      RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/list/user',
            pathMatch: 'full'
        },
        {
            path: 'list/:name',
            component: DetailsComponent
        },
        {
            path: 'new/:name',
            component: AddComponent
        },
        {
            path: 'list/:name/:id',
            component: ListComponent
        },
        {
            path: 'form/:type/:id',
            component: FormComponent
        },
      ]) 
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    MenuItemsService,
    NotificationsService
  ],
  declarations: [AppComponent, NavComponent, ListComponent, DetailsComponent, AddComponent, UpperNavComponent, FormComponent, SanitizeHtml, ToKeyValueListPipe, SearchFilterPipe, DropdownDirective, TypeaheadDirective, DropdownToggle, ForeignkeyComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
