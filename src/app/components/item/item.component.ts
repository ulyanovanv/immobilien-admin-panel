import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { ItemsService } from '../../services/items.service';
import Item from '../../classes/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    if (!this.loginService.getLoginStatus()) {
      this.router.navigate(['/login']);
    } else if (!this.itemsService.getItem()) {
      this.router.navigate(['/home']);
    } else {
      this.item = this.itemsService.getItem();
    }
  }

  setStatus(status: string) {
    this.itemsService.setItemStatus(status);
    this.router.navigate(['/home']);
  }
}
