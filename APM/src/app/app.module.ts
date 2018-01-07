import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
//import { HttpClientModule } from '@angular/common/http/src/module';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
    
    bootstrap: [AppComponent,]
})
export class AppModule { }
