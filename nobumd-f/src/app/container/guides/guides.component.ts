import { Component, OnInit } from '@angular/core';

import { CharactorList } from '../../class/charactor/charactor-list';
import { CharactorListService } from '../../service/charactor/charactor-list.service';


@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css'],
  providers: [CharactorListService]
})
export class GuidesComponent implements OnInit {

  public charactorArr: any = [];
  public fake: any = [];
  public filterkey: string = '';

  constructor(
    private charactorListService: CharactorListService,
  ) { }

  ngOnInit() {
    this.createFakeData();
    this.LoadCharactor();
  }

  public async LoadCharactor() {
    await this.charactorListService.getCharactorList()
      .subscribe(
      result => {
        this.charactorArr = result;
      });
  }

  public createFakeData() {

    for (let group = 1; group <= 3; group++) {

      var now = 'a';
      if (group == 2) {
        now = 'b';
      } else if (group == 3) {
        now = 'c';
      }

      for (let i = 1; i < 36; i++) {

        let num = i < 10 ? '0' + i : i;

        var obj = new CharactorList(
          `charactor${i}`,
          `${now}${num}.png`,
          `${now}`
        );
        this.fake.push(obj);
      }

    }
  }

}
