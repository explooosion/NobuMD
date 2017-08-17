import { ModuleWithProviders } from '@angular/core';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './container/home/home.component';
import { GuidesComponent } from './container/guides/guides.component';
import { DetailComponent } from './container/guides/detail/detail.component';
import { ArticleComponent } from './container/guides/article/article.component';
import { PostComponent } from './container/guides/post/post.component';

const appRoutes: Routes = [
  { path: 'guides', component: GuidesComponent },
  { path: 'guides/article/charactor/:id', component: ArticleComponent },
  { path: 'guides/article/:id', component: DetailComponent },
  { path: 'guides/post', component: PostComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  );

