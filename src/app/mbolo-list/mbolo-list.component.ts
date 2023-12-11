import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/modele';
import { MboloService } from '../services/mbolo-services';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-mbolo-list',
  templateUrl: './mbolo-list.component.html',
  styleUrls: ['./mbolo-list.component.css']
})
export class MboloListComponent implements OnInit {
  
  // articlex!: Produit[];
  articles$!: Observable<Produit[]>;

  constructor(private articlesServices: MboloService){}

  ngOnInit(): void {

    this.articles$ = this.articlesServices.getAllArticle()
   

  }
    
}
