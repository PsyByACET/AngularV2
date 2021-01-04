import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MyCard} from './MyF/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  cards: MyCard[] = [];

  inputId: number;
  inputName: string;

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.cards.push(new MyCard(i, 'Датчик ' + i));
    }
  }

  deleteDet(id: number) {
    const elem = this.cards.find(card => card.id === id);
    const elId: number = this.cards.indexOf(elem);
    this.cards.splice(elId, 1);
  }

  addDet() {
    this.cards.push(new MyCard(this.inputId, this.inputName));
    this.inputId = undefine;
    this.inputName = '';
  }
}


