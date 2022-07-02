import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { Product } from '@geometry-shop/data-models';
import { select, Store } from '@ngrx/store';
import { selectAllProducts } from '../../state/products/product.selectors';
import { Observable, of, pipe, take, tap } from 'rxjs';
import { ProductState } from '../../state/products/product.state';
import { selectAll } from '../../state/products/product.reducer';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}

@Component({
  selector: 'geometry-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy },
  ],
})
export class ProductListComponent implements OnInit {
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Product) => `${element.name}`,
    },
    {
      columnDef: 'color',
      header: 'Color',
      cell: (element: Product) => `${element.color}`,
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: Product) => `${element.price}`,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);

  @ViewChild('paginator') paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Product>;

  constructor(private store: Store<ProductState>) {}

  products$: Observable<Product[]> = of([]);

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectAllProducts));
    this.products$.subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
    });
  }
}
