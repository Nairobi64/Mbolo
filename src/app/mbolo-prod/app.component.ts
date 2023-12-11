import { Component, OnInit } from '@angular/core';
import { Produit } from './models/modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  article!:Produit[];

  ngOnInit(): void {
   
    this.article =  [
      {
        title: 'Archibald',
        Description: 'Mon meilleur ami depuis tout petit !',
        ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        Prix: 120000
      },
      {
        title: 'Three Rock Mountain',
        Description: 'Un endroit magnifique pour les randonnées.',
        ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        Prix: 6,
        
      },
      {
        title: 'Un bon repas',
        Description: 'Mmmh que c\'est bon !',
        ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        Prix: 0
      }
    ];
    
  }
 
}
