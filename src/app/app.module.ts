import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { TsShopFilterPipe } from './pipes/ts-shop-filter.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import {ErrorInterceptor} from './error-interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import { ClientDetailsComponent } from './client-details/client-details.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
    TsShopFilterPipe,
    LoginComponent,
    ClientDetailsComponent
  ],
  imports: [
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ClientDetailsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
