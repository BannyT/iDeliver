import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  shop: any;
  orders: any;

  constructor(
    public data:DataService,
    public api:ApiService,

  ) { }

  ngOnInit() {
    this.shop = this.data.getMyShop();
  }
  ionViewWillEnter() {
    this.fetchOrders();
  }
//function to load orders made
  fetchOrders() {
    const where =  {key: 'shop_id', value: this.shop.id };
    this.api._get('orders', where).subscribe( data => {
      this.orders = data.docs.map(doc => doc.data());
    });
  }
}
