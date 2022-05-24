import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-inicio-pokedex',
  templateUrl: './inicio-pokedex.component.html',
  styleUrls: ['./inicio-pokedex.component.css']
})
export class InicioPokedexComponent implements OnInit {
  pokemons:any[];
  pokemonComplete:any[];

  constructor(private _pokemonService: PokemonService) { 
    this.pokemons = []
  }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  async getAllPokemon(){
    for (let i = 1; i <= 150; i++) {
      console.log("i: ",i)
      await this._pokemonService.getInfoPokemon(i).subscribe((data=>{
        data['image'] = data['sprites']['front_default'];
        data['id'] = i;
        this.pokemons.push(data);
        console.log(data);
        this.pokemons.sort(
          (n1,n2) => {
            if (n1.id > n2.id) {
                return 1;
            }
        
            if (n1.id < n2.id) {
                return -1;
            }
        
            return 0;
        }
        );
      }),(error)=>{
        console.log(error);
      });
    }
  }

}
