import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { ThemeService } from 'src/app/services/theme.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
  theme: Theme[] = [];

  constructor(private router:Router, private themeService: ThemeService){}

  ngOnInit(): void {
      this.getAllTheme();
  }


  private getAllTheme(){
    this.themeService.getAllTheme().subscribe(data => {
      console.log(data)
      this.theme = data;
    });
  }

  updateTheme(themeId: number){
    this.router.navigate(['admin/addtheme/updatetheme',themeId]);
  }

  deleteTheme(themeId: number){
    this.themeService.deleteTheme(themeId).subscribe( data => {
      this.getAllTheme();
    })
  }


}
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
