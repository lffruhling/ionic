import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  nome;

  constructor(){
      this.nome = "Leonardo";
  }

  getNome(){
    return "Método retorna " + this.nome;
  }

}
