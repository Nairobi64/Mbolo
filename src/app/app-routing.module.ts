import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MboloListComponent } from './mbolo-list/mbolo-list.component';
import { MboloConnexionComponent } from './mbolo-connexion/mbolo-connexion.component';
import { MboloFormComponent } from './mbolo-form/mbolo-form.component';
import { UniquePageComponent } from './unique-page/unique-page.component';
import { MboloInscriptionComponent } from './mbolo-inscription/mbolo-inscription.component';

const routes: Routes = [
  {path: "articlex/:id", component: UniquePageComponent},
  {path: 'articlex', component: MboloListComponent},
  {path: 'Ajout', component: MboloFormComponent},
  {path: 'Inscription', component: MboloInscriptionComponent},
  {path: 'connexion', component: MboloConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
