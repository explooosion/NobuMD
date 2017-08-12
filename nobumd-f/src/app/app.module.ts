import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routing';

/**
 * Component
 */
import { AppComponent } from './app.component';
import { NavComponent } from './container/nav/nav.component';
import { FooterComponent } from './container/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { HomeComponent } from './container/home/home.component';
import { GuidesComponent } from './container/guides/guides.component';
import { DetailComponent } from './container/guides/detail/detail.component';
import { ArticleComponent } from './container/guides/article/article.component';

/**
 * Pipe
 */
import { CharactorSearchPipe } from './pipe/charactor/charactor-search.pipe';

/**
 * Plugin
 */
import { ChartsModule } from 'ng2-charts';
import { LogComponent } from './component/model/log/log.component';

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
    LogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
