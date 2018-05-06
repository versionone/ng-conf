import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ThemeComponent } from "./theme/theme.component";
import { TalksComponent } from "./talks/talks.component";
import { SocialComponent } from "./social/social.component";
import { FunComponent } from "./fun/fun.component";
import { SwagComponent } from "./swag/swag.component";
import { FoodComponent } from './food/food.component';
import { TransitComponent } from "./transit/transit.component";
import { HotelsComponent } from "./hotels/hotels.component";
import { SafeComponent } from "./safe/safe.component";
import { HealthyComponent } from "./healthy/healthy.component";
import { FamilyComponent } from "./family/family.component";
import { LessonsComponent } from "./lessons/lessons.component";
import { AgainComponent } from "./again/again.component";
import { SummaryComponent } from "./summary/summary.component";
import { NgConf2019Component } from "./ng-conf-2019/ng-conf-2019.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'social', component: SocialComponent },
  { path: 'fun', component: FunComponent },
  { path: 'swag', component: SwagComponent },
  { path: 'food', component: FoodComponent },
  { path: 'transit', component: TransitComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'safe', component: SafeComponent },
  { path: 'healthy', component: HealthyComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'again', component: AgainComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '2019', component: NgConf2019Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
