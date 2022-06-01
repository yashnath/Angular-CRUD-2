import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field'; //added
import { MatInputModule } from '@angular/material/input'; //added
import { MatButtonModule } from '@angular/material/button'; //added
import { MatIconModule } from '@angular/material/icon'; //added
import {MatCardModule} from '@angular/material/card'; //added
import {MatDialogModule } from '@angular/material/dialog'; //added
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { CompComponent } from './comp/comp.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, //added
    MatInputModule, //added
    MatButtonModule,//added
    MatIconModule, //added
    MatCardModule, //added
    MatDialogModule, BrowserAnimationsModule, //added,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
