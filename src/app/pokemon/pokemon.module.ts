import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../servicios/pokemon.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PokemonService
  ]
})
export class PokemonModule { }
