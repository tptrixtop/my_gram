import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
    selector: 'app-select-country',
    templateUrl: './select-country.component.html',
    styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {

    public country_list: Array<any> = [];
    @Output('select_country') select_country: EventEmitter<any> = new EventEmitter();

    constructor(public dialogRef: MdDialogRef<SelectCountryComponent>) {
    }

    ngOnInit() {
    }

    selectCountry(country: Array<any>) {
        this.select_country.emit(country);
        this.dialogRef.close(true);
    }

}
