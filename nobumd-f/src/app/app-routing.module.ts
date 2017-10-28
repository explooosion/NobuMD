import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './container/home/home.component';
import { GuidesComponent } from './container/guides/guides.component';
import { DetailComponent } from './container/guides/detail/detail.component';
import { ArticleComponent } from './container/guides/article/article.component';
import { PostComponent } from './container/guides/post/post.component';

const routes: Routes = [
  { path: 'guides', component: GuidesComponent },
  { path: 'guides/article/charactor/:id', component: ArticleComponent },
  { path: 'guides/article/:id', component: DetailComponent },
  { path: 'guides/post', component: PostComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];


@NgModule({
  // useHash = true , 防止 http://localhost/# 發生跳轉
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
