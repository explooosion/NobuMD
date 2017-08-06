import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './container/nav/nav.component';
import { FooterComponent } from './container/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { GuidesComponent } from './container/guides/guides.component';
import { BannerComponent } from './component/banner/banner.component';

const appRoutes: Routes = [
  { path: 'guides', component: GuidesComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    GuidesComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
