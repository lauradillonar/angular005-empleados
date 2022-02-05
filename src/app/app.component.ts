import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados:Empleado[]=[
    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Ana", "Martín", "Directora",5500),
    new Empleado("María", "Fernandez", "Jefa de sección", 3500),
    new Empleado("Laura", "López", "Administrativa", 2500)
  ];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0
  
  constructor(private miServicio:ServicioEmpleadosService){

  }

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }
}
