import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './widget/guards/auth.guard';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from './chart/chart.module';
import {WidgetModule} from './widget/widget.module';
import { SharedModule} from './shared/shared.module';
import {CookieInterceptor} from './shared/interceptors/cookie.interceptor';
import {LoginComponent} from './components/login/login.component';
import {ServerErrorInterceptor} from './shared/interceptors/server-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ChartModule,
    WidgetModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CookieInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
