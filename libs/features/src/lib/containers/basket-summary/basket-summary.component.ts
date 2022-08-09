import { Component, Input, OnInit } from '@angular/core';
import { CustomProduct, Product } from '@geometry-shop/domain';
import { BasketState, BasketSelectors } from '@geometry-shop/data-access';
import { select, Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'geometry-shop-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  basketItems: Observable<CustomProduct[]> = of([]);

  public totalCost: number = 0;

  constructor(private readonly basketStore: Store<BasketState>) {}

  ngOnInit(): void {
    this.basketItems = this.basketStore.pipe(
      select(BasketSelectors.selectAllBasketProducts)
    );
    this.basketItems.pipe(take(1)).subscribe((products: CustomProduct[]) => {
      this.totalCost = products
        .reduce((acc, product) => acc + product.price * product.size, 0);
    });
  }

  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: CustomProduct) => `${element.name}`,
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: CustomProduct) => `${element.price}`,
    },
    {
      columnDef: 'color',
      header: 'Color',
      cell: (element: CustomProduct) => `${element.color}`,
    },
    {
      columnDef: 'size',
      header: 'Size',
      cell: (element: CustomProduct) => `${element.size}`,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);
}
