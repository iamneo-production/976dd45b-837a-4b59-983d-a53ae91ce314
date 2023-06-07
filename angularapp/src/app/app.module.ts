import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ClassComponent } from './class/class.component';
import { CustomersideComponent } from './components/customerside/customerside.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AddeventComponent } from './components/customerside/addevent/addevent.component';
import { MybookingComponent } from './components/customerside/mybooking/mybooking.component';
import { NavbarUserComponent } from './components/customerside/navbar-user/navbar-user.component';
import { UserHomepageComponent } from './components/customerside/user-homepage/user-homepage.component';
import { BookingComponent } from './components/adminside/booking/booking.component';
import { AddonsComponent } from './components/adminside/addons/addons.component';
import { DashboardComponent } from './components/adminside/dashboard/dashboard.component';
import { FoodmenuComponent } from './components/adminside/foodmenu/foodmenu.component';
import { NavbarAdminComponent } from './components/adminside/navbar-admin/navbar-admin.component';
import { ThemesComponent } from './components/adminside/themes/themes.component';
import { EditEventComponent } from './components/customerside/edit-event/edit-event.component';
import { UserreviewComponent } from './components/customerside/userreview/userreview.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { AddaddonsComponent } from './components/adminside/addons/addaddons/addaddons.component';
import { AddaddmenuComponent } from './components/adminside/foodmenu/addaddmenu/addaddmenu.component';
import { AddmenuHomeComponent } from './components/adminside/foodmenu/addmenu-home/addmenu-home.component';
import { UpdateaddmenuComponent } from './components/adminside/foodmenu/updateaddmenu/updateaddmenu.component';
import { ThemeHomeComponent } from './components/adminside/themes/theme-home/theme-home.component';
import { NewThemeComponent } from './components/adminside/themes/new-theme/new-theme.component';
import { UpdatethemeComponent } from './components/adminside/themes/updatetheme/updatetheme.component';
import { AddonHomeComponent } from './components/adminside/addons/addon-home/addon-home.component';
import { UpdateaddonsComponent } from './components/adminside/addons/updateaddons/updateaddons.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ServicesComponent,
    ClassComponent,
    CustomersideComponent,
    AdminsideComponent,
    AddeventComponent,
    MybookingComponent,
    NavbarUserComponent,
    UserHomepageComponent,
    BookingComponent,
    AddonsComponent,
    DashboardComponent,
    FoodmenuComponent,
    NavbarAdminComponent,
    ThemesComponent,
    EditEventComponent,
    UserreviewComponent,
    AdminreviewComponent,
    AddaddonsComponent,
    AddaddmenuComponent,
    AddmenuHomeComponent,
    UpdateaddmenuComponent,
    ThemeHomeComponent,
    NewThemeComponent,
    UpdatethemeComponent,
    AddonHomeComponent,
    UpdateaddonsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
