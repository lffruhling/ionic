import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private nome;

  constructor(){
      this.nome = "Leonardo";
  }

  getNome(){
    return "Método retorna o nome: " + this.nome;
  }

}
