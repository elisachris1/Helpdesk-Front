import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CallCreateComponent } from './components/call-create/call-create.component';
import { CallListComponent } from './components/call/call-list/call-list.component';
import { clientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { clientListComponent } from './components/client/client-list/client-list.component';

import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TechnicianListComponent } from './components/technician-list/technician-list.component';
import { TechinicianCreateComponent } from './components/technician/techinician-create/techinician-create.component';
import { TechnicianDeleteComponent } from './components/technician/technician-delete/technician-delete.component';
import { TechnicianUpdateComponent } from './components/technician/technician-update/technician-update.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: NavComponent, canActivate: [AuthGuard], children:[
      {path:'home', component: HomeComponent},
      {path: 'technicians', component: TechnicianListComponent},
      {path: 'technicians/create', component: TechinicianCreateComponent},
      {path: 'technicians/update/:id', component: TechnicianUpdateComponent},
      {path: 'technicians/delete/:id', component: TechnicianDeleteComponent},


      {path: 'clients', component: clientListComponent},
      {path: 'clients/create', component: clientCreateComponent},
      {path: 'clients/update/:id', component: ClientUpdateComponent},
      {path: 'clients/delete/:id', component: ClientDeleteComponent},

      {path: 'calls', component: CallListComponent},
      {path: 'calls/create', component: CallCreateComponent},



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
