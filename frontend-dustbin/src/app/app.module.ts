import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './session/features/login/login.component';
import { RegisterComponent } from './session/features/register/register.component';
import { MenuComponent } from './session/features/menu/menu.component';
import { MenuAdminComponent } from './Admin/menu-admin/menu-admin.component';
import { MenuSensoresComponent } from './Admin/menu-sensores/menu-sensores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    MenuAdminComponent,
    MenuSensoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
