import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ItemList } from '../../class/object/item-list';

@Injectable()
export class ItemService {

  private url: string = 'assets/api/object/item.json';

  constructor(private http: Http) { }

  public getItemList() {
    return this.http.get(this.url)
      .map((res) => {

        let data = res.json();

        return data.map(d => {
          return new ItemList(
            d.code,
            d.name,
            d.tip,
            d.src
          );
        });
      });
  }
}
