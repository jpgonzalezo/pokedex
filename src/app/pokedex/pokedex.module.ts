import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { InicioPokedexComponent } from './inicio-pokedex/inicio-pokedex.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { PokemonService } from '../servicios/pokemon.service';

const routes: Routes = [
    { path: '', component: InicioPokedexComponent },
    { path: 'pokemon', component: DetallePokemonComponent }
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
    InicioPokedexComponent,
    DetallePokemonComponent
  ],
    exports:[],
    providers: [PokemonService]
})
export class PokedexModule { }