import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    @Output()
    public onDelete = new EventEmitter<string>();
    
    @Input()
    public characterList: Character[] = [];

    onDeleteCharacter = ( id: string ) => this.onDelete.emit(id);
}
