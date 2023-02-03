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
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserInformationComponent } from './components/user-information/user-information.component';


// import 'bootstrap/dist/css/bootstrap.min.css'

@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    SignInComponent,
    UserComponent
  ],
  imports: [
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
    // FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
