import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../../class/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatetheme',
  templateUrl: './updatetheme.component.html',
  styleUrls: ['./updatetheme.component.css']
})
export class UpdatethemeComponent implements OnInit {
  themeId= 0;
  theme: Theme = new Theme();


  constructor(private router: Router,private themeService: ThemeService, private route: ActivatedRoute,private toastr: ToastrService){


  }


  ngOnInit(): void {
    console.log(this.themeId);
    this.themeId=this.route.snapshot.params[`themeId`];
    console.log(this.themeId);
    this.themeService.getThemebyId(this.themeId).subscribe(data =>{
      this.theme = data;
    });
  }

  gotoAddtheme(): any{
    this.router.navigate(['admin/']);
  }

  onSubmit(): any{
    this.toastr.info(this.theme.themeName+' is updated successfully','Update Status' );
    this.themeService.EditTheme(this.themeId,this.theme).subscribe(data =>{
      this.gotoAddtheme();
    });
  }
}
