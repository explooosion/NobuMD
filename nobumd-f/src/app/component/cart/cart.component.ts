import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ItemService } from '../../service/object/item.service';
import { element } from 'protractor';

import { SwalComponent } from '@toverux/ngsweetalert2';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ItemService]
})
export class CartComponent implements OnInit {

  @ViewChild('dialogSuccess') private swalDialogSuccess: SwalComponent;
  @ViewChild('dialogError') private swalDialogError: SwalComponent;

  @Output() closeCartEvent = new EventEmitter();
  @Input()
  set active(value: Boolean) {
    this._active = value;
  }
  get active(): Boolean { return this._active; }

  public _active: Boolean = false;

  public itemArr: Object = [];
  isCopied1: boolean = false;
  text: String = 'asd';

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {

    this.getItemList();

    $(function () {
      // Bootstrap Tooltips
      $('[data-toggle="tooltip"]').tooltip();

      // Smooth scrolling using jQuery easing
      $('a[href*="#"]:not([href="#"]):not(.nav-link)').click(function () {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        target = target.offset().top;
        $('html, body').animate({
          scrollTop: (target - 48)
        }, 1000, "easeInOutExpo");

        return false;
      });
    });
  }

  public closeCart() {
    this.active = false;
    this.closeCartEvent.emit(this.active);
  }

  public async getItemList() {
    await this.itemService.getItemList().subscribe(
      result => { this.itemArr = result; })
  }

  public clipBoard(e) {
    if (e.isSuccess) {
      this.swalDialogSuccess.text = `[code](e.content)`;
      this.closeCart();
      this.swalDialogSuccess.show();
    } else {
      this.swalDialogError.show();
    }
  }

}
