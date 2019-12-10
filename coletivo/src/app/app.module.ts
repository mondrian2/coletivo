import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { LotacaoComponent } from './components/lotacao/lotacao.component';
import { TrajetoComponent } from './components/trajeto/trajeto.component';

@NgModule({
  declarations: [
    AppComponent,
    OnibusComponent,
    LotacaoComponent,
    TrajetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
