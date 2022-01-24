import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor';
import { DashboardModule } from './dashboard';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { TarefasModule } from './tarefas';
import { TodoModule } from './todo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    TodoModule,
    
    AppRoutingModule, //sempre deixar esse module pai por último
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
