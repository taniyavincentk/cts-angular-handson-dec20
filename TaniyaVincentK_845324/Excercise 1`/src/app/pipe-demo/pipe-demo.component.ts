import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {

  firstname:string = "Appu";
  salary:number=3500;
  dob:Date =new Date("1999-12-11");

}
