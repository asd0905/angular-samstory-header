import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // ng-bootstrap
import { RouterModule, Routes } from '@angular/router'; // router

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  // 기본 라우트
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'contactus', redirectTo: 'contact' },

  // authentication HeaderComponent
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'protected',
  //   component: ProtectedComponent,
  //   canActivate: [ LoggedInGuard ]
  // }

  // nested
  {
    path: 'products',
    component: ProductComponent
    // children: childRoutes
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes) // <-- 라우트
    // 자식 모듈에 추가한다.
    // ProductsMule
  ],
  providers: [
    // '해시뱅' 라우팅에서는 주석에서 제외한다.
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    // AUTH_PROVIDERS,
    // LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
