import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'app';


  color:number = 2;
  nombre:string = "NOMBRE";
  empresa:string = "Nombre de la empresa";
  telefono:string = "Telefono";
  correo:string = "Email";
  descripcion:string = "Descripción";
  colores:string = "green";


  setColor(color){
      this.color = color;
      if (this.color==1){
          this.colores = "red";
      }else if (this.color==2){
        this.colores = "green";
      }else if (this.color==3){
        this.colores = "grey";
      }else{
        this.colores = "black";
      }

    }



  escribir(evento){
    switch (evento.target.name) {
      case "nombre":
        this.nombre=evento.target.value;
        break;
      case "empresa":
        this.empresa=evento.target.value;
        break;
      case "telefono":
        this.telefono=evento.target.value;
        break;
      case "correo":
        this.correo=evento.target.value;
        break;
      case "descripcion":
        this.descripcion=evento.target.value;
        break;
    }



  }
}
