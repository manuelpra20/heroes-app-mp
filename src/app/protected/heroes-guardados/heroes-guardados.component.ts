import { Component, OnInit } from '@angular/core';
import { HeroesServiceService } from '../services/heroes-service.service';

@Component({
  selector: 'app-heroes-guardados',
  templateUrl: './heroes-guardados.component.html',
  styleUrls: ['./heroes-guardados.component.css']
})
export class HeroesGuardadosComponent implements OnInit {
  public heroes: any = [];

  constructor(private hereosService:HeroesServiceService) { }



  ngOnInit(): void {
    // metodo donde nos suscribimos para extraer datos del superheroe
    this.hereosService.getHeroes()
    .subscribe( resp =>{
      this.heroes = resp;
      // guardamos hereoes en localstorage
      if (localStorage.getItem('Heroes') ) {
        this.heroes =  JSON.parse(localStorage.getItem('Heroes')!)
      }
    })
  }

  // metodo para remover datos del superheroe en el componente geroes guardados
  removeItem(item:any){
    this.hereosService.removeHeroeItem(item);
    if (localStorage.getItem('Heroes') ) {
      this.heroes =  JSON.parse(localStorage.getItem('Heroes')!)
    }
  }

  // metodo donde agregamos los datos del heroe en el componente heroes img
  addtoheroesIz( item:any){
    this.hereosService.addtoHeroesIz(item);
    
  }

  // metodo para remover datos del superheroe en el componente hereoes img
  removeItemIz(item:any){
    this.hereosService.removeHeroeItemIz(item);
  }


}
