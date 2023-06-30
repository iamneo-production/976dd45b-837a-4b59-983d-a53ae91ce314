import { Component } from '@angular/core';
import { Theme } from '../../../../class/theme';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  newtheme: Theme = new Theme();
  constructor(private themeService: ThemeService, private router: Router,private toastr: ToastrService){ }

  saveTheme(): any{
    this.themeService.addTheme(this.newtheme).subscribe( data => {
      console.log(data);
      this.toastr.success('New Theme is added successfully!','Theme Status' );
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
