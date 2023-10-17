import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CountryService } from '../../services/countries.service';
import { tap,switchMap} from "rxjs/operators";
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

    public country?: Country;

   constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountryService,
    private router: Router,
    ){}

  ngOnInit(): void {
    console.log('url: ')
     this.activateRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.searchCountryByAlphaCode(id)),
      )
     .subscribe(country=>{
        if(!country){
          return this.router.navigateByUrl('');
        }
        return this.country = country;

     })
  }

}
