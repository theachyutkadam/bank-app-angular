import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './components/user-informations/user-information.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/users/index/index.component';

const routes: Routes = [
  { path: 'user_information', component: UserInformationComponent },
  { path: 'users/index', component: UserComponent },
  { path: '', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
