import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-inicio-pokedex',
  templateUrl: './inicio-pokedex.component.html',
  styleUrls: ['./inicio-pokedex.component.css']
})
export class InicioPokedexComponent implements OnInit {
  pokemones:any;
  pokemonesv2 = [];
  loading=true;
  constructor(
    private  pokemonService:PokemonService,
    private router:Router

  ) { }

  ngOnInit(): void {
    console.log(" FUE EL NGONINIT")
    //this.getAllPokemon()
    this.getAllPokemonv2()
  }

  getAllPokemon(){
    console.log("OBTENER POKEMON")
    this.pokemonService.getAllPokemon().subscribe(
      (data=>{
        console.log(data)
        this.pokemones = data['results']
        console.log("los pokemones son: ",this.pokemones)
      })
    )
  }

  getAllPokemonv2(){

    for (let i = 1; i <= 151 ; i++) {
      this.pokemonService.getInfoPokemon(i).subscribe((data=>{
        data['image'] = data['sprites']['front_default']
        data['id'] = i
        this.pokemonesv2.push(data);
        //ordenar pokemones
        this.pokemonesv2.sort(
          (n1,n2) => {
            if(n1.id>n2.id){
              return 1
            }
            if(n1.id<n2.id){
              return -1
            }
            return 0
          }
        );
        if (i==151) {
          this.loading=false;
        }



      }))
    }
  }

  verDetalle(id){
    this.router.navigateByUrl('/pokedex/pokemon/'+id);
  }



}
