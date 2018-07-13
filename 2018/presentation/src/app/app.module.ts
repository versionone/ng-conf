import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ThemeComponent } from './theme/theme.component';
import { TalksComponent } from './talks/talks.component';
import { SocialComponent } from './social/social.component';
import { FunComponent } from './fun/fun.component';
import { SwagComponent } from './swag/swag.component';
import { FoodComponent } from './food/food.component';
import { TransitComponent } from './transit/transit.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SafeComponent } from './safe/safe.component';
import { AgainComponent } from './again/again.component';
import { SummaryComponent } from './summary/summary.component';
import { NgConf2019Component } from './ng-conf-2019/ng-conf-2019.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent,
    TalksComponent,
    SocialComponent,
    FunComponent,
    SwagComponent,
    FoodComponent,
    TransitComponent,
    HotelsComponent,
    SafeComponent,
    AgainComponent,
    SummaryComponent,
    NgConf2019Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
