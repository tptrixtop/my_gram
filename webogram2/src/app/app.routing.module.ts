import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent, PageNotFoundComponent, SignInComponent} from './components';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: SignInComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export let appRouterComponents = [AboutComponent, PageNotFoundComponent, SignInComponent];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
