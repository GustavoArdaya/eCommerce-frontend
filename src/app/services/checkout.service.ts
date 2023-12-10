import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = environment.ecommerceApiUrl +'/checkout/purchase';
  private paymentIntentUrl = environment.ecommerceApiUrl +'/checkout/payment-intent';

  constructor(private http: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.http.post<Purchase>(this.purchaseUrl, purchase);
  }
}
