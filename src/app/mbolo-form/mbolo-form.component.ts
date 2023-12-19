import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Produit } from '../models/modele';
import {Observable,tap} from 'rxjs'
import {map} from 'rxjs/operators'
import { MboloService } from '../services/mbolo-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mbolo-form',
  templateUrl: './mbolo-form.component.html',
  styleUrls: ['./mbolo-form.component.css']
})
export class MboloFormComponent implements OnInit{

  addProdPreview$!: Observable<Produit>;
  myform!: FormGroup;
   urlRegex!: RegExp;
   
  constructor(private formBuilder: FormBuilder,
             private  articlesServices: MboloService,
             private router: Router){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.myform = this.formBuilder.group({
      title: [null, [Validators.required]],
      ImageUrl: [null, [Validators.required , Validators.pattern(this.urlRegex)]],
      Description: [null, [Validators.required]],
      Prix:[null, [Validators.required]],
      
    },{
      updateOn: 'blur'
  });
    this.addProdPreview$ = this.myform.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id:0
      }))
    );
    
  
  }
  
  onSubmitForm() {
    this.articlesServices.addProduct(this.myform.value).pipe(
      tap(() => this.router.navigateByUrl('/articlex'))
  ).subscribe();

    
}

}
