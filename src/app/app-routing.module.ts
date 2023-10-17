import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";

//definicion de las rutas
const routes: Routes = [
   /*{
    path: '',
    component: HomePageComponent
   },*/
   {
    path: 'about',
    component: AboutPageComponent
   },
   {
    path: 'contact',
    component: ContactPageComponent
   },
   {
    //LazyLoad -- carga perezosa.
     path: 'countries',
     loadChildren: ()=> import('./countries/countries.module').then( m=> m.CountriesModule)
   },
   {
    path: '**',
    redirectTo: 'countries'
   },

]

//Forroot solamente sera 1 en todo el proyecto- el resto seran forchild
@NgModule({
   imports: [
      RouterModule.forRoot( routes,{useHash:true} ),
   ],
   exports: [
     RouterModule
   ]
})
export class AppRoutingModule {}
