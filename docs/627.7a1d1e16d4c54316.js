"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[627],{627:(L,v,r)=>{r.r(v),r.d(v,{CountriesModule:()=>g});var a=r(895),h=r(551),t=r(256),_=r(262),T=r(646),x=r(4),u=r(505),A=r(529);class c{constructor(e){this.http=e,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},localStorage.getItem("cacheStorage")&&this.loadFormLocalStorage()}saveToLocalStorage(){localStorage.setItem("CacheStore",JSON.stringify(this.cacheStore))}loadFormLocalStorage(){localStorage.getItem("cacheStorage")||(this.cacheStore=JSON.parse(localStorage.getItem("cacheStorage")))}getCountriesRequest(e){return this.http.get(e).pipe((0,_.K)(()=>(0,T.of)([])))}searchCountryByAlphaCode(e){return this.http.get(`${this.apiUrl}/alpha/${e}`).pipe((0,x.U)(i=>i.length>0?i[0]:null),(0,_.K)(i=>(0,T.of)(null)))}searchCapital(e){return this.getCountriesRequest(`${this.apiUrl}/capital/${e}`).pipe((0,u.b)(i=>this.cacheStore.byCapital={term:e,countries:i}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,u.b)(i=>this.cacheStore.byCountries={term:e,countries:i}),(0,u.b)(()=>this.saveToLocalStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,u.b)(i=>this.cacheStore.byRegion={region:e,countries:i}),(0,u.b)(()=>this.saveToLocalStorage()))}}c.\u0275fac=function(e){return new(e||c)(t.LFG(A.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var q=r(579);class l{constructor(){this.debouncer=new q.x,this.placeholder="",this.initialValue="",this.onValue=new t.vpe,this.onDebounce=new t.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe().subscribe(e=>{this.onDebounce.emit(e)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(e){this.onValue.emit(e)}onKeyPress(e){this.debouncer.next(e)}}l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup",function(){t.CHM(i);const b=t.MAs(1);return t.KtG(n.onKeyPress(b.value))}),t.qZA()}2&e&&t.Q6J("placeholder",n.placeholder)("value",n.initialValue)},encapsulation:2});class m{}function U(o,e){1&o&&(t.TgZ(0,"div",2),t._uU(1," No hay paises que mostrar\n"),t.qZA())}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando"),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),t._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),t.qZA(),t.TgZ(9,"circle",3),t._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),t.qZA(),t.TgZ(13,"circle",10),t._UZ(14,"animate",11),t.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{bottom:15px;background-color:#000;color:#fff;padding:5px;position:fixed;right:15px;box-shadow:0 0 5px #00000080}span[_ngcontent-%COMP%]{margin-left:5px}"]});const S=function(o){return["/countries/by",o]};function B(o,e){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"td")(13,"a",6),t._uU(14," Ver mas"),t.qZA()()()),2&o){const n=e.$implicit,i=e.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.hij(" ",n.flag," "),t.xp6(2),t.Q6J("src",n.flags.svg,t.LSH)("alt",n.name.common),t.xp6(2),t.hij(" ",n.capital," "),t.xp6(2),t.Oqu(t.lcZ(11,7,n.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(9,S,n.cca3))}}function O(o,e){if(1&o&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblacion"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,B,15,11,"tr",4),t.qZA()()),2&o){const n=t.oxw();t.xp6(17),t.Q6J("ngForOf",n.countries)}}class s{constructor(){this.countries=[]}}function P(o,e){1&o&&t._UZ(0,"shared-loading-spinner")}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(e,n){if(1&e&&(t.YNc(0,U,2,0,"div",0),t.YNc(1,O,18,1,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",0===n.countries.length)("ngIfElse",i)}},dependencies:[a.sg,a.O5,h.rH,a.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]});class d{constructor(e){this.countryService=e,this.countries=[],this.isLoading=!1,this.initalValue=""}ngOnInit(){this.countries=this.countryService.cacheStore.byCapital.countries,this.initalValue=this.countryService.cacheStore.byCapital.term}searchByCapital(e){this.isLoading=!0,this.countryService.searchCapital(e).subscribe(n=>{this.countries=n,this.isLoading=!1})}}d.\u0275fac=function(e){return new(e||d)(t.Y36(c))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(C){return n.searchByCapital(C)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t.YNc(9,P,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("initialValue",n.initalValue),t.xp6(4),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("countries",n.countries))},dependencies:[a.O5,l,m,s],encapsulation:2});class y{constructor(e){this.countryService=e,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countryService.cacheStore.byCountries.countries,this.initialValue=this.countryService.cacheStore.byCountries.term}searchByCountry(e){this.countryService.searchCountry(e).subscribe(n=>{this.countries=n})}}y.\u0275fac=function(e){return new(e||y)(t.Y36(c))},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"initialValue","onDebounce"],[3,"countries"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Pais"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(C){return n.searchByCountry(C)}),t.qZA(),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",1),t._UZ(9,"countries-table",3),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("initialValue",n.initialValue),t.xp6(4),t.Q6J("countries",n.countries))},dependencies:[l,s],encapsulation:2});const w=function(o){return{"btn-outline-primary":o}};function J(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const b=t.CHM(n).$implicit,M=t.oxw();return t.KtG(M.searchByRegion(b))}),t._uU(1),t.qZA()}if(2&o){const n=e.$implicit,i=t.oxw();t.Q6J("ngClass",t.VKq(2,w,i.selectedRegion===n)),t.xp6(1),t.hij(" ",n," ")}}class Z{constructor(e){this.countryService=e,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countryService.cacheStore.byRegion.countries,this.selectedRegion=this.countryService.cacheStore.byRegion.region}searchByRegion(e){this.selectedRegion=e,this.countryService.searchRegion(e).subscribe(n=>{this.countries=n})}}Z.\u0275fac=function(e){return new(e||Z)(t.Y36(c))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2 btn-outline-primary",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2","btn-outline-primary",3,"ngClass","click"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Por Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,J,2,4,"button",2),t._UZ(6,"hr"),t.qZA()(),t.TgZ(7,"div",0)(8,"div",3),t._UZ(9,"countries-table",4),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.regions),t.xp6(4),t.Q6J("countries",n.countries))},dependencies:[a.mk,a.sg,s],encapsulation:2});var R=r(900);function I(o,e){1&o&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function N(o,e){if(1&o&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",3)(9,"div",5)(10,"h3"),t._uU(11,"Bandera"),t.qZA(),t._UZ(12,"img",6),t.qZA(),t.TgZ(13,"div",7)(14,"h3"),t._uU(15,"Informacion"),t.qZA(),t.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),t._uU(19," Poblacion: "),t.TgZ(20,"strong"),t._uU(21),t.ALo(22,"number"),t.qZA()()(),t.TgZ(23,"li",9)(24,"strong"),t._uU(25," Codigo: "),t.TgZ(26,"strong"),t._uU(27),t.qZA()()()()()(),t.TgZ(28,"div",10)(29,"div",7)(30,"h3"),t._uU(31,"Traducciones"),t.qZA(),t.TgZ(32,"div",11)(33,"span",12),t._uU(34),t.qZA(),t.TgZ(35,"span",12),t._uU(36),t.qZA(),t.TgZ(37,"span",12),t._uU(38),t.qZA(),t.TgZ(39,"span",12),t._uU(40),t.qZA(),t.TgZ(41,"span",12),t._uU(42),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA(),t.TgZ(45,"span",12),t._uU(46),t.qZA(),t.TgZ(47,"span",12),t._uU(48),t.qZA(),t.TgZ(49,"span",12),t._uU(50),t.qZA(),t.TgZ(51,"span",12),t._uU(52),t.qZA()()()()()),2&o){const n=t.oxw();t.xp6(6),t.Oqu(n.country.name.common),t.xp6(6),t.Q6J("src",n.country.flags.svg,t.LSH)("alt",n.country.name.common),t.xp6(9),t.Oqu(t.lcZ(22,15,n.country.population)),t.xp6(6),t.Oqu(n.country.cca3),t.xp6(7),t.Oqu(n.country.translations.ara.common),t.xp6(2),t.Oqu(n.country.translations.bre.common),t.xp6(2),t.Oqu(n.country.translations.ces.common),t.xp6(2),t.Oqu(n.country.translations.cym.common),t.xp6(2),t.Oqu(n.country.translations.deu.common),t.xp6(2),t.Oqu(n.country.translations.est.common),t.xp6(2),t.Oqu(n.country.translations.fin.common),t.xp6(2),t.Oqu(n.country.translations.ita.common),t.xp6(2),t.Oqu(n.country.translations.kor.common),t.xp6(2),t.Oqu(n.country.translations.per.common)}}class f{constructor(e,n,i){this.activateRoute=e,this.countriesService=n,this.router=i}ngOnInit(){console.log("url: "),this.activateRoute.params.pipe((0,R.w)(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}}f.\u0275fac=function(e){return new(e||f)(t.Y36(h.gz),t.Y36(c),t.Y36(h.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(e,n){if(1&e&&(t.YNc(0,I,2,0,"ng-template",null,0,t.W1O),t.YNc(2,N,53,17,"div",1)),2&e){const i=t.MAs(1);t.xp6(2),t.Q6J("ngIf",n.country)("ngIfElse",i)}},dependencies:[a.O5,a.JJ],encapsulation:2});const F=[{path:"by-capital",component:d},{path:"by-country",component:y},{path:"by-region",component:Z},{path:"by/:id",component:f},{path:"**",redirectTo:"by-capital"}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[h.Bz.forChild(F),h.Bz]});var V=r(466);class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[a.ez,p,V.m]})}}]);