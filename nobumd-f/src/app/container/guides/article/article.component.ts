import { Component, OnInit } from '@angular/core';

import { ArticleList } from '../../../class/article/article-list';
import { ArticleListService } from '../../../service/article/article-list.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleListService]
})
export class ArticleComponent implements OnInit {

  public articleArr: any = [];

  constructor(
    private articleListService: ArticleListService,
  ) { }

  ngOnInit() {
    this.LoadArticle();
  }

  public async LoadArticle() {
    await this.articleListService.getCharactorList()
      .subscribe(
      result => {
        this.articleArr = result;
      });
  }
}
