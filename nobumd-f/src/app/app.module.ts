import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/**
 * Component
 */
import { AppComponent } from './app.component';
import { NavComponent } from './container/nav/nav.component';
import { FooterComponent } from './container/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { GuidesComponent } from './container/guides/guides.component';
import { BannerComponent } from './component/banner/banner.component';
import { ArticleComponent } from './container/guides/article/article.component';
import { DetailComponent } from './container/guides/detail/detail.component';

/**
 * Pipe
 */
import { CharactorSearchPipe } from './pipe/charactor/charactor-search.pipe';

/**
 * Plugin
 */
import { ChartsModule } from 'ng2-charts';


const appRoutes: Routes = [
  { path: 'guides', component: GuidesComponent },
  { path: 'guides/article/charactor/:id', component: ArticleComponent },
  { path: 'guides/article/:id', component: DetailComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    GuidesComponent,
    BannerComponent,
    CharactorSearchPipe,
    ArticleComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
