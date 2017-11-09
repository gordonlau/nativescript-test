import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl:"app.component.html",
  styleUrls:[
    "app.component.css"
  ]
})
export class AppComponent {
  // Your TypeScript logic goes here
  counter = 0;

  increment(){
    this.counter += 1;
  }
  decrement(){
    this.counter -=1 ;
  }
}
