import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


//setting active user

  getActiveUser() {
    return JSON.parse(localStorage.getItem('activeUser'));
  }

  setMyShop(data){
    return localStorage.setItem('myshop', JSON.stringify(data));

  }

  getMyShop() {
    return JSON.parse(localStorage.getItem('myshop'));
  }

  getActiveShop() {
    return JSON.parse(localStorage.getItem('activeShop'));
  }


}
