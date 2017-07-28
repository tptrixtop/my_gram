import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {SelectCountryComponent} from "../dialogs/select-country/select-country.component";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    public country_code: string = '';
    public country_name: string = '';
    public phone_number: string = '';

    constructor(public dialog: MdDialog) {
    }

    ngOnInit() {

    }

    selectCountry() {

        let ref = this.dialog
            .open(SelectCountryComponent, {
                width: '450px'
            })
            .componentInstance.select_country.subscribe(country => {
                this.country_name = country.name;
                this.country_code = '+' + country.callingCodes[0];
            });

    }

}
