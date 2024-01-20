import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',  //  element selector
  // selector: '[app-servers]',  //  attribute selector
  selector: '.app-servers',  //  class selector
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No server was created!'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreation():string {
    return this.serverCreationStatus = 'New server is created.'
  }


}
