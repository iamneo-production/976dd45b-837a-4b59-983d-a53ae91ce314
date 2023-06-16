import { Component } from '@angular/core';
import { Theme } from '../../../../class/theme';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  newtheme: Theme = new Theme();
  constructor(private themeService: ThemeService, private router: Router){ }

  saveTheme(): any{
    this.themeService.addTheme(this.newtheme).subscribe( data => {
      console.log(data);
      this.gotoTheme();
    },
    error => console.log(error));
  }

  gotoTheme(): any{
    this.router.navigate(['/admin/']);
  }

  onSubmit(): any{
    console.log(this.newtheme);
    this.saveTheme();
  }



}
