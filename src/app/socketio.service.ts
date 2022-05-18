import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  private socket: any;

  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  public listener() {
    return new Observable((observer) => {
      this.socket.on('getUserInfo', () => {
        console.log('message');
        observer.next();
      });
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
