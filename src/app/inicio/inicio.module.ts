import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { StorageService } from '../servicios/storage-service.service';
const routes: Routes =[
  {path:'' , component: InicioSesionComponent}
]

@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UsuarioService,
    StorageService
  ]
})
export class InicioModule { }
