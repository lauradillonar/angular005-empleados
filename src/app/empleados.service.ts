import { Empleado } from "./empleado.model";

export class EmpleadosService{

  empleados:Empleado[]=[
    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Ana", "Martín", "Directora",5500),
    new Empleado("María", "Fernandez", "Jefa de sección", 3500),
    new Empleado("Laura", "López", "Administrativa", 2500)
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }

}
