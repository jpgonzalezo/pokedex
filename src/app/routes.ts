export const routes = [
    {
        path: '',
        //component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
            { path: 'admin', loadChildren: './componentes/administrador/administrador.module#AdministradorModule' },
            { path: 'profesor', loadChildren: './componentes/profesor/profesor.module#ProfesorModule' },
            { path: 'alumno', loadChildren: './componentes/alumno/alumno.module#AlumnoModule' },
            { path: 'inicio', loadChildren: './componentes/inicio/inicio.module#InicioModule'},
            { path: 'apoderado', loadChildren: './componentes/apoderado/apoderado.module#ApoderadoModule'}
        ]
    },
    { path: '**', redirectTo: 'home' }
];