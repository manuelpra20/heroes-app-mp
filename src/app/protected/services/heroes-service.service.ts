import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import  Swal from "sweetalert2";


@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  public heroesItemList:any = [];
  public heroesIzItemList:any = [];
  public heroesList = new BehaviorSubject<any>([]);
  public heroesIzList = new BehaviorSubject<any>([]);
  

  constructor() { 

    // aqui recibimos informacion de los heroes desde el localstorage
    if (localStorage.getItem('Heroes') ) {
      this.heroesItemList =  JSON.parse(localStorage.getItem('Heroes')!)
    }

  }

  // metodo para que escuche los valoes el componente hereoes guardados
  getHeroes(){
    return this.heroesList.asObservable();
   }

   // metodo para que escuche los valoes el componente heroes IMG
   getHeroesIz(){
    return this.heroesIzList.asObservable();
   }
 
  
  //  metodo para agregar heroes en el componente hereoes guardados
  addtoHeroesGuardados(heroe: any){

    this.heroesItemList.push( heroe );
    this.heroesList.next(this.heroesItemList)
    Swal.fire('Se ha agregado ', `${heroe.name} a Heroes guardados`, heroe ,)
    localStorage.setItem('Heroes',JSON.stringify(this.heroesItemList))
   
  }


   //  metodo para agregar heroes en el componente heroes IMG
  addtoHeroesIz(heroe: any){
  
    this.heroesIzItemList.push( heroe );
    this.heroesIzList.next(this.heroesIzItemList)
    Swal.fire('Se ha agregado ', `${heroe.name} a Heroes IMG`, heroe ,)

    localStorage.setItem('Heroes IMG',JSON.stringify(this.heroesIzItemList))
   
  }

  // metodo para remover valores de superheroes en el componente hereoes guardados
  removeHeroeItem(heroe: any){
    this.heroesItemList.map((a:any, index: any) => {
      if ( heroe.id === a.id ) {
        this.heroesItemList.splice(index, 1);
      }
    })
    this.heroesList.next(this.heroesItemList);
    localStorage.setItem('Heroes',JSON.stringify(this.heroesItemList))
    Swal.fire('Se ha eliminado ', `${heroe.name} de Heroes guardados`, heroe ,)
  }

  // metodo para remover valores de superheroes en el componente heroes IMG
  removeHeroeItemIz(heroe: any){
    this.heroesIzItemList.map((a:any, index: any) => {
      if ( heroe.id === a.id ) {
        this.heroesIzItemList.splice(index, 1);
      }
    })
    this.heroesIzList.next(this.heroesIzItemList);
    
    Swal.fire('Se ha eliminado ', `${heroe.name} de Heroes IMG`, heroe ,)
  }

}
