import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { CharactorList } from '../../class/charactor/charactor-list';

@Injectable()
export class CharactorListService {

  private url: string = 'assets/api/charactor/charactorlist.json';

  constructor(private http: Http) { }

  public getCharactorList() {
    return this.http.get(this.url)
      .map((res) => {
        let data = res.json();

        return data.map(d => {
          return new CharactorList(
            d.name,
            d.img,
            d.group
          );
        });
      });
  }
}
