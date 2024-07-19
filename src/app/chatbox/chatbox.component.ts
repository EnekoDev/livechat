import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  username: string = "";
  message: string = "";

  setUsername() {
    sessionStorage.setItem('username', this.username)
  }
  checkUsername() {
    return sessionStorage.getItem('username') !== null ? true : false;
  }
  sendMessage() {
    console.log(this.message);
  }
}
