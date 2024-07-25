import { CommonModule } from '@angular/common';
import { WebSocketService } from './../web-socket.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent implements OnInit {
  messages:string[] = [];
  newMessage:string = '';

  constructor(private webSocketService: WebSocketService) {

  }

  ngOnInit(): void {
    this.webSocketService.onMessage().subscribe((message) => {
      this.messages.push(message);
    })
  }

  sendMessage() {
    if(this.newMessage.trim()) {
      this.webSocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
