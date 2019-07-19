import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginService} from '../../services/login.service';
import { ItemsService} from '../../services/items.service';
import Item from '../../classes/item';
import { returnDate } from '../../helpers/date';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  items;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private itemsService: ItemsService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    if (!this.loginService.getLoginStatus()) {
      this.router.navigate(['/login']);
    } else if (this.itemsService.items.length === 0)  {
      this.getItems();
    } else {
      this.items = this.itemsService.getItems();
    }
  }

  getItems() {
    return this.http.get<Item[]>('/assets/items.json')
      .subscribe(res => {
        this.items = res.sort( (a: Item, b: Item)  => {
          const el1 = returnDate(a.postedDate);
          const el2 = returnDate(b.postedDate);

          return el1 > el2 ? -1 : el1 < el2 ? 1 : 0;
        });
        this.itemsService.setItems(this.items);
      });
  }

  navigateToItemPage(id) {
    this.itemsService.setItem(id);
    this.router.navigate(['/item', id]);
  }

  logOut() {
    this.loginService.deleteLoginData();
    this.router.navigate(['/login']);
  }
}
