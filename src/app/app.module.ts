import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyComponent } from './apply/apply.component';
import { NgDraggableModule } from 'angular-draggable';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { CoreGuard } from './core.guard';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    MenuComponent,
    ApplyComponent,
    LogoComponent,
    PrivacyComponent,
    TermsComponent,
    LookbookComponent,
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    NgDraggableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'privacy', component: PrivacyComponent},
      {path: 'lookbook', component: LookbookComponent},
      {path: 'apply', component: ApplyComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate:[CoreGuard]},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: '**', component:HomeComponent}
    ])
  ],
  providers: [AuthService, CoreGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
