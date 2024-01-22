import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: string = 'Secret Password = tuna'
  isVisible: boolean = false
  logs: any[] = []

  displayDetails(): void {
    this.isVisible = !this.isVisible;
    // console.log(this.logs.length + 1)
    // this.logs.push(this.logs.length + 1)
    this.logs.push(new Date())
  }

}
