import { Component } from '@angular/core';
import { ContactoI } from 'src/shared/models/ContactoI';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

  contactos: ContactoI[] = [];
  
  ngOnInit(): void {
    this.contactos = [
      {
        nombre: "Antonio",
        telefono: "623184800",
        correo: "antonio@pruebas.es"
      }, 

      {
        nombre: "Maria",
        telefono: "623184801",
        correo: "maria@pruebas.es"
      }, 

      {
        nombre: "Alba",
        telefono: "623184801",
        correo: "maria@pruebas.es"
      }, 

      {
        nombre: "Juan Pérez",
        telefono: "+1234567890",
        correo: "juan.perez@example.com"
      },

      {
        nombre: "María Rodríguez",
        telefono: "+9876543210",
        correo: "maria.rodriguez@example.com"
      },
      
      {
      nombre: "Carlos González",
      telefono: "+3456789012",
      correo: "carlos.gonzalez@example.com"
      },

      {
        nombre: "Laura Smith",
        telefono: "+2345678901",
        correo: "laura.smith@example.com"
      },

      {
        nombre: "Pedro López",
        telefono: "+4567890123",
        correo: "pedro.lopez@example.com"
      }

      ]
  }

}
