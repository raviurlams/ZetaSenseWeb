import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,    
    children:[
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'reset-password', component: PasswordResetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsermanagementRoutingModule { }

