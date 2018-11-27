import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management.component';
import { RegisterComponent } from './register/register.component';
import { userManagementService } from './user-management.service';
import { UsermanagementRoutingModule } from './user-management.routing';

@NgModule({
  imports: [
    UsermanagementRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent,PasswordResetComponent,UserManagementComponent],
  providers: [userManagementService]
})
export class UsermanagementModule { }