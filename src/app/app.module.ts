import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSimpleCarouselModule } from 'ng-simple-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { LemonComponent } from './components/lemon/lemon.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WorksComponent } from './pages/works/works.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LocaleComponent } from './components/locale/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LemonComponent,
    ProfileComponent,
    WorksComponent,
    SkillComponent,
    WorkComponent,
    HamburgerComponent,
    CarouselComponent,
    LocaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSimpleCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
