import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {
  shops:any;
  constructor(
    public data:DataService,
    public api:ApiService
  ) { }

  ngOnInit() {
    this.fetchAllShops()
  }
   fetchAllShops(){
    this.api._get('shops').subscribe( data => {
      this.shops = data.docs.map(doc => doc.data());
      
    });
   }
}
