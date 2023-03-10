import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './components/user-informations/user-information.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { UserComponent } from './components/users/index/index.component';
import { IndexComponent } from './components/particulars/index/index.component';
import { ParticularFormComponent } from './components/particulars/particular-form/particular-form.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'user_informations', component: UserInformationComponent },
  { path: 'users/index', component: UserComponent },
  { path: 'particulars/index', component: IndexComponent },
  { path: 'particulars/form', component: ParticularFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
