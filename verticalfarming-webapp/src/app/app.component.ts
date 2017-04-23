import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/groupBy';
import {Room} from "./model/room/room.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms : Room[];
  roomsAvailable: boolean = false;


  onRoomsReceived(results: Room[]) {
    this.roomsAvailable = results && results.length > 0;
    this.rooms = results;
  }

  onSelectedRoom(result: Room) {
    this.rooms = this.rooms.filter(x => x.name === result.name);
  }
}
