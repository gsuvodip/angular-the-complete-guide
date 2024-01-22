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
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers: string[] = ['Test Server 01', 'Test Server 02']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreation():string {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    return this.serverCreationStatus = 'New server is created with name - ' + this.serverName;
  }

  onUpdateServerName(event: Event): any {
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
