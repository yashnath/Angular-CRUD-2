import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { CompComponent } from './comp/comp.component';
import { CompComponent } from './comp/comp.component';

const routes: Routes = [ {path:' ',redirectTo:'com',pathMatch:'full'},
{
  path: 'login', component:LoginComponent
},
{
  path: 'com' , component:CompComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
