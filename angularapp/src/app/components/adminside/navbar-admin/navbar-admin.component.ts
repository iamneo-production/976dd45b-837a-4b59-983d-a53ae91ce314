import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  // logout function
  logoutalrt(): void
  {
    // alert('Successfully Logged Out');
  }
}
