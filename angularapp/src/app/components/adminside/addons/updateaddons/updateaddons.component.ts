import { Component, OnInit } from '@angular/core';
import { Addon } from '../../../../class/addon';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonserviceService } from '../../../../services/addonservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateaddons',
  templateUrl: './updateaddons.component.html',
  styleUrls: ['./updateaddons.component.css']
})
export class UpdateaddonsComponent implements OnInit {
  addOnid = 0;
  newaddon: Addon = new Addon();
  addonForm: FormGroup;

  addonid = 'addOnid';

  constructor(private router: Router, private addservice: AddonserviceService, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.addonForm = this.fb.group({
      addOnName: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      addAddonPrice: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*")]],
      addonDescription: ['']
    })

    this.addOnid = this.route.snapshot.params[this.addonid];
    this.addservice.getAddonId(this.addOnid).subscribe((data) => {
      console.log(data);
      this.newaddon = data;
    },
      (error) => {
        console.error(error);
      }
    );
  }

  gotoaddon(): void {
    this.router.navigate(['admin/addon']);
  }

  onSubmit(): void {
    this.addservice.editAddon(this.addOnid, this.newaddon).subscribe((data) => {
      console.log(data);
      this.gotoaddon();
    },
      (error) => {
        console.log(error.error.message);
        this.toastr.warning(error.error.message, 'Addon Status');
      });
  }

  back(): any {
    this.router.navigate(['admin/addon']);
  }
}