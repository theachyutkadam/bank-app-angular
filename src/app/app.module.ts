import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



import { UserComponent } from './components/users/index/index.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { UserInformationComponent } from './components/user-informations/user-information.component';


import { HttpClientModule} from "@angular/common/http";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatSortModule} from "@angular/material/sort";
import { FormsComponent } from './components/users/forms/forms.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { IndexComponent } from './components/particulars/index/index.component';
import { ParticularFormComponent } from './components/particulars/particular-form/particular-form.component';
// import 'bootstrap/dist/css/bootstrap.min.css'

@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    SignInComponent,
    IndexComponent,
    UserComponent,
    FormsComponent,
    SignUpComponent,
    IndexComponent,
    ParticularFormComponent
  ],
  imports: [
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
