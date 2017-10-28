import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { enableProdMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { PostComponent } from './container/guides/post/post.component';

/**
 * Pipe
 */
import { CharactorSearchPipe } from './pipe/charactor/charactor-search.pipe';

/**
 * Plugin
 */
import { ChartsModule } from 'ng2-charts';
import { LogComponent } from './component/model/log/log.component';
import { NouisliderModule } from 'ng2-nouislider';
import { BoxComponent } from './component/box/box.component';
import { CartComponent } from './component/cart/cart.component';

import { SweetAlert2Module } from '@toverux/ngsweetalert2';

enableProdMode();

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
    PostComponent,
    BoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ChartsModule,
    NouisliderModule,
    SweetAlert2Module.forRoot({
      // buttonsStyling: false,
      // customClass: 'modal-content',
      // confirmButtonClass: 'btn btn-lg btn-primary',
      // cancelButtonClass: 'btn btn-lg'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
