import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularapp';

  searchText!:string;
  // themes:Theme[]=[];
  themes:any[]=[ { "themeName":"KK Event"},{ "themeName":"MM Event"},{ "themeName":"SS Event"},{ "themeName":"UK Event"}];
}
