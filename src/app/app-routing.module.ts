import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnibusComponent } from './components/onibus/onibus.component';
import { LotacaoComponent } from './components/lotacao/lotacao.component';
import { TrajetoComponent } from './components/trajeto/trajeto.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'onibus', component: OnibusComponent},
  {path: 'lotacao', component: LotacaoComponent},
  {path: 'trajeto/:id', component: TrajetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
