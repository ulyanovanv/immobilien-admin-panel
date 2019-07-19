import {async, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;
  const mockItem = {
      id: 'I105',
      postedDate: '2018.12.10',
      name: 'Beautiful house at the center of Berlin',
      address: 'Rosa-Luxemburg Platz 5, 10001, Berlin',
      cost: 230300,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      status: ''
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = new ItemsService();
  });

  it('should be created', () => {
    service = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });

  it('ItemsService.getItems should set items', () => {
    service.setItems([mockItem]);
    expect(service.items).toEqual([mockItem]);
  });

  it('ItemsService.getItems should return items', () => {
    service.setItems([mockItem]);
    expect(service.getItems()).toEqual([mockItem]);
  });
});
