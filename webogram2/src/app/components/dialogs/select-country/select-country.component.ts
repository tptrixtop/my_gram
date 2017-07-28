import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-select-country',
    templateUrl: './select-country.component.html',
    styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {

    public country_list: Array<any> = [];

    @Output('select_country') select_country: EventEmitter<any> = new EventEmitter();

    constructor(public dialogRef: MdDialogRef<SelectCountryComponent>,
                private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<Array<any>>('/api/get-country-list').subscribe(data => {
            this.country_list = data;
        });
    }

    selectCountry(country: Array<any>) {
        this.select_country.emit(country);
        this.dialogRef.close(true);
    }

}
