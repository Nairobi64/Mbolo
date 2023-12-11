import { Component, OnInit } from '@angular/core';
import { MboloService } from '../services/mbolo-services';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/modele';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-unique-page',
  templateUrl: './unique-page.component.html',
  styleUrls: ['./unique-page.component.css']
})
export class UniquePageComponent implements OnInit{


  article!: Produit;
  article$!: Observable<Produit>

constructor( private articlesServices: MboloService,
             private route: ActivatedRoute){}

     ngOnInit(): void {
      const articleId = +this.route.snapshot.params['id'];
      this.article$ = this.articlesServices.getProduitById(articleId);
             
   
}
}
            
