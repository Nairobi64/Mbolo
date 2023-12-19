import { Injectable } from "@angular/core";
import { Produit } from "../models/modele";
import { HttpClient } from "@angular/common/http";
import { Observable,map,switchMap} from "rxjs";


@Injectable({
    providedIn: "root"
})

export class MboloService {

 constructor(private http : HttpClient){}
    
    articlex : Produit[] = [];

    getAllArticle(): Observable<Produit[]>{
      return this.http.get<Produit[]>('http://localhost:3000/api/articlex');
    };

    getProduitById(articleId: number): Observable<Produit>{
      
      return this.http.get<Produit>(`http://localhost:3000/api/articlex/${articleId}`)
      
    }

    addProduct(formValue: { title: string, ImageUrl: string, Prix: number, Description: string }) : Observable<Produit>{
      return this.getAllArticle().pipe(
        map(articlex => [...articlex].sort((a,b) => a.id - b.id)),
        map(sortedArticles => sortedArticles[sortedArticles.length - 1]),
        map(previousArticles => ({
           ...formValue,
           id: previousArticles.id + 1
       })),
       switchMap(newArticles => this.http.post<Produit>(
           'http://localhost:3000/api/articlex',
           newArticles)
       )
   );
 }

  }