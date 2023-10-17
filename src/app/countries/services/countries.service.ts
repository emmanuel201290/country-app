import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, delay , tap} from 'rxjs';
//import { tap, map, catchError,of } from "rxjs/operators";
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital : {term:'', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(private http: HttpClient) {
    if(!localStorage.getItem('cacheStorage'))return;
    this.loadFormLocalStorage()
  }

  private saveToLocalStorage(){
      localStorage.setItem('CacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFormLocalStorage() {
       if( localStorage.getItem('cacheStorage')) return;

       this.cacheStore = JSON.parse(localStorage.getItem('cacheStorage')!);
  }


  private getCountriesRequest(url:string): Observable<Country[]>{
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(()=> of([])),
       // delay( 2000 ),
      )
  }


  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(error=>of(null))//retornar un observable vacio
      );
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.getCountriesRequest(url)
     .pipe(
        tap( (countries)=>  this.cacheStore.byCapital = {term, countries}),
        tap(()=> this.saveToLocalStorage())
     )
    ;

  }

  searchCountry(term: string): Observable<Country[]> {
     const url = `${ this.apiUrl }/name/${ term }`;
     return  this.getCountriesRequest(url)
     .pipe(
        tap((countries)=> this.cacheStore.byCountries = {term, countries}),
        tap(()=> this.saveToLocalStorage())
     );

  }

  searchRegion(region: Region): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.getCountriesRequest(url)
     .pipe(
       tap((countries) => this.cacheStore.byRegion = {region, countries}),
       tap(()=> this.saveToLocalStorage())
     )
    ;
  }

}

