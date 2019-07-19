import { Injectable } from '@angular/core';

import Item from '../classes/item';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  items: Item[] = [];
  item: Item;

  constructor() { }

  getItems() {
    return this.items;
  }

  setItems(items: Item[]) {
    this.items = items;
  }

  getItem() {
    return this.item;
  }

  setItem(id: string) {
    this.item = this.items.filter(el => el.id === id)[0];
  }

  setItemStatus(status: string) {
    this.item = Object.assign({}, this.item, {status: status});
    const itemIndex = this.items.findIndex(obj => obj.id === this.item.id);
    this.items.splice(itemIndex, 1, this.item);
  }
}

