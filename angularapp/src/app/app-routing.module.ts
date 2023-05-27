import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateaddmenuComponent } from './admin/addmenu/updateaddmenu/updateaddmenu.component';

const routes: Routes = [
  {path: "up", component: UpdateaddmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
