import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Headers, Http, Response } from '@angular/http';

import { DynamicComponentModuleFactory } from "angular2-dynamic-component/index";

import { Nav } from './nav';

@Component({
    moduleId: module.id,
    selector: 'my-form',
    template: `
<template dynamic-component 
    [componentContext]="self"
    [componentTemplateUrl]='formTemplateUrl'
></template>
`
})

export class FormComponent implements OnInit {
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    self = this;
    formTemplateUrl = "http://ccrws.evello.net/languages.aspx";
    table = "";
    id = 0;

    @Input() record = null;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.table = params['type'];
            this.id = +params['id'];
            this.getRecord(this.table, this.id);
        });
    }

    getUpdatedRecord() {
        return JSON.stringify(this.record);
    }

    getRecord(type, id) {
        this.http.get('http://ccrws.evello.net/api/table/' + type + '/' + id)
            .subscribe(res => {
                this.record = res.json();
            });
    }

    save() {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');

        /*
        var requestoptions = new requestoptions({
            method: RequestMethod.Post,
            url: this.apiURL + url,
            headers: headers,
            body: data
        })
        */

        if (this.id == 0)
            this.http.post('http://ccrws.evello.net/api/table/' + this.table, this.getUpdatedRecord(), headers).subscribe((res: Response) => res.json());
        else
            this.http.put('http://ccrws.evello.net/api/table/' + this.table + '/' + this.id, this.getUpdatedRecord(), headers).subscribe((res: Response) => res.json());
    }

}
