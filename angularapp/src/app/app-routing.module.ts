import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/adminside/dashboard/dashboard.component';
import { AddaddonsComponent } from './components/adminside/addons/addaddons/addaddons.component';
import { UpdateaddonsComponent } from './components/adminside/addons/updateaddons/updateaddons.component';
import { AddonHomeComponent } from './components/adminside/addons/addon-home/addon-home.component';
import { AddaddmenuComponent } from './components/adminside/foodmenu/addaddmenu/addaddmenu.component';
import { UpdateaddmenuComponent } from './components/adminside/foodmenu/updateaddmenu/updateaddmenu.component';
import { AddmenuHomeComponent } from './components/adminside/foodmenu/addmenu-home/addmenu-home.component';
import { NewThemeComponent } from './components/adminside/themes/new-theme/new-theme.component';
import { UpdatethemeComponent } from './components/adminside/themes/updatetheme/updatetheme.component';
import { UserHomepageComponent } from './components/customerside/user-homepage/user-homepage.component';
import {  MybookingComponent } from './components/customerside/mybooking/mybooking.component';

import { AuthComponent } from './components/auth/auth.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AddonsComponent } from './components/adminside/addons/addons.component';
import { FoodmenuComponent } from './components/adminside/foodmenu/foodmenu.component';
import { ThemesComponent } from './components/adminside/themes/themes.component';
import { CustomersideComponent } from './components/customerside/customerside.component';
import { AddeventComponent } from './components/customerside/addevent/addevent.component';
import { EditEventComponent } from './components/customerside/edit-event/edit-event.component';

const routes: Routes = [
      { path: '', component: LoginComponent},
      { path: 'admin', component: AdminsideComponent, 
        children:[
          {path:"themeHome",component:DashboardComponent},
          {path:"",component:DashboardComponent},
          { path: 'addtheme', component: ThemesComponent,
          children:[
            {path: "",component:NewThemeComponent},            
            {path: "updatetheme/:themeId", component: UpdatethemeComponent}
          ]
        },
          { path: "addmenu", component: FoodmenuComponent,
          children:[
            {path: "",component:AddmenuHomeComponent},
            {path:"Addaddmenu", component: AddaddmenuComponent},
            {path: "Updateaddmenu/:foodMenuID", component: UpdateaddmenuComponent}
          ]
        },
          { path: 'addon', component: AddonsComponent,
          children:[
            {path : "", component:AddonHomeComponent},
            {path : "addAddon",component:AddaddonsComponent},
            {path : "updateaddons/:addOnid", component:UpdateaddonsComponent}
        ]
        }
      ],
      // canActivate: [AuthComponent]
    },
      { path: 'user', component: CustomersideComponent,
      children:[
        { path: '', component: UserHomepageComponent},
        { path: 'userhome', component: UserHomepageComponent},
        { path: 'bookevent', component:AddeventComponent},
        { path: 'viewbookevent', component: MybookingComponent},
        { path: 'editEvent/:eventId' ,component:EditEventComponent}
      ],
      // canActivate: [AuthComponent]
    },
      { path: 'home', component: HomeComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'login', component: LoginComponent},


      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
