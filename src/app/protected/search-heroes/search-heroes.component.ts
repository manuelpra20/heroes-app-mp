import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HeroesServiceService } from '../services/heroes-service.service';
import  Swal from "sweetalert2";

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styleUrls: ['./search-heroes.component.css']
})
export class SearchHeroesComponent implements OnInit {

  public heroesLists: any;
  termino: string = '3-D Man';

  constructor(private api : ApiServiceService , private hereosService:HeroesServiceService) { }

  // metodo para buscar un heroe, (mis sinceras disculpas por no terminar esta funcionalidad me quede un poco corto de tiempo para el desarrollo de la logica de la buscqueda de los superheroes)
  buscar(){
    console.log(this.termino);
    this.api.getHeroes()
  }

  ngOnInit(): void {
    
    // aqui extraemos la informacion desde e api de marvel
    this.api.getHeroes()
    .subscribe( resp => {

      this.heroesLists = resp;
      console.log(resp);
      
    });

  }

  // metodo para guardar superheroes en el componente hereoes guardados
  addtoHeroesguardados( item:any){
    this.hereosService.addtoHeroesGuardados(item);
    
  }

}
