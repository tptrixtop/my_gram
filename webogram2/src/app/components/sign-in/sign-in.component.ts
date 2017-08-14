import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {SelectCountryComponent} from "../dialogs/select-country/select-country.component";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    public country_code: string = '';
    public country_name: string = '';
    public phone_number: string = '';
    public country_list: Array<any> = [];

    constructor(public dialog: MdDialog,
                private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<Array<any>>('/api/get-country-list').subscribe(data => {
            this.country_list = data;
        });
    }

    selectCountry() {

        let ref = this.dialog
            .open(SelectCountryComponent, {
                width: '450px'
            });
        let inst = ref.componentInstance;
        inst.select_country.subscribe(country => {
            this.country_name = country.name;
            this.country_code = '+' + country.callingCodes[0];
        });
        inst.country_list = this.country_list;

    }

    changeCode() {

        if(this.country_code[0] != '+') {
            this.country_code = '+' + this.country_code;
        }

        if(this.country_code.length > 1) {
            let countries = this.country_list.filter(x => {
                return ('+' + x.callingCodes[0]) == this.country_code;
            });

            if(countries.length > 0) {
                this.country_name = countries[0].name;
            } else {
                this.country_name = ' ';
            }   
        }
        
    }

}
