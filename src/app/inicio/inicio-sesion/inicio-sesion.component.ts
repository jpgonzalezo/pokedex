import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formGroupLogin: FormGroup
  constructor(
    private formBuilderLogin: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildFormLogin()
  }

  buildFormLogin(){
    this.formGroupLogin = this.formBuilderLogin.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
  }

  login(){
    console.log(this.formGroupLogin.value)
  }

}
