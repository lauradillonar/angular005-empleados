import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  empleados:Empleado[]=[
    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Ana", "Martín", "Directora",5500),
    new Empleado("María", "Fernandez", "Jefa de sección", 3500),
    new Empleado("Laura", "López", "Administrativa", 2500)
  ];

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){}

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona a agregar: " + "\n" +
    empleado.nombre + "\n" + "Salario:" + empleado.salario);

    this.empleados.push(empleado);
  }

}
