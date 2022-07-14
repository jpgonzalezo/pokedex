import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formGroupLogin: FormGroup
  userData: any
  constructor(
    private usuarioService: UsuarioService,
    private formBuilderLogin: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildFormLogin()
  }

  buildFormLogin() {
    this.formGroupLogin = this.formBuilderLogin.group({
      email: ['', Validators.email],
      contrasena: ['', Validators.required]
    })
  }

  login() {
    let data = this.formGroupLogin.value
    this.usuarioService.login(data).subscribe(
      (result => {
        this.userData = result
        console.log("los datos del usuario son: ", this.userData)
        if (this.userData)
          this.router.navigateByUrl('/pokedex');
        else
          alert('Usuario no valido')
      })
    )
  }

}
