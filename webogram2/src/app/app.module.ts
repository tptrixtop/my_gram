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

@NgModule({
    declarations: [
        AppComponent,
        appRouterComponents
    ],
    imports: [
        BrowserModule,
        MdMenuModule, MdToolbarModule, MdGridListModule, MdButtonModule,
        AppRoutingModule,
        BrowserModule,
        MdMenuModule,
        MdToolbarModule,
        MdGridListModule,
        MdButtonModule,
        FormsModule,
        MdDialogModule,
        NoopAnimationsModule,
        MdNativeDateModule,
        ReactiveFormsModule,
        MdInputModule,
        MdSelectModule,
        MdCheckboxModule,
        MdCardModule,
        MdTableModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
