import { RouterModule, Routes } from "@angular/router";
import { addeditComponent } from "./add-edit/add-edit.component";
import { AppComponent } from "./app.component";
import { homeComponent } from "./home-component";


const route: Routes = [
    {path:'home', component:homeComponent},
    {path:'addedit', component:addeditComponent},
    { path: '', redirectTo: 'addedit', pathMatch: 'full' },
    { path: '**', redirectTo: 'addedit' }
];

export const routing = RouterModule.forRoot(route, { useHash: true });
