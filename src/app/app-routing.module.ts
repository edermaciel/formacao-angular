import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor';
import { DashboardRoutes } from './dashboard';
import { JogoDaVelhaRoutes } from './jogo-da-velha';
import { TarefaRoutes } from './tarefas';
import { TodoRoutes } from './todo';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...TarefaRoutes,
    ...JogoDaVelhaRoutes,
    ...TodoRoutes,
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }