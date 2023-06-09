import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { ThemeService } from 'src/app/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  theme: Theme[] = [];

  constructor(private router: Router, private themeService: ThemeService){}

  ngOnInit(): void {
      this.getAllTheme();
  }


  private getAllTheme(): any{
    this.themeService.getTheme().subscribe(data => {
      console.log(data);
      this.theme = data;
    });
  }

  updateTheme(themeId: number): any{
    this.router.navigate(['admin/addtheme/updatetheme',themeId]);
  }

  deleteTheme(themeId: number): any{
    this.themeService.deleteTheme(themeId).subscribe( data => {
      this.getAllTheme();
    });
  }


}
