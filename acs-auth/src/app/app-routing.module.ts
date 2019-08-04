import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'manage-users', component: ManageUsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
