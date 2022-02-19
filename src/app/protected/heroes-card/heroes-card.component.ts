import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HeroesServiceService } from '../services/heroes-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HeroesCardComponent implements OnInit {

 

  public heroesIz: any = [];

    // aqui utilizamos libreria para ventana modal de informacio nsobre heroes
  constructor(private api : ApiServiceService , private hereosService:HeroesServiceService, config: NgbModalConfig, private modalService: NgbModal) {

  
    config.backdrop = 'static';
    config.keyboard = false;
   }
   open(content:any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    // aqui extraemos la data de los hereoes para mostrarla en nuestro componente heroes-card
    this.hereosService.getHeroesIz()
    .subscribe( resp =>{
      this.heroesIz = resp;
    })
  }

}
 