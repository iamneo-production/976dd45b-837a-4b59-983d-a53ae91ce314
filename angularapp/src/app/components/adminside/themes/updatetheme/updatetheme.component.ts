import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Theme } from '../../../../class/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Component({
  selector: 'app-updatetheme',
  templateUrl: './updatetheme.component.html',
  styleUrls: ['./updatetheme.component.css']
})
export class UpdatethemeComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

}
=======
  themeId: number = 0;
  theme: Theme = new Theme();


  constructor(private router:Router,private themeService: ThemeService,
    private route:ActivatedRoute){

  }


  ngOnInit(): void {
    console.log(this.themeId);
    this.themeId=this.route.snapshot.params['themeId'];
    console.log(this.themeId);
    this.themeService.getThemebyId(this.themeId).subscribe(data =>{
      this.theme = data;
    })
  }

  gotoAddtheme(){
    this.router.navigate(['admin/'])
  }

  onSubmit(){
    
    this.themeService.updateTheme(this.themeId,this.theme).subscribe(data =>{
      this.gotoAddtheme();
    })
  }
}
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
