import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { InicioPokedexComponent } from './inicio-pokedex/inicio-pokedex.component';

const routes: Routes = [
    { path: '', component: InicioPokedexComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule, 
        NgbModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
    InicioPokedexComponent
  ],
    exports:[],
    providers: []
})
export class PokedexModule { }