import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

// @Injectable()
// export class ProductResolver implements Resolve<any> {

//     loading = false;

//     constructor(private store: Store<AppState>) {

//     }

// }