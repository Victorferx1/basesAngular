import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input() 
  characterList: Character[] = [{
    name: 'Trunks',
    power: 100
  }]

  onDeleteCharacter(id: string): void {
    this.onDeleteCharacterById.emit(id);
  }
}
