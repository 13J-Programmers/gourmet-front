import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { Product } from './product.model';
import { Order } from './order.model';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  fetchProducts () : Observable<Product[]> {
    const requestUrl = this.genUrl('products/');
    return this.http.get<Product[]>(requestUrl);
  }

  registerOrder (body: Order) : Observable<Order> {
    const requestUrl = this.genUrl(`group/${environment.group.id}/register_orders`)
    return this.http.post<Order>(requestUrl, body)
  }

  private genUrl(url : string) : string {
    return `http://${environment.api.host}:${environment.api.port}/${url}`;
  }
}
