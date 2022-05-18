import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wordsearch-ng';

  constructor(private socketService: SocketioService) {}

  ngOnInit(): void {
    this.socketService.listener().subscribe(() => {
      console.log('here');
    });
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }
}
