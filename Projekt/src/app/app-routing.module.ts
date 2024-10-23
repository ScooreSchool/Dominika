import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KeresesComponent } from './kereses/kereses.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { StatisztikaComponent } from './statisztika/statisztika.component';

const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'kereses', component: KeresesComponent },
  { path: 'adatkezeles', component: AdatkezelesComponent },
  { path: 'bejelentkezes', component: BejelentkezesComponent },
  { path: 'statisztika', component: StatisztikaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
