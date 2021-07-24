import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-aboutshop',
  templateUrl: './aboutshop.page.html',
  styleUrls: ['./aboutshop.page.scss'],
})
export class AboutshopPage implements OnInit {
   shop:any;
   file:File;
  constructor(public data:DataService,public api:ApiService,public router:Router,public loading:LoadingController) { }

  ngOnInit() {
    this.shop = this.data.getMyShop();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async pickPhoto( $event ) {
    const loading = await this.loading.create({
      message: 'Uploading image ...',
    });
    await loading.present();

    this.file = $event.target.files[0];
    this.api._uploadImageFile( this.file, 'shopPro', ( result ) => {
      if ( result.flag ) {
        this.shop.img = result.url;
        this.api._edit('shops', this.shop.id, { img: result.url}, ( data ) => {
          loading.dismiss();
          this.data.setMyShop(this.shop);
          this.getShop();
        });
      } else {

      }
    });
  }

  getShop() {
    this.shop = this.data.getMyShop();
  }

}
