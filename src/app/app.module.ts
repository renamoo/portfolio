import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LemonComponent } from './components/lemon/lemon.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TopComponent } from './pages/top/top.component';
import { WorksComponent } from './pages/works/works.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LemonComponent,
    TopComponent,
    ProfileComponent,
    WorksComponent,
    SkillComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
