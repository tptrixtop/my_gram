import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {
    MdMenuModule, MdToolbarModule, MdGridListModule, MdButtonModule, MdDialogModule, MdNativeDateModule, MdInputModule,
    MdCheckboxModule,
    MdSelectModule, MdCardModule, MdTableModule, MdInputContainer
} from '@angular/material';
import {AppRoutingModule, appRouterComponents} from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from '@angular/common/http';
import {SelectCountryComponent} from './components/dialogs/select-country/select-country.component';
import {SearchPipe} from "./components/dialogs/select-country/search.pipe";
import {AddPlusPipe} from "./components/sign-in/add-plus.pipe";

let ng_material_modules = [
    MdMenuModule, MdToolbarModule, MdGridListModule, MdButtonModule,
    AppRoutingModule,BrowserModule,MdMenuModule,MdToolbarModule,MdGridListModule,
    MdButtonModule,FormsModule,MdDialogModule,NoopAnimationsModule,MdNativeDateModule,
    ReactiveFormsModule,MdInputModule,MdSelectModule,MdCheckboxModule,MdCardModule,
    MdTableModule
];


@NgModule({
    declarations: [
        AppComponent,
        appRouterComponents,
        SelectCountryComponent,
        SearchPipe,
        AddPlusPipe
    ],
    imports: [
        BrowserModule,
        ng_material_modules,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        SelectCountryComponent
    ]
})
export class AppModule {
}
