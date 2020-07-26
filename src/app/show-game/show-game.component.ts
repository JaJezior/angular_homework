import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-show-game',
  templateUrl: './show-game.component.html',
  styleUrls: ['./show-game.component.css']
})
export class ShowGameComponent implements OnInit {

@Input()
logs: string[];

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
    this.logs = this.messagesService.logs;
  }

}
