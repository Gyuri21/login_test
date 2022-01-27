import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'groups',component:GroupsComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
