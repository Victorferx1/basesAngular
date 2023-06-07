import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroNames: string[] = ['Spiderman','Ironman','Hulk', 'Thor'];
  deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    if (this.deleteHero) {
    }

  }

}
