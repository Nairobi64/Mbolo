import { Injectable } from "@angular/core";
import { Produit } from "../models/modele";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";


@Injectable({
    providedIn: "root"
})

export class MboloService {

 constructor(private http : HttpClient){}
    
    articlex : Produit[] = [
      {
        id: 1,
        title: 'Archibald',
        Description: 'Mon meilleur ami depuis tout petit !',
        ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        Prix: 47
        
    }
    ];

    getAllArticle(): Observable<Produit[]>{
      return this.http.get<Produit[]>('http://localhost:3000/api/articlex');
    }

    addProduct(formValue: { title: string, Description: string, ImageUrl: string, Prix: number }) {
      const articles: Produit = {
          ...formValue,
          id: this.articlex[this.articlex.length - 1].id + 1
      };
      this.articlex.push(articles);
  }

    getProduitById(articleId: number): Observable<Produit>{
      return this.http.get<Produit>(`http://localhost:3000/api/articlex/${articleId}`)
      // const article = this.articlex.find(article => article.id === articleId);
      // if (!article) {
      //   throw new Error('article non trouve!');
      // } else {
      //     return article;
      // }

    }
  

  }