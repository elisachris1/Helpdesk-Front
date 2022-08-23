import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TechnicianListComponent } from './components/technician-list/technician-list.component';
import { TechinicianCreateComponent } from './components/technician/techinician-create/techinician-create.component';
import { TechnicianUpdateComponent } from './components/technician/technician-update/technician-update.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: NavComponent, canActivate: [AuthGuard], children:[
      {path:'home', component: HomeComponent},
      {path: 'technicians', component: TechnicianListComponent},
      {path: 'technicians/create', component: TechinicianCreateComponent},
      {path: 'technicians/update/:id', component: TechnicianUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
