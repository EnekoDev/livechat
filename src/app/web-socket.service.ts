import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: Socket;
  constructor() {
    this.socket = io("http://localhost:3000");
  }

  sendMessage(message:string):void {
    this.socket.emit('message', message);
  }

  onMessage(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('message', (data: string) => {
        observer.next(data);
      })

      return () => {
        this.socket.off('message');
      }
    })
  }
}
