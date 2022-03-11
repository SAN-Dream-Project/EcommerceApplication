import { Injectable } from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [{
    sNo: 'P1',
    imgSrc: '../../../assets/images/Logo.png',
    title: 'Product Title 1',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    price: 1000,
    quantity: 1
  }, {
    sNo: 'P2',
    imgSrc: '../../../assets/images/Logo.png',
    title: 'Product Title 2',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    price: 2000,
    quantity: 1
  }, {
    sNo: 'P3',
    imgSrc: '../../../assets/images/Logo.png',
    title: 'Product Title 3',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    price: 3000,
    quantity: 1
  }, {
    sNo: 'P4',
    imgSrc: '../../../assets/images/Logo.png',
    title: 'Product Title 4',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    price: 4000,
    quantity: 1
  }, {
    sNo: 'P5',
    imgSrc: '../../../assets/images/Logo.png',
    title: 'Product Title 5',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    price: 5000,
    quantity: 1
  }, {
    sNo: 'P6',
    imgSrc: '../../../assets/images/Logo.png',
    title: 'Product Title 6',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    price: 6000,
    quantity: 1
  }];

  constructor() { }

  public getProductDetails():Product[] {
    return this.products;
  }

  public getProductDetailsByProductID(productID:string):Product {
    let productObj:Product = {} as Product;
    this.products.map((product)=> {
      if (productID === product.sNo) {
        productObj = product;
      }
    });
    return productObj;
  }
}
