import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './components/user-information/user-information.component';

const routes: Routes = [
  {
    path: '', component: UserInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
