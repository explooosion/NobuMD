import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ArticleList } from '../../class/article/article-list';

@Injectable()
export class ArticleListService {

  private url: string = 'assets/api/article/articlelist.json';

  constructor(private http: Http) { }

  public getCharactorList() {
    return this.http.get(this.url)
      .map((res) => {
        let data = res.json();

        return data.map(d => {
          return new ArticleList(
            d.id,
            d.position,
            d.charactor,
            d.img,
            d.title,
            d.author,
            d.last,
            d.create,
            d.caption,
            d.scoreup,
            d.scoredn,
            d.views,
            d.comments
          );
        });
      });
  }

}
