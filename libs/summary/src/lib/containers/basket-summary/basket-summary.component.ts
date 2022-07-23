import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@geometry-shop/domain';
import { BasketState, BasketSelectors } from '@geometry-shop/data-access';
import { select, Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'geometry-shop-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {

  basketItems: Observable<Product[]> = of([]);

  public totalCost: number = 0;

  constructor(private readonly basketStore: Store<BasketState>) {}
  
  ngOnInit(): void {
    this.basketItems = this.basketStore
      .pipe(select(BasketSelectors.selectAllBasketProducts))
    this.basketItems.pipe(take(1)).subscribe( (products:Product[]) => {
      this.totalCost = products.map(t => t.price).reduce((acc, value) => acc + value, 0);
    })
  }

  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Product) => `${element.name}`,
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: Product) => `${element.price}`,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);
}
