import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  openForm: boolean = false;
  shop: any;
  products: any;
  file: File;
  btnText = 'Add Product';
  processing = false;
  img: any;
  constructor(
    public data:DataService,
    public api:ApiService
  ) {

   }

  ngOnInit() {
    this.shop = this.data.getMyShop();
    this.img = 'assets/icon/shop.jpg';
  }

  ionViewWillEnter(){
    this.fetchProduct();
  }

  fetchProduct() {
    const where =  {key: 'shop_id', value: this.shop.id };
    this.api._get('products', where).subscribe( data => {
      this.products = data.docs.map(doc => doc.data());
    });
  }

  addBtnClicked() {
    this.openForm = !this.openForm;
  }


  addServices( form ) {
    this.btnText = 'Please wait ... ';
    this.processing = true;
    this.api._uploadImageFile( this.file, 'products', ( uploadResult ) => {
      const product = form.value;
      product.shop_id = this.shop.id;
      product.download_url = uploadResult.url,
      this.api._add('products', product, ( result ) => {
          this.btnText = 'Add Product';
          this.processing = false;
          this.img = 'assets/icon/shop.jpg';
          if ( result.flag) {
              this.addBtnClicked();
              this.fetchProduct();
          } else {
            alert(result.error.message);
          }
      });
    });
  }

  pickPhoto($event): void {
    this.file = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.img = reader.result;
    reader.readAsDataURL(this.file);
  }

}
