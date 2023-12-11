import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../models/modele';
import { Router } from '@angular/router';
import { MboloService } from '../services/mbolo-services';

@Component({
  selector: 'app-mbolo-prod',
  templateUrl: './mbolo-prod.component.html',
  styleUrls: ['./mbolo-prod.component.css']
})
export class MboloProdComponent implements OnInit{
  
  @Input() article!: Produit;

 constructor(private produitService: MboloService,
            private router: Router){}

  ngOnInit(): void {
    
   }

   onViewProduit(){
    this.router.navigateByUrl(`articlex/${this.article.id}`)

  }

}
