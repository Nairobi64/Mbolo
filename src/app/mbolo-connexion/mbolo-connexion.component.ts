import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-mbolo-connexion',
  templateUrl: './mbolo-connexion.component.html',
  styleUrls: ['./mbolo-connexion.component.css']
})
export class MboloConnexionComponent implements OnInit {

  group!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Utilisez le même nom ici
    this.group = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
