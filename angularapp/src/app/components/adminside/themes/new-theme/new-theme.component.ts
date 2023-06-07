<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
import { Theme } from '../../../../class/theme';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
<<<<<<< HEAD
export class NewThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
export class NewThemeComponent {

  newtheme: Theme = new Theme();
  constructor(private themeService: ThemeService,
    private router: Router){ }


  ngOnInit(): void {  
  }

  saveTheme(){
    this.themeService.storeTheme(this.newtheme).subscribe( data => {
      console.log(data);
      this.gotoTheme();
    },
    error => console.log(error));
  }

  gotoTheme(){
    this.router.navigate(['/admin/'])
  }

  onSubmit(){
    console.log(this.newtheme);
    this.saveTheme();
  }

 

>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
}
